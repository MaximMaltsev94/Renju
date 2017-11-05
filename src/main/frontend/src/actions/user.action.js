import {SET_AGE} from '../constants/user.actionTypes'

export function setAge(age) {
    return {
        type: SET_AGE,
        payload: age
    }
}