import { useState } from "react";

function TicketForm() {
  const [ticket, setTicket] = useState({
    title: "",
    description: "",
    priority: "Low",
    department: ""
  });

  const submitTicket = () => {
    const tickets = JSON.parse(localStorage.getItem("tickets")) || [];
    const newTicket = {
      ...ticket,
      id: Date.now(),
      status: "Open"
    };
    tickets.push(newTicket);
    localStorage.setItem("tickets", JSON.stringify(tickets));
    alert("Ticket Submitted");
  };

  return (
    <>
      <input placeholder="Issue Title" onChange={(e) => setTicket({...ticket, title:e.target.value})} />
      <input placeholder="Description" onChange={(e) => setTicket({...ticket, description:e.target.value})} />
      <select onChange={(e) => setTicket({...ticket, priority:e.target.value})}>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
      <input placeholder="Department" onChange={(e) => setTicket({...ticket, department:e.target.value})} />
      <button onClick={submitTicket}>Submit</button>
    </>
  );
}

export default TicketForm;
