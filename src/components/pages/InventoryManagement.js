import React, { Fragment, useState } from 'react'
import { Grid, Button, MenuItem, InputLabel, FormControl, Select } from '@mui/material';
import './pages.css';



function InventoryManagement() {
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