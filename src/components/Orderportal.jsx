import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Button,
  TextField,
  Snackbar,
  Alert,
} from '@mui/material';

// Sample Data for Groceries
const sampleGroceries = [
  { id: 1, name: 'Apples', stock: 50, price: '120 rup' },
  { id: 2, name: 'Bananas', stock: 100, price: '70 rup' },
  { id: 3, name: 'Carrots', stock: 80, price: '50 rup' },
];

const OrderPortal = () => {
  const [orderedItems, setOrderedItems] = useState([]);
  const [quantity, setQuantity] = useState({});
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleOrder = (grocery) => {
    const qty = quantity[grocery.id] || 0;

    if (qty > 0) {
      setOrderedItems((prevItems) => [
        ...prevItems,
        { ...grocery, orderedQuantity: qty },
      ]);
      setQuantity({ ...quantity, [grocery.id]: 0 }); // Reset quantity
      setSnackbarOpen(true); // Show confirmation snackbar
    }
  };

  const handleQuantityChange = (id, value) => {
    setQuantity({ ...quantity, [id]: value });
  };

  return (
    <Container sx={{ marginTop: '2rem' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Order Portal
      </Typography>

      <Box sx={{ marginBottom: '2rem' }}>
        <Typography variant="h5" gutterBottom>
          Groceries Available for Order
        </Typography>
        <Grid container spacing={4}>
          {sampleGroceries.map((grocery) => (
            <Grid item key={grocery.id} xs={12} sm={6} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6">{grocery.name}</Typography>
                  <Typography variant="body2">Stock: {grocery.stock}</Typography>
                  <Typography variant="h6" color="primary">
                    Price: {grocery.price}
                  </Typography>
                  <TextField
                    type="number"
                    label="Quantity"
                    variant="outlined"
                    value={quantity[grocery.id] || ''}
                    onChange={(e) => handleQuantityChange(grocery.id, e.target.value)}
                    sx={{ marginTop: 1, width: '100%' }}
                    InputProps={{ inputProps: { min: 0, max: grocery.stock } }} // Limit input
                  />
                  <Box sx={{ marginTop: 2, textAlign: 'center' }}>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleOrder(grocery)}
                      disabled={grocery.stock === 0}
                    >
                      Order
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box>
        <Typography variant="h5" gutterBottom>
          Your Orders
        </Typography>
        <Grid container spacing={4}>
          {orderedItems.map((item, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6">{item.name}</Typography>
                  <Typography variant="body2">
                    Quantity: {item.orderedQuantity}
                  </Typography>
                  <Typography variant="h6" color="primary">
                    Total Price: {item.orderedQuantity * parseInt(item.price)} rup
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Snackbar for Order Confirmation */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
      >
        <Alert onClose={() => setSnackbarOpen(false)} severity="success">
          Order placed successfully!
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default OrderPortal;
