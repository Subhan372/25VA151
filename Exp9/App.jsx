import React, { useState } from "react";
import "./App.css";
const App = () => {
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [errors, setErrors] = useState({});
const [users, setUsers] = useState([]);
const [success, setSuccess] = useState("");
const validateForm = () => {
let newErrors = {};
if (name.trim() === "") {
newErrors.name = "Name is required";
}
if (email.trim() === "") {
newErrors.email = "Email is required";
}
if (password.length < 6) {
newErrors.password =
"Password must be at least 6 characters";
}
return newErrors;
};
const handleSubmit = (e) => {
e.preventDefault();
const validationErrors = validateForm();
if (Object.keys(validationErrors).length > 0) {
setErrors(validationErrors);
setSuccess("");
} else {
setErrors({});
const newUser = {
id: Date.now(),
name,
email,
};
setUsers([...users, newUser]);
setSuccess("Registration Successful!");
setName("");
setEmail("");
setPassword("");
}
};
return (
<div className="main-container">
<div className="form-container">
<h1>Registration Form</h1>
<form onSubmit={handleSubmit}>
<input
type="text"
placeholder="Enter Name"
value={name}
onChange={(e) => setName(e.target.value)}
/>
{errors.name && (
<p className="error">{errors.name}</p>
)}
<input
type="email"
placeholder="Enter Email"
value={email}
onChange={(e) => setEmail(e.target.value)}
/>
{errors.email && (
<p className="error">{errors.email}</p>
)}
<input
type="password"
placeholder="Enter Password"
value={password}
onChange={(e) => setPassword(e.target.value)}
/>
{errors.password && (
<p className="error">{errors.password}</p>
)}
<button type="submit">Register</button>
</form>
{success && (
<h3 className="success">{success}</h3>
)}
{users.length > 0 && (
<div className="users-box">
<h2>Registered Users</h2>
<ul>
{users.map((user) => (
<li key={user.id}>
{user.name} - {user.email}
</li>
))}
</ul>
</div>
)}
</div>
</div>
);
}
export default App;