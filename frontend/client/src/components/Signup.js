import { Container,Box,Typography, Button,TextField } from '@mui/material'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { handleError, handleSuccess } from '../utils';
import 'react-toastify/dist/ReactToastify.css';


function Signup() {
    const navigate = useNavigate();
    
    
    const [signup,shouldsignup] = useState({
        name:"",
        email:"",
        password:""
    })
    
    const handleChange = (e) =>{
        const {name, value} = e.target;
        console.log(name,value);
        const copySignup = {...signup};
        copySignup[name]=value;
        shouldsignup(copySignup);
    }
    const handleSubmit = async (e) => {
      e.preventDefault();
      const {name,email,password} = signup;
      if(!name || !email || !password){
        return handleError('Email, Name or Password not filled');

      }
      
    const url = `${process.env.REACT_APP_API_URL}/auth/signup`;
      const response = await fetch(url,{
        method:"POST",
        headers: {
            'Content-Type':'application/json'
        },
        body:JSON.stringify(signup)
      });
      const result = await response.json();
      const {message,success,error} = result;
      if(success){
        handleSuccess(message);
        setTimeout(()=>{
            navigate('/login')
        },2000)
        return;
      }
      else if(!success){
        return handleError(message);
      }
      else if(error){
        const details = error?.details.message;
        handleError(details);
      }
      
      console.log(result);
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
          Signup
        </Typography>

        <TextField
          label="Name"
          variant="outlined"
          name="name"
          value={signup.name}
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
          label="Email"
          variant="outlined"
          name="email"
          onChange={handleChange}
          value={signup.email}
          
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
          onChange={handleChange}
          value={signup.password}
          
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
            color:'wheat',
        }}>Already Registered......<Link style={{color:'white'}} to='/login'>Login</Link></Typography>
      </Box>
      <ToastContainer/>
    </Container>
  )
}

export default Signup
