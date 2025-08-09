
import { useState } from "react";

function AddUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("student"); // default student

  const handleAddUser = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("You must be logged in as admin.");
      return;
    }

    const res = await fetch("http://localhost:5000/api/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({ name, email, password, phone, role })
    });

    const data = await res.json();

    if (res.ok) {
      alert("User added successfully!");
      setName("");
      setEmail("");
      setPassword("");
      setPhone("");
      setRole("student");
    } else {
      alert(data.error || "Failed to add user");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto" }}>
      <h2>Add New User</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ width: "100%", marginBottom: "8px" }}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ width: "100%", marginBottom: "8px" }}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ width: "100%", marginBottom: "8px" }}
      />
      <input
        type="text"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        style={{ width: "100%", marginBottom: "8px" }}
      />
      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        style={{ width: "100%", marginBottom: "8px" }}
      >
        <option value="student">Student</option>
        <option value="admin">Admin</option>
      </select>
      <button onClick={handleAddUser} style={{ width: "100%" }}>
        Add User
      </button>
    </div>
  );
}

export default AddUser;
