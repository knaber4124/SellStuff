import {
    LOG_IN,
    LOG_OUT,
    LOADING_TRUE,
    LOADING_FALSE
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
        case LOADING_TRUE:
            return {
                ...state,
                isLoading: true
            }
        case LOADING_FALSE:
            return {
                ...state,
                isLoading: false
            }
        default:
            return state;
    }


}