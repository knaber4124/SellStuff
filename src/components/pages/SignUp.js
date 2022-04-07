import React, { Fragment, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import UsersContext from '../../context/users/usersContext';

import { Button, Box, TextField, MenuItem } from '@mui/material';



function SignUp() {
    const states = [
        {
            value: 'AL',
            label: 'AL'
        },
        {
            value: 'AK',
            label: 'AK'
        }, {
            value: 'AZ',
            label: 'AZ'
        }, {
            value: 'AR',
            label: 'AR'
        }, {
            value: 'CA',
            label: 'CA'
        }, {
            value: 'CO',
            label: 'CO'
        }, {
            value: 'CT',
            label: 'CT'
        }, {
            value: 'DE',
            label: 'DE'
        }, {
            value: 'FL',
            label: 'FL'
        }, {
            value: 'GA',
            label: 'GA'
        }, {
            value: 'HI',
            label: 'HI'
        }, {
            value: 'ID',
            label: 'ID'
        }, {
            value: 'IL',
            label: 'IL'
        }, {
            value: 'IN',
            label: 'IN'
        }, {
            value: 'IA',
            label: 'IA'
        }, {
            value: 'KS',
            label: 'KS'
        }, {
            value: 'KY',
            label: 'KY'
        }, {
            value: 'LA',
            label: 'LA'
        }, {
            value: 'ME',
            label: 'ME'
        }, {
            value: 'MD',
            label: 'MD'
        }, {
            value: 'MA',
            label: 'MA'
        }, {
            value: 'MI',
            label: 'MI'
        }, {
            value: 'MN',
            label: 'MN'
        }, {
            value: 'MS',
            label: 'MS'
        }, {
            value: 'MO',
            label: 'MO'
        }, {
            value: 'MT',
            label: 'MT'
        }, {
            value: 'NE',
            label: 'NE'
        }, {
            value: 'NV',
            label: 'NV'
        }, {
            value: 'NH',
            label: 'NH'
        }, {
            value: 'NJ',
            label: 'NJ'
        }, {
            value: 'NM',
            label: 'NM'
        }, {
            value: 'NY',
            label: 'NY'
        }, {
            value: 'NC',
            label: 'NC'
        }, {
            value: 'ND',
            label: 'ND'
        }, {
            value: 'OH',
            label: 'OH'
        }, {
            value: 'OK',
            label: 'OK'
        }, {
            value: 'OR',
            label: 'OR'
        }, {
            value: 'PA',
            label: 'PA'
        }, {
            value: 'RI',
            label: 'RI'
        }, {
            value: 'SC',
            label: 'SC'
        }, {
            value: 'SD',
            label: 'SD'
        }, {
            value: 'TN',
            label: 'TN'
        }, {
            value: 'TX',
            label: 'TX'
        }, {
            value: 'UT',
            label: 'UT'
        }, {
            value: 'VT',
            label: 'VT'
        }, {
            value: 'VA',
            label: 'VA'
        }, {
            value: 'WA',
            label: 'WA'
        }, {
            value: 'WV',
            label: 'WV'
        }, {
            value: 'WI',
            label: 'WI'
        }, {
            value: 'WY',
            label: 'WY'
        }
    ]

    const handleSubmit = () => {
        console.log('Submitted')
    }

    const [state, setState] = React.useState('');

    const handleStatesChange = (event) => {
        setState(event.target.value);
    };
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
            <Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, }}
                noValidate
                autoComplete="off">
                <p1>Create a new Owner Account</p1>
                <div>
                    <TextField
                        required
                        id="outlined-required"
                        label="Business Name"
                        name='businessName'
                        defaultValue=""
                    />
                    <br />
                    <br />
                    <TextField
                        required
                        id="outlined-required"
                        label="Owner First Name"

                        defaultValue=""
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Owner's Last Name"
                        defaultValue=""
                    />
                    <br />
                    <br />
                    <TextField
                        required
                        id="outlined-required"
                        label="Phone Number"
                        defaultValue=""
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Email"
                        defaultValue=""
                    />
                    <br />
                    <br />
                    <TextField
                        required
                        id="outlined-required"
                        label="Create a User Name"
                        defaultValue=""
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Create a Password"
                        defaultValue=""
                    />
                    <br />
                    <br />
                    <p1>Shipping Information</p1>
                    <br />
                    <Box sx={{ width: 1380, maxWidth: '100%' }}>
                        <TextField
                            fullWidth
                            required
                            id="outlined-required"
                            label="Shipping Address"
                            defaultValue=""
                        />
                    </Box>
                    <br />
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField
                            required
                            id="outlined-required"
                            label="City"
                            defaultValue=""
                        />


                        <TextField
                            required
                            id="outlined-select-state"
                            select
                            label="State"
                            value={state}
                            onChange={handleStatesChange}
                        >
                            {states.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>

                    </Box>
                </div>
                <TextField
                    required
                    id="outlined-required"
                    label="Zip Code"
                    defaultValue=""
                />
                <br />
                <Button variant='contained' component='a' href='/usermanagement' onClick={handleSubmit} >Continue</Button>

            </Box>

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

        </Fragment >
    )
}

export default SignUp