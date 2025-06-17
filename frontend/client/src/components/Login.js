import React from 'react';
import { Container, Box, TextField, Typography, Button } from '@mui/material';

function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
  };

  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        height: '100vh',
        width: '100%',  
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        overflowX: 'hidden', 
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          border: '1px solid #333',
          height: 'auto',
          width: '90%',
          maxWidth: 400,
          p: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 3,
          boxShadow: 10,
          color: 'white',
          backgroundColor: '#262626',
          borderRadius: 2,
        }}
      >
        <Typography
          sx={{
            fontFamily: 'cursive',
            fontSize: 30,
            color: 'white',
          }}
        >
          Login
        </Typography>

        <TextField
          label="Email"
          variant="outlined"
          name="email"
          required
          fullWidth
          InputLabelProps={{ style: { color: 'lightgray' } }}
          InputProps={{ style: { color: 'white' } }}
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: '#555' },
              '&:hover fieldset': { borderColor: '#888' },
              '&.Mui-focused fieldset': { borderColor: 'white' },
            },
          }}
        />

        <TextField
          label="Password"
          type="password"
          variant="outlined"
          name="password"
          required
          fullWidth
          InputLabelProps={{ style: { color: 'lightgray' } }}
          InputProps={{ style: { color: 'white' } }}
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: '#555' },
              '&:hover fieldset': { borderColor: '#888' },
              '&.Mui-focused fieldset': { borderColor: 'white' },
            },
          }}
        />

        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{ backgroundColor: '#00bcd4', mt: 2 }}
        >
          Submit
        </Button>
        <Typography>Not Registered yet? Sign Up</Typography>
      </Box>
    </Container>
  );
}

export default Login;
