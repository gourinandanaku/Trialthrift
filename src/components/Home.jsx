import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  Box,
  Button,
  Paper,
  Container,
  IconButton
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const theme = createTheme({
  palette: {
    primary: { main: '#003366' },
    secondary: { main: '#f0f0f0' },
    background: { default: '#ffffff' }
  },
  typography: {
    fontFamily: 'Inter, Arial, sans-serif',
    h5: { fontWeight: 600 }
  }
});

const Home = () => {
  const navigate = useNavigate(); // ✅ Move inside component
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');
  const [role, setRole] = useState(null);

  // Load role from localStorage after login
  useEffect(() => {
    const savedRole = localStorage.getItem('role');
    if (savedRole) setRole(savedRole);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Searching for: ${search}`);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>
        
        {/* Top Navigation */}
        <AppBar position="static" color="inherit" elevation={0}>
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              EduThrift
            </Typography>
            <Box sx={{ display: 'flex', gap: 3 }}>
              <Button onClick={() => navigate('/')}>Home</Button>

              {/* Admin-only: Add User */}
              {role === 'admin' && (
                <Button onClick={() => navigate('/adduser')}>Add User</Button>
              )}

              {/* Student-only: Add Product */}
              {role === 'student' && (
                <Button onClick={() => navigate('/add')}>Add Product</Button>
              )}

              <Button onClick={() => navigate('/profile')}>Profile</Button>
              <IconButton>
                <AccountCircle />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>

        {/* Search Box */}
        <Container maxWidth="md" sx={{ my: 4 }}>
          <Paper
            component="form"
            onSubmit={handleSearch}
            sx={{
              p: '2px 4px',
              display: 'flex',
              alignItems: 'center',
              width: '100%'
            }}
          >
            <SearchIcon sx={{ ml: 1, mr: 1 }} />
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search for books, stationery, or notes"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </Paper>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default Home;
