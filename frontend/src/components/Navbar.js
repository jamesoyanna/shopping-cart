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
            <Link to="/cart">

            </Link>
          </li>
        </ul>
        {/*  Hamburger Menu */}
      </nav>
    );
}

export default Navbar;
