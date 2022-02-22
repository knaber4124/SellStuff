import React, { Fragment } from 'react'
import Button from '@mui/material/Button';

function Checkout() {
    return (
        <Fragment>
            <p1>Checkout</p1>
            <Button variant='contained' component='a' href='/pointofsale'>Submit Order</Button>
        </Fragment>
    )
}

export default Checkout