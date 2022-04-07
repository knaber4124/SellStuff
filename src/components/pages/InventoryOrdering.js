import React, { Fragment, useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import UsersContext from '../../context/users/usersContext';
import { Grid, Button, MenuItem, InputLabel, FormControl, Select } from '@mui/material';
import './pages.css';

function InventoryOrdering() {
  const [purchaseQuantity, setQuantity] = React.useState('');
  const handleChange = (event) => {
    setQuantity(event.target.value);
  };
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