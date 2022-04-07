import React, { Fragment, useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import UsersContext from '../../context/users/usersContext';

import { Grid, Button, MenuItem, InputLabel, FormControl, Select } from '@mui/material';
import './pages.css';



function InventoryManagement() {
  const usersContext = useContext(UsersContext);

  const { loggedIn, user } = usersContext;
  const navigate = useNavigate();


  useEffect(() => {
    console.log(loggedIn);
    if (loggedIn === false) {
      navigate('/');
    }
  }, [loggedIn])
  return (
    <Fragment>
      <p1>Inventory Management</p1>
      <br />
      <br />
      <Grid container spacing={3}>
        <Grid item xs={4} className='inventoryItem'>
          <p2>Item Name:</p2>
          <br />
          <p2>Item Cost:</p2>
          <br />
          <p2>Item MRSP:</p2>
          <br />
          <p2>Quantity in Stock:</p2>
        </Grid>



      </Grid>

      <Button variant='contained' component='a' href='/ordering'>Order More Inventory</Button>
    </Fragment>
  )
}

export default InventoryManagement