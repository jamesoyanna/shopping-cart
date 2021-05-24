import "./Navbar.css";
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
      <nav className="navbar">
        {/*  Logo*/}
        <div className="navbar__logo">
          <h2>Shopping Cart</h2>
        </div>
        {/*  Links*/}
        <ul className="navbar__links">
          <li>
            <Link to="/cart" className="cart__link">
              {/* Icon*/}
              <i className="fas fa-shopping-cart"></i>
              Cart
              <span className="cartlogo__badge">0</span>
            </Link>
          </li>

          <li>
            <Link to="/">Shop</Link>
          </li>
        </ul>

        {/*  Hamburger Menu */}
        <div className="hamburger_menu">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>
    );
}

export default Navbar;
