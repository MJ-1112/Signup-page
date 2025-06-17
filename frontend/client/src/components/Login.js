import React, { useState } from 'react';
import { Container, Box, TextField, Typography, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import { handleError,handleSuccess} from '../utils';
function Login() {
    
    const [login,shouldlogin] = useState({
        email:"",
        password:""
    })
    const navigate = useNavigate();
    const handleChange = (e) =>{
        const {name, value} = e.target;
        console.log(name,value);
        const copyLogin = {...login};
        copyLogin[name]=value;
        shouldlogin(copyLogin);
    }
    const handleSubmit = async (e) => {
      e.preventDefault();
      const {email,password} = login;
      if(!email || !password){
        return handleError('Email or Password not filled');
      }
            const url = `${process.env.REACT_APP_API_URL}/auth/login`;
            const response = await fetch(url,{
              method:"POST",
              headers: {
                  'Content-Type':'application/json'
              },
              body:JSON.stringify(login)
            });
            const result = await response.json();
            const {message,success} = result;
            if(success){
               handleSuccess(message);
              setTimeout(()=>{
            navigate('/dashboard')
        },2000)
            }
            else if(!success){
              return handleError(message);
            }
            console.log(result);
    }

          

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
          value={login.email}
          onChange={handleChange}
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
          value={login.password}
          onChange={handleChange}
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
        <Typography
        sx={{
            color: 'white',
        }}
        >Not Registered yet? <Link style={{color:'white'}} to='/signup'>Sign Up</Link></Typography>
      </Box>
      <ToastContainer/>
    </Container>
  );
}

export default Login;
