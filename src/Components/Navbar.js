import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>IT HelpDesk</h2>
      <div>
        <Link to="/">Login</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/admin">Admin</Link>
      </div>
    </nav>
  );
}

export default Navbar;
