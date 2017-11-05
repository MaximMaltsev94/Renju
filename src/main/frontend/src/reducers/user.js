import * as constants from '../constants/User'
const initialState = {
    firstName: 'Maxim',
    lastName: 'Maltsev',
    age: 22
};

export default function user(state = initialState, action) {
    switch (action.type) {
        case constants.SET_AGE:
            return {...state, age: action.payload};
        default:
            return state;
    }
}