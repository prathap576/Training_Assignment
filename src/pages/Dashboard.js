import { Link } from "react-router-dom";

function Dashboard() {
  const user = JSON.parse(localStorage.getItem("loggedUser"));

  return (
    <div className="container">
      <h2>Welcome {user?.name}</h2>
      <Link to="/submit-ticket">Submit Ticket</Link><br />
      <Link to="/my-tickets">My Tickets</Link>
    </div>
  );
}

export default Dashboard;
