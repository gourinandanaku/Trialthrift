import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  Box,
  Button,
  Paper,
  Grid,
  Container,
  IconButton,
  Card,
  CardContent,
  CardMedia,
  Chip
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: { main: '#003366' }, // Navy blue
    secondary: { main: '#f0f0f0' },
    background: { default: '#ffffff' }
  },
  typography: {
    fontFamily: 'Inter, Arial, sans-serif',
    h5: { fontWeight: 600 }
  }
});

const resourceData = [
  {
    title: 'Introduction to Psychology Notes',
    subtitle: "Professor Smith’s class notes",
    img: 'https://images.unsplash.com/photo-1584697964154-e84c59ac2547?fit=crop&w=400&q=80'
  },
  {
    title: 'Calculus I Study Guide',
    subtitle: "Comprehensive guide for Calculus I",
    img: 'https://images.unsplash.com/photo-1600195077072-218a9b1cfa0e?fit=crop&w=400&q=80'
  },
  {
    title: 'Organic Chemistry Past Exams',
    subtitle: "Past exams for Organic Chemistry",
    img: 'https://images.unsplash.com/photo-1581091215367-59df4fab24aa?fit=crop&w=400&q=80'
  },
  {
    title: 'History of Art Notes',
    subtitle: "Detailed notes on Art History",
    img: 'https://images.unsplash.com/photo-1557761088-66c933c80a61?fit=crop&w=400&q=80'
  },
  {
    title: 'Computer Science Algorithms Study Guide',
    subtitle: "Study guide for Computer Science Algorithms",
    img: 'https://images.unsplash.com/photo-1531497865144-0464ef8fb9a6?fit=crop&w=400&q=80'
  },
  {
    title: 'Economics 101 Past Exams',
    subtitle: "Past exams for Economics 101",
    img: 'https://images.unsplash.com/photo-1583324113626-70df0f4deaab?fit=crop&w=400&q=80'
  }
];

const Home = () => {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');

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
              CampusConnect
            </Typography>
            <Box sx={{ display: 'flex', gap: 3 }}>
              <Button>Home</Button>
              <Button>Resources</Button>
              <Button>Groups</Button>
              <Button>Events</Button>
              <Button>Support</Button>
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
              placeholder="Search for resources, courses, or groups"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </Paper>
        </Container>

        {/* Filter Buttons */}
        <Container maxWidth="lg" sx={{ mb: 3 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Featured Resources
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            {['All', 'Notes', 'Study Guides', 'Past Exams'].map((type) => (
              <Chip
                key={type}
                label={type}
                color={filter === type ? 'primary' : 'default'}
                onClick={() => setFilter(type)}
                clickable
              />
            ))}
          </Box>
        </Container>

        {/* Resource Cards */}
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            {resourceData.map((item, idx) => (
              <Grid item xs={12} sm={6} md={4} key={idx}>
                <Card sx={{ height: '100%' }}>
                  <CardMedia component="img" height="140" image={item.img} alt={item.title} />
                  <CardContent>
                    <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.subtitle}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>

        {/* Footer */}
        <Container maxWidth="lg" sx={{ mt: 6, mb: 2, textAlign: 'center' }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, mb: 1 }}>
            <Button>About</Button>
            <Button>Contact</Button>
            <Button>Terms of Service</Button>
            <Button>Privacy Policy</Button>
          </Box>
          <Typography variant="body2" color="text.secondary">
            ©2024 CampusConnect. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default Home;
