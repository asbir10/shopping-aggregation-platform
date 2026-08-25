import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, CardMedia } from '@mui/material';

const HomePage = () => {
  // Sample data for display
  const sampleProducts = [
    {
      id: 1,
      name: 'Fresh Apples',
      description: 'Crisp and sweet apples.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl4QME_OQGRBXUHWMVmrIvdk6XWbJgTWyBmg&s',
      price: '120 rup',
    },
    {
      id: 2,
      name: 'Organic Bananas',
      description: 'Rich in potassium.',
      image: 'https://cdn.producebusiness.com/2017/09/organic-banans-featured-image.jpg',
      price: '70 rup',
    },
    {
      id: 3,
      name: 'Beans',
      description: 'Fresh Beans.',
      image: 'https://nissioverseas.com/upload/1977006234-1719486417156.jpg',
      price: '40 rup',
    },
    {
      id: 4,
      name: 'Juicy Oranges',
      description: 'Loaded with Vitamin C.',
      image: 'https://www.grocery.coop/sites/default/files/wp-content/uploads/2016/02/Oranges.jpg',
      price: '80 rup',
    },
    {
      id: 5,
      name: 'Kiwi',
      description: 'Fresh ripe Kiwis.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaFcp8lmM3OALQUX2xx6vjyNZ8i4Py770U_A&s',
      price: '60 rup',
    },
    {
      id: 6,
      name: 'Spinach',
      description: 'Rich in iron and vitamins.',
      image: 'https://cdn.britannica.com/30/82530-050-79911DD4/Spinach-leaves-vitamins-source-person.jpg',
      price: '50 rup',
    },
  ];

  return (
    <div className="home-background">
      <Container style={{ marginTop: '2rem' }}>
        <Typography
          variant="h2"
          align="center"
          gutterBottom
          style={{ fontWeight: 'bold', color: 'white', textShadow: '3px 3px 8px rgba(0,0,0,0.3)' }}
        >
          Welcome to Your Grocery Store
        </Typography>
        <Typography
          variant="h6"
          align="center"
          color="textSecondary"
          paragraph
          style={{ fontWeight: 'bold', color: 'black', textShadow: '2px 2px 5px rgba(0,0,0,0.3)' }}
        >
          Find the freshest groceries delivered to your doorstep!
        </Typography>

        <Box mt={5}>
          <Typography variant="h4" gutterBottom style={{ fontWeight: 'bold', color: 'black' }}>
            Featured Products
          </Typography>
          <Grid container spacing={4}>
            {sampleProducts.map((product) => (
              <Grid item key={product.id} xs={12} sm={6} md={3}>
                <Card
                  sx={{
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.05)',
                    },
                  }}
                  style={{ maxWidth: '300px', margin: 'auto' }}
                >
                  <CardMedia
                    component="img"
                    height="160"
                    image={product.image}
                    alt={product.name}
                  />
                  <CardContent>
                    <Typography variant="h6" component="div" style={{ fontWeight: 'bold' }}>
                      {product.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" style={{ fontSize: '0.8rem' }}>
                      {product.description}
                    </Typography>
                    <Typography variant="h6" color="primary" style={{ marginTop: '0.5rem', fontWeight: 'bold' }}>
                      {product.price}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default HomePage;
