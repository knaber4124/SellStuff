import './pages.css';
import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box'
import placeHolder from '../../resources/placeholder.png';

function Home() {
    return (
        <Fragment>
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)' }} className='pagesBody'  >
                <p1>Welcome to Sell Stuff Point of Sale. This is designed to be a simple yet feature-rich POS system for your retail environment.
                    <br />
                    <br /> You will have the ability to not only sell items, but manage inventory and sales metrics with this user-friendly platform.
                    <br /> <Link to='/signup'>Click here</Link> to sign up for a new account.
                </p1>
                <img src={placeHolder} alt='placeholder image' className='sampleImageRight' />

            </Box>
            <br />
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)' }} className='pagesBody'>

                <img src={placeHolder} alt='placeholder image' className='sampleImage' />

                <p1> User Management is easy, with varying capabilities depending on the licenses granted to the individual user. <br /><Link to='/signup'>Click here</Link> to sign up for a new account.</p1>

            </Box>
            <br />
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)' }} className='pagesBody'  >
                <p1>Inventory Management is also incredibly easy as you can see not only how much is in stock but what your best selling products have been recently.</p1>
                <br />
                <p1><Link to='/signup'>Click here</Link> to sign up for a new account.</p1>

                <img src={placeHolder} alt='placeholder image' className='sampleImageRight' />

            </Box>
            <br />
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)' }} className='pagesBody'>

                <img src={placeHolder} alt='placeholder image' className='sampleImage' />

                <p1> Sales Metrics allow you to see how much has been sold and what products have been the most profitable. <br /><Link to='/signup'>Click here</Link> to sign up for a new account.
                </p1>

                <br />
            </Box>

        </Fragment>
    )
}

export default Home