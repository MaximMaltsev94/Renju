import {SET_AGE} from '../constants/User'

export function setAge(age) {
    return {
        type: SET_AGE,
        payload: age
    }
}