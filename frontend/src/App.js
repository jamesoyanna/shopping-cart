import './App.css';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';

function App() {
  return (
    <Router>
      <main>
        <Navbar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/product/:id" component={ProductPage} />
          <Route path="/cart" component={CartPage} />
        </Switch>
      </main>
    </Router>
  );
  
}
export default App;
