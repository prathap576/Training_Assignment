
import TicketCard from "../Components/TicketCard";


function AdminDashboard() {
  const tickets = JSON.parse(localStorage.getItem("tickets")) || [];
  const users = JSON.parse(localStorage.getItem("users")) || [];

  return (
    <div className="container">
      <h2>Admin Dashboard</h2>

      <h3>All Tickets</h3>
      {tickets.map((t) => (
        <TicketCard key={t.id} ticket={t} />
      ))}

      <h3>Employees</h3>
      {users.map((u, i) => (
        <p key={i}>{u.name} - {u.department}</p>
      ))}
    </div>
  );
}

export default AdminDashboard;
