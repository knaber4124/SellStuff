import React, {  useContext, Fragment } from 'react';
import { Button, Box, TextField } from '@mui/material';
import UsersContext from '../../context/users/usersContext';



const LogIn = () => {
  const usersContext = useContext(UsersContext);

  const { logIn } = usersContext;

  const handleSubmit = () => {
    logIn()
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

      <Button variant='contained' component='a' href='/usermanagement' onClick={handleSubmit} >Log In</Button>


    </Fragment>
  )
}

export default LogIn