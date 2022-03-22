import {
    LOG_IN,
    LOG_OUT
} from '../types';

export default (state, action) => {
    switch (action.type) {
        case LOG_IN:
            return {
                ...state,
                loggedIn: true
            }
        case LOG_OUT:
            return {
                ...state,
                loggedIn: false
            }
        default:
            return state;
    }


}