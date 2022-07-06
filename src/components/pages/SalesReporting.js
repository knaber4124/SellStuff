import React, { Fragment, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom';

import { Grid, Button } from '@mui/material';
import UsersContext from '../../context/users/usersContext';

import './pages.css';

function SalesReporting() {

    const usersContext = useContext(UsersContext);

    const { loggedIn, user } = usersContext;
    const navigate = useNavigate();

    useEffect(() => {
        console.log(loggedIn);
        if (loggedIn === false) {
            navigate('/');
        }
    }, [loggedIn])

    return (
        <p1>{`Welcome to Sales Reporting ${user}`} </p1>
    )
}

export default SalesReporting