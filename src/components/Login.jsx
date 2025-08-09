import { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper
} from "@mui/material";

function Login({ setUserRole }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const res = await fetch("http://localhost:5000/api/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();
    if (data.token) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.role);
      setUserRole(data.role);
    } else {
      alert(data.error);
    }
  };

  return (
    <Box
      maxWidth={400}
      mx="auto"
      mt={10}
      component={Paper}
      elevation={4}
      p={4}
      borderRadius={3}
    >
      <Typography variant="h5" align="center" gutterBottom>
        Login
      </Typography>
      <TextField
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        sx={{ mt: 2, fontWeight: 600 }}
        onClick={handleLogin}
      >
        Login
      </Button>
    </Box>
  );
}
export default Login;
      