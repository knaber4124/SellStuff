import React, { Fragment, useState } from 'react'
import { Grid, Button, MenuItem, InputLabel, FormControl, Select } from '@mui/material';
import './pages.css';

function InventoryOrdering() {
  const [purchaseQuantity, setQuantity] = React.useState('');
  const handleChange = (event) => {
    setQuantity(event.target.value);
  };

  return (
    <Fragment>
      <p1>Inventory Ordering</p1>
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
        <Grid item xs={8}>
          <FormControl sx={{ m: 1, minWidth: 80 }}>            <InputLabel id="demo-simple-select-label">Quantity</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={purchaseQuantity}
              label="Quantity To Order"
              onChange={handleChange}
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={6}>6</MenuItem>
              <MenuItem value={7}>7</MenuItem>
              <MenuItem value={8}>8</MenuItem>
              <MenuItem value={9}>9</MenuItem>
              <MenuItem value={10}>10</MenuItem>
            </Select>
          </FormControl>

        </Grid>
      </Grid>
      <Button variant='contained' component='a' href='/inventory'>Submit Order</Button>

    </Fragment>
  )
}

export default InventoryOrdering