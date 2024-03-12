import { Link } from "react-router-dom";
import "./index.css";

const Header = () => (
  <nav className="nav-container">
    <div>
      <h1>Shopping</h1>
    </div>
    <ul className="nav-items">
      <Link to="/" className="link-item">
      <li>Home</li>
      </Link>
      
      <Link to="/" className="link-item">
        <li>products</li>
      </Link>
      <li>
        <button>Logout</button>
      </li>
    </ul>
  </nav>
);

export default Header;
