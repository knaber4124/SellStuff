import React, { Fragment } from 'react'
import Button from '@mui/material/Button';

function InventoryManagement() {
  return (
    <Fragment>
      <p1>InventoryManagement</p1>
      <Button variant='contained' component='a' href='/ordering'>Order More Inventory</Button>
    </Fragment>
  )
}

export default InventoryManagement