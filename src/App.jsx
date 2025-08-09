import { useState, useEffect } from 'react';
import './App.css';
import Home from './components/Home.jsx';
import Add from './components/Add.jsx';
import Profile from './components/Profile.jsx';
// import Login from './components/Login.jsx'; // Capital 'L'
import AddUser from './components/Adduser.jsx'; // Add this import if not present
import { Routes, Route } from 'react-router-dom'; 


function App() {
  // const [userRole, setUserRole] = useState(null);

  // useEffect(() => {
  //   const savedRole = localStorage.getItem("role");
  //   if (savedRole) setUserRole(savedRole);
  // }, []);

  // if (!userRole) {
  //   // Show login if not logged in
  //   return <Login setUserRole={setUserRole} />;
  // }

  // // Show AddUser if admin, else show routes as before
  // if (userRole === "admin") {
  //   return <AddUser />;
  // }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<Add />} />
      <Route path="/profile" element={<Profile />} />
       <Route path="/adduser" element={<AddUser/>} />
      {/* <Route path="/login" element={<Login setUserRole={setUserRole} />} /> */}
      {/* Add more routes as needed */}
    </Routes>
  );
}

export default App;