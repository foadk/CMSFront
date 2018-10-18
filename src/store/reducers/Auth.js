import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utils/utils';

const initialState = {
    accessToken: null,
    refreshToken: null,
    expirationDate: null,
    isAuthenticated: false,
    status: 'loading', // loading, authenticated, notAuthenticated
};

const setToken = (state, action) => {
    return updateObject(state, {
        accessToken: action.accessToken,
        refreshToken: action.refreshToken,
        expirationDate: action.expirationDate,
        status: 'authenticated'
    });
};

const authLogout = (state) => {
    return updateObject(state, {
        accessToken: null,
        refreshToken: null,
        expirationDate: null,
        isAuthenticated: false,
        status: 'notAuthenticated'
    });
};

const setStatus = (state, action) => {
    return updateObject(state, {status: action.status});
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_TOKEN: return setToken(state, action);
        case actionTypes.AUTH_LOGOUT: return authLogout(state);
        case actionTypes.SET_STATUS: return setStatus(state, action);
        default: return state;
    }
};

export default reducer;