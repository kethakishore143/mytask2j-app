import { Link } from "react-router-dom";
import "./index.css";

const Header = () => (
  <nav className="nav-container">
    <div>
      <h1>Shopping</h1>
    </div>
    <ul className="nav-items">
      <li>Home</li>
      <Link to="/products">
        <li>products</li>
      </Link>
      <li>
        <button>Logout</button>
      </li>
    </ul>
  </nav>
);

export default Header;
