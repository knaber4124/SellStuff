import './layout.css';
import React, { useState, useContext } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import UsersContext from '../../context/users/usersContext';



const theme = createTheme({
    palette: {
        neutral: {
            main: '#00000',
        }
    }
})





const Header = () => {
    const usersContext = useContext(UsersContext);
    // const { loggedIn, user } = usersContext;

    const test = () => {
        console.log(usersContext.loggedIn);
    }

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        test();
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };




    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', px: 5 }
        } className='header' >
            <item className='title'>Sell Stuff Point of Sale</item>
            <item>
                <ThemeProvider theme={theme}>
                    <Button id='menuButton' size='small' color='neutral' className='title'
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick} >Menu
                    </Button>
                </ThemeProvider>
                <Menu id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}>
                    <MenuItem className='menuItem' component='a' href='/'>Home</MenuItem>
                    <MenuItem className='menuItem' component='a' href='/register' >Register</MenuItem>
                    <MenuItem className='menuItem' component='a' href='/login'>Log In</MenuItem>

                </Menu>
            </item>
        </Box >

    )
}

export default Header