import {
    SET_INVENTORY
} from '../types';

export default (state, action) => {
    switch (action.type) {
        case SET_INVENTORY:
            return {
                ...state,
                inventory: (state)
            }



        default:
            return state

    }

}