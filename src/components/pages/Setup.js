import React, { Fragment, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import UsersContext from '../../context/users/usersContext';

import Button from '@mui/material/Button';

function Setup() {
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
        <Fragment>
            <p1>{`${user} please set up your account`}</p1>
            <Button variant='contained' component='a' href='/usermanagement'>Continue</Button>
        </Fragment>
    )
}

export default Setup