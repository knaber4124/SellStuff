import React, { Fragment, useEffect, useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { Button, Grid, Input, InputLabel, InputAdornment } from '@mui/material';
import UsersContext from '../../context/users/usersContext';

import './pages.css'

function Checkout() {
    const usersContext = useContext(UsersContext);

    const { loggedIn, user } = usersContext;

    // useEffect(() => {
    //     if (loggedIn = 'false') {
    //         return <Navigate to='/' />
    //     }
    // })


    const [values, setValues] = React.useState({
        amount: '',
    });
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };
    return (
        <Fragment>
            <p1>Checkout</p1>

            <Grid container spacing={3}>
                <Grid item xs={4}>
                    <p2>Total from POS Screen</p2>
                    <br />
                    <p2>Items</p2>
                </Grid>
                <Grid item xs={4} className='checkoutTotals'>
                    <InputLabel htmlFor="standard-adornment-amount" color='primary' >Amount Tendered</InputLabel>
                    <Input
                        id="standard-adornment-amount"
                        value={values.amount}
                        onChange={handleChange('amount')}
                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                    />
                    <br />
                    <p2>Total</p2>
                    <br />
                    <p2>Change Due</p2>
                    <br />
                </Grid>
                <br />
            </Grid>
            <Button variant='contained' component='a' href='/pointofsale'>Submit Order</Button>
        </Fragment>
    )
}

export default Checkout