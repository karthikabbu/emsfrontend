import React, { useState } from 'react';
import { TextField, Button, Typography, Card, CardContent } from '@mui/material';

const ResetPassword = () => {
  const [email, setEmail] = useState('');

  const handleResetPassword = (e) => {
    e.preventDefault();
    // Handle reset password logic here
    console.log('Email:', email);
  };

  return (
    <div style={{ 
        display: 'flex', 
        minHeight: '100vh', 
        justifyContent: 'center', 
        alignItems: 'center' 
      }}>
      <Card style={{ maxWidth: '400px', width: '100%', padding: '20px' }}>
        <CardContent>
          <Typography variant="h4" component="h1" gutterBottom>
            Reset Password
          </Typography>
          <Typography variant="body2" component="p">
            Enter your email address to reset your password
          </Typography>
          <form onSubmit={handleResetPassword} style={{ width: '100%', marginTop: '16px' }}>
            <TextField
              label="Email Address"
              variant="outlined"
              margin="normal"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button
              variant="contained"
              color="info"
              fullWidth
              type="submit"
              style={{ marginTop: '16px' }}
            >
              Reset Password
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResetPassword;
