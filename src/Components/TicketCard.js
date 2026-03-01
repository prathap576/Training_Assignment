function TicketCard({ ticket }) {
  return (
    <div className="card">
      <p>ID: {ticket.id}</p>
      <p>Title: {ticket.title}</p>
      <p>Priority: {ticket.priority}</p>
      <p>Status: {ticket.status}</p>
    </div>
  );
}

export default TicketCard;
