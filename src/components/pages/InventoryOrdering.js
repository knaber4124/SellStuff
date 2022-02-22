import React, { Fragment } from 'react'
import Button from '@mui/material/Button';

function InventoryOrdering() {
  return (
    <Fragment>
      <p1>InventoryOrdering</p1>
      <Button variant='contained' component='a' href='/inventory'>Submit Order</Button>

    </Fragment>
  )
}

export default InventoryOrdering