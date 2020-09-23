import apiCall from './api/apiCall';
import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
 } from './constants';

export const setSearchfield = (txt) => ({type: CHANGE_SEARCH_FIELD, payload: txt})

export const requestRobots = () => (dispatch) => {
    dispatch({ type: REQUEST_ROBOTS_PENDING})
    apiCall('https://jsonplaceholder.typicode.com/users')
      .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data}))
      .catch(e => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: e}))
}
