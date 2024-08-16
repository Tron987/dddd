import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Button, Box } from '@mui/material';

const Dashboard = () => {
  return (
    <Container component="main" maxWidth="md">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        mt={8}
      >
        <Typography component="h1" variant="h4">
          Dashboard
        </Typography>
        <Box mt={4}>
          <Button component={Link} to="/upload" variant="contained" color="primary" style={{ margin: '8px' }}>
            Upload File
          </Button>
          <Button component={Link} to="/files" variant="contained" color="secondary" style={{ margin: '8px' }}>
            View Files
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Dashboard;
