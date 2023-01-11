import React, { useReducer } from 'react';
import usersContext from './usersContext';
import usersReducer from './usersReducer';
import {
    LOG_IN,
    LOG_OUT,
    LOADING_TRUE,
    LOADING_FALSE
} from '../types';

const UsersState = props => {
    const initialState = {
        isLoading: false,
        loggedIn: false,
        user: "Keith"
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
    //set Loading to True
    const loadingTrue = () => {
        dispatch({ type: LOADING_TRUE })
    }

    //set Loading to False
    const loadingFalse=()=>{
        dispatch({ type: LOADING_FALSE})
    }


    return (
        <usersContext.Provider
            value={{
                user: state.user,
                loggedIn: state.loggedIn,
                logIn,
                logOut,
                loadingTrue,
                loadingFalse
            }}>{props.children}
        </usersContext.Provider>
    )
}
export default UsersState;