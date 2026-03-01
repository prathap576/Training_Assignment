import TicketCard from "../Components/TicketCard";




function MyTickets() {
  const tickets = JSON.parse(localStorage.getItem("tickets")) || [];

  return (
    <div className="container">
      <h2>My Tickets</h2>
      {tickets.map((t) => (
        <TicketCard key={t.id} ticket={t} />
      ))}
    </div>
  );
}

export default MyTickets;
