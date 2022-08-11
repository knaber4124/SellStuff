import React, { Fragment, useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import UsersContext from '../../context/users/usersContext';
import Axios from 'axios';
import { Grid, Button, MenuItem, InputLabel, FormControl, Select } from '@mui/material';
import './pages.css';
import { render } from '@testing-library/react';


let itemList = [];

async function getItems() {
  try {
    Axios.get('http://localhost:4141/api/getItems').then((result) => {
        itemList.push(result)
    })
  }
  catch (err) {
    console.log(err)
  }
}


function InventoryManagement() {
  const usersContext = useContext(UsersContext);

  const { loggedIn, user } = usersContext;
  const navigate = useNavigate();


  useEffect(() => {
    getItems();
    console.log(itemList)
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
          {itemList.map(element => (
            <p3 key={element.itemID}>{element.itemName}</p3>
          ))}
        </Grid>
      </Grid>

      <Button variant='contained' component='a' href='/ordering'>Order More Inventory</Button>
    </Fragment>
  )
}

export default InventoryManagement