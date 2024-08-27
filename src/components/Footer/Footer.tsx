import React from 'react';
import { Box, Container, Grid, Link, Typography } from '@mui/material';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#f8f8f8',
        padding: '20px 0',
        borderTop: '1px solid #e7e7e7',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Company
            </Typography>
            <Link href="#" color="inherit" underline="none" display="block">
              About Us
            </Link>
            <Link href="#" color="inherit" underline="none" display="block">
              Contact Us
            </Link>
            <Link href="#" color="inherit" underline="none" display="block">
              Careers
            </Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Services
            </Typography>
            <Link href="#" color="inherit" underline="none" display="block">
              Web Development
            </Link>
            <Link href="#" color="inherit" underline="none" display="block">
              App Development
            </Link>
            <Link href="#" color="inherit" underline="none" display="block">
              SEO
            </Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Box>
              <Link href="#" color="inherit" sx={{ marginRight: 1 }}>
                <Facebook />
              </Link>
              <Link href="#" color="inherit" sx={{ marginRight: 1 }}>
                <Twitter />
              </Link>
              <Link href="#" color="inherit">
                <Instagram />
              </Link>
            </Box>
          </Grid>
        </Grid>
        <Box mt={4} textAlign="center">
          <Typography variant="body2" color="textSecondary">
            © {new Date().getFullYear()} Your Company. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
