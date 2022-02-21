import React, { useReducer } from 'react';
import usersContext from './usersContext';
import usersReducer from './usersReducer';

const UsersState = props => {
    const initialState = {
        loggedIn: false,
        user: null
    }

    const [state, dispatch] = useReducer(usersReducer, initialState);



    return (
        <usersContext.Provider
            value={{
                loggedIn: state.loggedIn
            }}>{props.children}
        </usersContext.Provider>
    )
}
export default UsersState;