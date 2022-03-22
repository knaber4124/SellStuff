import React, { Fragment } from 'react'
import { Grid, Button } from '@mui/material';
import './pages.css';

const PointOfSale = () => {
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

      <Button variant='contained' component='a' href='/checkout'>Check Out</Button>

    </Fragment>
  )
}

export default PointOfSale