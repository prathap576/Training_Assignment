import { BrowserRouter, Routes, Route } from "react-router-dom";

import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import SubmitTicket from "./pages/SubmitTicket";
import MyTickets from "../src/pages/Mytickets";
import AdminDashboard from "./pages/AdminDashboard";
import Navbar from "./Components/Navbar";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/submit-ticket" element={<SubmitTicket />} />
        <Route path="/my-tickets" element={<MyTickets />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
