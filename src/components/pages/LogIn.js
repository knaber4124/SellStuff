import React, { useRef, useEffect, useContext, Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Box, TextField } from '@mui/material';
import UsersContext from '../../context/users/usersContext';
import usersContext from '../../context/users/usersContext';



const LogIn = (props) => {
  const usersContext = useContext(UsersContext);
  let { logIn, loggedIn } = usersContext;
  const navigate = useNavigate();

  useEffect(() => {
    console.log(loggedIn);
    if (loggedIn === true) {
      navigate('/pointofsale');
    }
  }, [loggedIn])


  const handleSubmit = () => {
    logIn();
    console.log(loggedIn);
  }



  return (
    <Fragment>LogIn
      <Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, }}
        noValidate
        autoComplete="off">
        <p1>Enter your User Credentials</p1>
        <div>
          <TextField
            required
            id="outlined-required"
            label="User Name"
            name='userName'
            defaultValue=""
          />
          <TextField
            required
            id="outlined-required"
            label="Password"
            name='password'
            defaultValue=""
          />

        </div>

      </Box>

      <Button variant='contained' onClick={handleSubmit} >Log In</Button>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />


    </Fragment>
  )
}

export default LogIn