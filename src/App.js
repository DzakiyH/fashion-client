import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Views/home';
import Product from './Views/product';
import Shop from './Views/shop';
import Navbar from './Components/Layout/NavbarLayout';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/product/:productName'>
            <Product />
          </Route>
          <Route path='/shop'>
            <Shop />
          </Route>
          <Route path='/navbar'>
            <Navbar />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
