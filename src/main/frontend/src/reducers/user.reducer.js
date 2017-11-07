import * as event from '../constants/user.actionTypes'
const initialState = {
    firstName: 'Maxim',
    lastName: 'Maltsev',
    age: 22,
    isAuthenticated: false,
    errors: ''
};

export default function user(state = initialState, action) {
    switch (action.type) {
        case event.SET_AGE:
            return {...state, age: action.payload};
        case event.LOGIN_SUCCESS:
            return {...state, isAuthenticated: true};
        case event.LOGIN_FAIL:
            return {...state, errors: action.payload};
        case event.LOGOUT_SUCCESS:
            return {...state, ...initialState};
        default:
            return state;
    }
}