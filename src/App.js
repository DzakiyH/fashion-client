import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getAllProducts, getAllCategories } from './States/products/action';
import { getAllOrders } from './States/cart/action';
import jwt from 'jsonwebtoken';
import Home from './Views/home';
import Product from './Views/product';
import Shop from './Views/shop';
import LoginUser from './Views/loginUser';
import RegisterUser from './Views/registerUser';
import CartList from './Views/cartList';
import Payment from './Views/payment';
import Orders from './Views/orders';
import OrderDetails from './Views/order-details';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = (props) => {
  const { getAllProducts, getAllCategories, getAllOrders } = props;
  const [isLogin, setIsLogin] = useState(true);
  const token = localStorage.getItem('token');

  useEffect(() => {
    getAllProducts();
    getAllCategories();
    getAllOrders();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (token) {
      jwt.verify(token, process.env.REACT_APP_SECRET_TOKEN, (err, decoded) => {
        if (err && err.message === 'jwt expired') {
          localStorage.removeItem('token');
          localStorage.removeItem('isLogin');
          setIsLogin(false);
        } else if (decoded) {
          setIsLogin(true);
        }
      });
    } else {
      localStorage.removeItem('token');
      localStorage.removeItem('isLogin');
      setIsLogin(false);
    }
  }, [token]);

  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/' exact>
            {isLogin ? <Home /> : <Redirect to='/login-user' />}
          </Route>
          <Route path='/product/:productName'>
            {isLogin ? <Product /> : <Redirect to='/login-user' />}
          </Route>
          <Route path='/shop'>
            {isLogin ? <Shop /> : <Redirect to='/login-user' />}
          </Route>
          <Route path='/login-user'>
            {isLogin ? (
              <Redirect to='/' />
            ) : (
              <LoginUser setIsLogin={setIsLogin} />
            )}
          </Route>
          <Route path='/register-user'>
            <RegisterUser />
          </Route>
          <Route path='/cart-list'>
            {isLogin ? <CartList /> : <Redirect to='/login-user' />}
          </Route>
          <Route path='/payment'>
            {isLogin ? <Payment /> : <Redirect to='/login-user' />}
          </Route>
          <Route path='/orders'>
            {isLogin ? <Orders /> : <Redirect to='/login-user' />}
          </Route>
          <Route path='/order-details'>
            {isLogin ? <OrderDetails /> : <Redirect to='/login-user' />}
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  getAllProducts: () => dispatch(getAllProducts()),
  getAllCategories: () => dispatch(getAllCategories()),
  getAllOrders: () => dispatch(getAllOrders()),
});

export default connect(null, mapDispatchToProps)(App);
