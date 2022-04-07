import React, { Fragment, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom';

import { Grid, Button } from '@mui/material';
import UsersContext from '../../context/users/usersContext';

import './pages.css';

const PointOfSale = () => {
  const usersContext = useContext(UsersContext);

  const { loggedIn, user } = usersContext;
  const navigate = useNavigate();

  useEffect(() => {
    console.log(loggedIn);
    if (loggedIn === false) {
      navigate('/');
    }
  }, [loggedIn])

  const onSubmit = () => {
    navigate('/checkout')
  }
  return (
    <Fragment>
      <p1>Point of Sale</p1>
      <br />
      <br />
      <br />
      <Grid container spacing={3} className='posGrid'>
        <Grid item xs={6} className='posItemCell'>
          <p2 >Item 1         </p2>
          <br />
          <p3>Price</p3>
          <br />
        </Grid>
        <Grid item xs={3}>
          <p1>Totals</p1>

        </Grid>
        <Grid item xs={6} className='posItemCell'>
          <p2 >Item 2         </p2>
          <br />
          <p3>Price</p3>
          <br />
        </Grid>
        <Grid item xs={3}>

        </Grid>
        <Grid item xs={6} className='posItemCell'>
          <p2 >Item 3         </p2>
          <br />
          <p3>Price</p3>
          <br />
        </Grid>
        <Grid item xs={3}>
        </Grid>
      </Grid>

      <Button variant='contained' onClick={onSubmit}>Check Out</Button>

    </Fragment>
  )
}

export default PointOfSale