import axios from 'axios';

export const GET_DATA = 'GET_DATA';
export const UPDATE_QUOTES = 'UPDATE_QUOTES';
export const SET_ERROR = 'SET_ERROR';
export const getData = () => dispatch => {
    dispatch({
        type: GET_DATA
    });
    axios.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
    .then(res=> {
        console.log('results', res);
        dispatch({
            type: UPDATE_QUOTES, payload: res.data
        });
    })
    .catch(err => {
        console.error('error with request err:', err);
        dispatch({
            type: SET_ERROR, payload: 'error with request'
        })
    })
   
}