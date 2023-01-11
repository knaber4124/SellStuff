import React, { Fragment, useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import UsersContext from '../../context/users/usersContext';
import ItemsContext from '../../context/items/itemsContext';
import { Grid, Button, MenuItem, InputLabel, FormControl, Select } from '@mui/material';
import './pages.css';
import { render } from '@testing-library/react';
import Axios from 'axios';




function InventoryManagement() {
  let items = []
  const usersContext = useContext(UsersContext);
  const itemsContext = useContext(ItemsContext);

  const { loggedIn, user } = usersContext;
  const { inventory } = itemsContext;
  const navigate = useNavigate();

  async function getItems() {
    try {
      Axios.get('http://localhost:4141/api/getItems').then((res) => {

        items.push(res.data);

      });



    }
    catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    if (loggedIn === false) {
      navigate('/');
    }
  }, [loggedIn, getItems()])

  return (
    <Fragment>
      <p1>Inventory Management</p1>
      <br />
      <br />
      {/* <Grid container spacing={3}> */}
      <ul>
        {items.map((item) =>
          <li key={item.itemID} value={item.itemName} />
        )}

      </ul>
      {/* </Grid> */}
      <Grid container spacing={3}>
        <Grid item xs={4} className='inventoryItem'>
        </Grid>
      </Grid>

      <Button variant='contained' component='a' href='/ordering'>Order More Inventory</Button>
    </Fragment>
  )
}

export default InventoryManagement