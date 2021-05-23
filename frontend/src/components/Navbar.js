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
            <Link to="/cart">{/* Icon*/}</Link>
            Cart
            <span className="cartlogo__badge">0</span>
          </li>

          <li>
            <Link to="/">
           </Link>
           Shop
          </li>
        </ul>

        {/*  Hamburger Menu */}
        <div className="hamburger_menu">
            <div></div>
        </div>
      </nav>
    );
}

export default Navbar;
