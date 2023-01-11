import React, { useReducer } from 'react';
import itemsContext from './itemsContext';
import itemsReducer from './itemsReducer';
import {
    SET_INVENTORY
} from '../types';

const ItemsState= props => {
    const initialState={
        inventory:[]
    }

    const [state, dispatch] = useReducer(itemsReducer, initialState);


    // bring in items for DB to create inventory
    const setInventory=()=>{
        dispatch({SET_INVENTORY})
    }


    return (
        <itemsContext.Provider
            value={{
                inventory:state.inventory,
                setInventory
            }}>{props.children}
        </itemsContext.Provider>
    )


}


export default ItemsState