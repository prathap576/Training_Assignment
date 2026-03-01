import { useState } from "react";

function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    department: "",
    empId: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(form);
    localStorage.setItem("users", JSON.stringify(users));
    alert("Registration Successful");
  };

  return (
    <div className="container">
      <h2>Employee Signup</h2>
      <input name="name" placeholder="Name" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input name="password" placeholder="Password" onChange={handleChange} />
      <input name="department" placeholder="Department" onChange={handleChange} />
      <input name="empId" placeholder="Employee ID" onChange={handleChange} />
      <button onClick={handleSubmit}>Register</button>
    </div>
  );
}

export default Signup;
