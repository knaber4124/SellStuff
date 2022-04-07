import React, { Fragment, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import UsersContext from '../../context/users/usersContext';

import { Grid, Button } from '@mui/material';

function UserManagement() {
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
      <p1>UserManagement</p1>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <p2>Employee 1</p2><Button>Select</Button>
          <br />
          <p2>Employee 2</p2><Button>Select</Button>
        </Grid>
        <Grid item xs={4}>
          <p2> Pull Selected User over w/ Options</p2>

        </Grid>

      </Grid>
    </Fragment>
  )
}

export default UserManagement