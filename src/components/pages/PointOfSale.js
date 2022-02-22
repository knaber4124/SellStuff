import React, { Fragment } from 'react'
import Button from '@mui/material/Button';

const PointOfSale = () => {
  return (
    <Fragment>
          <p1>Point of Sale</p1>
          <Button variant='contained' component='a' href='/checkout'>Check Out</Button>

    </Fragment>
  )
}

export default PointOfSale