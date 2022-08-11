import './layout.css';
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Menu, MenuItem } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import UsersContext from '../../context/users/usersContext';


// theme for MaterializeUI
const theme = createTheme({
    palette: {
        neutral: {
            main: '#00000',
        }
    }
})





const Header = (props) => {

    const usersContext = useContext(UsersContext);
    const navigate = useNavigate();


    const { loggedIn, user, logOut, logIn } = usersContext;

    //Material UI needed to open Menu
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {

        setAnchorEl(event.currentTarget);
    };

    // Material UI needed to close Menu
    const handleClose = () => {
        setAnchorEl(null);
    };

    // Log User out option of Menu
    const logOutUser = (e) => {
        e.preventDefault();
        logOut();
    }
    const routeHome = () => {
        navigate('/')
    }
    const routePOS = () => {
        navigate('/pointofsale')
    }
    const routeReporting = () => {
        navigate('/reporting')
    }
    const routeInventory = () => {
        navigate('/inventory')
    }
    const routeUserManagement = () => {
        navigate('/usermanagement')
    }
    const routeSignUp = () => {
        navigate('/signup')
    }
    const routeLogIn = () => {
        navigate('/login')
    }


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
                {loggedIn ?
                    <Menu id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}>

                        <MenuItem className='menuItem' onClick={routeHome}>Home</MenuItem>
                        <MenuItem className='menuItem' onClick={routePOS}>Point of Sale</MenuItem>
                        <MenuItem className='menuItem' onClick={routeReporting}>Sales Reporting</MenuItem>
                        <MenuItem className='menuItem' onClick={routeInventory}>Inventory Management</MenuItem>
                        <MenuItem className='menuItem' onClick={routeUserManagement}>User Management</MenuItem>
                        <MenuItem className='menuItem' onClick={logOutUser}>Log Out</MenuItem>
                    </Menu>

                    :
                    <Menu id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}>

                        <MenuItem className='menuItem' onClick={routeHome}>Home</MenuItem>
                        <MenuItem className='menuItem' onClick={routeSignUp} >Sign Up For A New Account</MenuItem>
                        <MenuItem className='menuItem' onClick={routeLogIn}>Log In</MenuItem>

                    </Menu>
                }
            </item>
        </Box >

    )
}




export default Header;