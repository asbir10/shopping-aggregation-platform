// src/components/Navbar.jsx
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: '#4caf50' }}>
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Grocery Shop
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button
              component={Link}
              to="/t"
              sx={{ textDecoration: 'none', color: 'white' }}
            >
              Login
            </Button>
            <Button
              component={Link}
              to="/admin"
              sx={{ textDecoration: 'none', color: 'white' }}
            >
              Admin
            </Button>
            <Button
              component={Link}
              to="/o"
              sx={{ textDecoration: 'none', color: 'white' }}
            >
              Order
            </Button>
        {/* Add more buttons/links as needed */}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
