import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
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

function App() {
  const isLogin = localStorage.getItem('isLogin');

  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/' exact>
            {isLogin ? <Home /> : <Redirect to='login-user' />}
          </Route>
          <Route path='/product/:productName'>
            <Product />
          </Route>
          <Route path='/shop'>
            <Shop />
          </Route>
          <Route path='/login-user'>
            <LoginUser />
          </Route>
          <Route path='/register-user'>
            <RegisterUser />
          </Route>
          <Route path='/cart-list'>
            <CartList />
          </Route>
          <Route path='/payment'>
            <Payment />
          </Route>
          <Route path='/orders'>
            <Orders />
          </Route>
          <Route path='/order-details'>
            <OrderDetails />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
