import React, { Fragment } from 'react'
import { Button, Box, TextField, MenuItem } from '@mui/material';



function SignUp() {
    const states = [
        {
            value: 'Alabama',
            label: 'AL'
        },
        {
            value: 'Alaska',
            label: 'AK'
        }, {
            value: 'Arizona',
            label: 'AZ'
        }, {
            value: 'Arkansas',
            label: 'AR'
        }, {
            value: 'California',
            label: 'CA'
        }, {
            value: 'Colorado',
            label: 'CO'
        }, {
            value: 'Connecticut',
            label: 'CT'
        }, {
            value: 'Delaware',
            label: 'DE'
        }, {
            value: 'Florida',
            label: 'FL'
        }, {
            value: 'Georgia',
            label: 'GA'
        }, {
            value: 'Hawaii',
            label: 'HI'
        }, {
            value: 'Idaho',
            label: 'ID'
        }, {
            value: 'Illinois',
            label: 'IL'
        }, {
            value: 'Indiana',
            label: 'IN'
        }, {
            value: 'Iowa',
            label: 'IA'
        }, {
            value: 'Kansas',
            label: 'KS'
        }, {
            value: 'Kentucky',
            label: 'KY'
        }, {
            value: 'Louisiana',
            label: 'LA'
        }, {
            value: 'Maine',
            label: 'ME'
        }, {
            value: 'Maryland',
            label: 'MD'
        }, {
            value: 'Massachusetts',
            label: 'MA'
        }, {
            value: 'Michigan',
            label: 'MI'
        }, {
            value: 'Minnesota',
            label: 'MN'
        }, {
            value: 'Mississippi',
            label: 'MS'
        }, {
            value: 'Missouri',
            label: 'MO'
        }, {
            value: 'Montana',
            label: 'MT'
        }, {
            value: 'Nebraska',
            label: 'NE'
        }, {
            value: 'Nevada',
            label: 'NV'
        }, {
            value: 'New Hampshire',
            label: 'NH'
        }, {
            value: 'New Jersey',
            label: 'NJ'
        }, {
            value: 'New Mexico',
            label: 'NM'
        }, {
            value: 'New York',
            label: 'NY'
        }, {
            value: 'North Carolina',
            label: 'NC'
        }, {
            value: 'North Dakota',
            label: 'ND'
        }, {
            value: 'Ohio',
            label: 'OH'
        }, {
            value: 'Oklahoma',
            label: 'OK'
        }, {
            value: 'Oregon',
            label: 'OR'
        }, {
            value: 'Pennsylvania',
            label: 'PA'
        }, {
            value: 'Rhode Island',
            label: 'RI'
        }, {
            value: 'South Carolina',
            label: 'SC'
        }, {
            value: 'South Dakota',
            label: 'SD'
        }, {
            value: 'Tennessee',
            label: 'TN'
        }, {
            value: 'Texas',
            label: 'TX'
        }, {
            value: 'Utah',
            label: 'UT'
        }, {
            value: 'Vermont',
            label: 'VT'
        }, {
            value: 'Virginia',
            label: 'VA'
        }, {
            value: 'Washington',
            label: 'WA'
        }, {
            value: 'West Virginia',
            label: 'WV'
        }, {
            value: 'Wisconsin',
            label: 'WI'
        }, {
            value: 'Wyoming',
            label: 'WY'
        }
    ]

    const [setStates] = React.useState('EUR');

    const handleStatesChange = (event) => {
        setStates(event.target.value);
    };

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
                        defaultValue=""
                    />
                    <br />
                    <br />
                    <TextField
                        required
                        id="outlined-required"
                        label="Owner's First Name"
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
                            id="outlined-select-state"
                            select
                            label="State"
                            value={states}
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
                <Button variant='contained' component='a' href='/setup'>Continue</Button>

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