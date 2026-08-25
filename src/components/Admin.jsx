import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Button,
} from '@mui/material';

// Sample Data (This should ideally come from a backend API)
const sampleData = {
  groceries: [
    { id: 1, name: 'Apples', stock: 50, price: '120 rup' },
    { id: 2, name: 'Bananas', stock: 100, price: '70 rup' },
    { id: 3, name: 'Carrots', stock: 80, price: '50 rup' },
  ],
  users: [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  ],
  bills: [
    { id: 1, user: 'John Doe', amount: '500 rup' },
    { id: 2, user: 'Jane Smith', amount: '300 rup' },
  ],
};

// GroceryCard Component
const GroceryCard = ({ grocery }) => (
  <Card>
    <CardContent>
      <Typography variant="h6">{grocery.name}</Typography>
      <Typography variant="body2">Stock: {grocery.stock}</Typography>
      <Typography variant="h6" color="primary">
        Price: {grocery.price}
      </Typography>
      <Box sx={{ marginTop: 2, textAlign: 'center' }}>
        <Button variant="outlined" color="primary" sx={{ marginRight: 1 }}>
          Edit
        </Button>
        <Button variant="outlined" color="error">
          Delete
        </Button>
      </Box>
    </CardContent>
  </Card>
);

// UserCard Component
const UserCard = ({ user }) => (
  <Card>
    <CardContent>
      <Typography variant="h6">{user.name}</Typography>
      <Typography variant="body2">{user.email}</Typography>
      <Box sx={{ marginTop: 2, textAlign: 'center' }}>
        <Button variant="outlined" color="primary" sx={{ marginRight: 1 }}>
          View
        </Button>
        <Button variant="outlined" color="error">
          Delete
        </Button>
      </Box>
    </CardContent>
  </Card>
);

// BillCard Component
const BillCard = ({ bill }) => (
  <Card>
    <CardContent>
      <Typography variant="h6">User: {bill.user}</Typography>
      <Typography variant="body2">Amount: {bill.amount}</Typography>
      <Box sx={{ marginTop: 2, textAlign: 'center' }}>
        <Button variant="outlined" color="primary">
          View Details
        </Button>
      </Box>
    </CardContent>
  </Card>
);

// AdminDashboard Component
const AdminDashboard = () => {
  return (
    <Container sx={{ marginTop: '2rem' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Admin Dashboard
      </Typography>

      {/* Groceries Section */}
      <Box sx={{ marginBottom: '2rem' }}>
        <Typography variant="h5" gutterBottom>
          Groceries in Stock
        </Typography>
        <Grid container spacing={4}>
          {sampleData.groceries.map((grocery) => (
            <Grid item key={grocery.id} xs={12} sm={6} md={4}>
              <GroceryCard grocery={grocery} />
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Users Section */}
      <Box sx={{ marginBottom: '2rem' }}>
        <Typography variant="h5" gutterBottom>
          Registered Users
        </Typography>
        <Grid container spacing={4}>
          {sampleData.users.map((user) => (
            <Grid item key={user.id} xs={12} sm={6} md={4}>
              <UserCard user={user} />
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Bills Section */}
      <Box>
        <Typography variant="h5" gutterBottom>
          Bills
        </Typography>
        <Grid container spacing={4}>
          {sampleData.bills.map((bill) => (
            <Grid item key={bill.id} xs={12} sm={6} md={4}>
              <BillCard bill={bill} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default AdminDashboard;
