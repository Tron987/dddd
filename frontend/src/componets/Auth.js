import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register, login } from '../redux/actions/authActions';
import { TextField, Button, Typography, Container, Box } from '@mui/material';

const Auth = ({ history }) => {
  const [isRegister, setIsRegister] = useState(true);
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const dispatch = useDispatch();
  const error = useSelector((state) => state.auth.error);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isRegister) {
      dispatch(register(formData));
    } else {
      dispatch(login(formData));
      history.push('/dashboard');
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        mt={8}
      >
        <Typography component="h1" variant="h5">
          {isRegister ? 'Register' : 'Login'}
        </Typography>
        <form onSubmit={handleSubmit} style={{ width: '100%', marginTop: '8px' }}>
          {isRegister && (
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
              onChange={handleChange}
            />
          )}
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handleChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            style={{ margin: '24px 0 16px' }}
          >
            {isRegister ? 'Register' : 'Login'}
          </Button>
          <Button
            onClick={() => setIsRegister(!isRegister)}
            fullWidth
            variant="text"
            color="secondary"
          >
            {isRegister ? 'Already have an account? Login' : "Don't have an account? Register"}
          </Button>
          {error && (
            <Typography color="error" variant="body2">
              {error}
            </Typography>
          )}
        </form>
      </Box>
    </Container>
  );
};

export default Auth;
