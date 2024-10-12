import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="nav-main">
      <Link to="/">Home</Link>
      <Link to="/blog">Blog</Link>
    </div>
  );
};

export default Navbar;
