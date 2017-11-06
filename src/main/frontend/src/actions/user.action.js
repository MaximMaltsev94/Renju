import * as event from '../constants/user.actionTypes'
import History from '../util/createHistory'
import $ from 'jquery'

const setAge = age => {
    return {
        type: event.SET_AGE,
        payload: age
    }
};
const login = (values, from) => {
    console.log(`LOGIN ACTION ${from.pathname}`);
    console.log(values);

    return dispatch => {
        $.ajax('/login', {
            method: 'POST',
            data: values,
            success: () => {
                console.log('success');
                dispatch({type: event.LOGIN_SUCCESS});
                History.push(from.pathname);
            },
            error: () => {
                console.log('error');
                dispatch({type: event.LOGIN_FAIL, payload: 'authentication error'});
            }
        });
    }
};

const logout = () => {
    return dispatch => dispatch({
        type: event.LOGOUT_SUCCESS
    })
};

export default {
    setAge, login, logout
}