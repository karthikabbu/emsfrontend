import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Typography, Link, Box, Card, CardContent, CardMedia } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:2525/login', { username, password });
      console.log('Login successful:', response.data);
      // Handle successful login, e.g., redirect to a dashboard
    } catch (error) {
      console.error('Error during login:', error);
      setError('Login failed. Please check your credentials and try again.');
    }
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:2525/forgot-password', { username });
      console.log('Forgot Password request successful:', response.data);
      // Handle successful forgot password request, e.g., show a notification or redirect
    } catch (error) {
      console.error('Error during forgot password request:', error);
      setError('Failed to process forgot password request. Please try again.');
    }
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <Card style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
        <CardContent style={{ width: '100%', textAlign: 'center' }}>
          <CardMedia
            component="img"
            image="https://th.bing.com/th?id=OIP.4OD58STGckfEPkCPqB_WxAHaGF&w=275&h=226&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
            alt="Placeholder Image"
          />
        </CardContent>
      </Card>
      <Card style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <CardContent style={{ width: '100%', maxWidth: '400px' }}>
          <Typography variant="h3" gutterBottom>
            Welcome back!
          </Typography>
          <Typography variant="body1" component="p">
            Please login using your registered account
          </Typography>
          <br />
          {error && <Typography color="error">{error}</Typography>}
          <form onSubmit={handleLogin} style={{ width: '100%' }}>
            <Typography fontSize={"70%"}><b>USERNAME</b></Typography>
            <TextField
              placeholder='Register Email ID'
              variant="outlined"
              margin="none"
              fullWidth
              sx={{ mb: 2 }}
              InputProps={{
                style: {
                  borderRadius: '12px',
                  height: '40px'
                }
              }}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Typography fontSize={"70%"}><b>PASSWORD</b></Typography>
            <TextField
              placeholder='Enter Password'
              type="password"
              margin="none"
              fullWidth
              sx={{ mb: 2 }}
              InputProps={{
                style: {
                  borderRadius: '12px',
                  height: '40px'
                }
              }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              variant="contained"
              color="error"
              fullWidth
              type="submit"
              style={{ marginTop: '16px' }}
            >
              Login
            </Button>
          </form>
          <Box display="flex" justifyContent="space-between" width="100%" marginTop="8px">
            <Link href="#" onClick={handleForgotPassword} sx={{ color: 'black' }}>
              Forgot Password?
            </Link>
            <Link component={RouterLink} to="/reset-password" sx={{ color: 'black' }}>
              Reset Password
            </Link>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;
