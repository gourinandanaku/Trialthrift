import { useState } from 'react';
import './App.css';
import Home from './components/Home.jsx';
import Add from './components/Add.jsx';
import Profile from './components/Profile.jsx';
import Login from './components/login.jsx';
import { Routes, Route } from 'react-router-dom'; // Removed BrowserRouter

function App() {
  const [count, setCount] = useState(0); // Optional: Remove if unused

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/addt" element={<Add />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/login" element={<Login />} />
      {/* Add more routes as needed */}
    </Routes>
  );
}

export default App;
