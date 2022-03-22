import React, { useReducer } from 'react';
import usersContext from './usersContext';
import usersReducer from './usersReducer';
import {
    LOG_IN,
    LOG_OUT
} from '../types';

const UsersState = props => {
    const initialState = {
        loggedIn: true,
        user: null
    }

    const [state, dispatch] = useReducer(usersReducer, initialState);

    //Log In
    const logIn = () => {
        dispatch({ type: LOG_IN })
    }

    //Log Out
    const logOut = () => {
        dispatch({ type: LOG_OUT })
    }


    return (
        <usersContext.Provider
            value={{
                loggedIn: state.loggedIn,
                logIn,
                logOut
            }}>{props.children}
        </usersContext.Provider>
    )
}
export default UsersState;