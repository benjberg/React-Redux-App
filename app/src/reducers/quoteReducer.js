import {GET_DATA, UPDATE_QUOTES,SET_ERROR} from '../actions/actions';

const initialState = {
    quotes:[],
    isFetchingData: false,
    error: ''
}
export const quoteReducer =(state = initialState, action) =>{
    switch (action.type){
        case GET_DATA:
            return{
                ...state,
                isFetchingData: true,
                quotes: []
            };
        case UPDATE_QUOTES:
                return{
                    ...state,
                    quotes: action.payload,
                    isFetchingData: false
                };
        case SET_ERROR:
                return {
                    ...state,
                    isFetchingData: false,
                    error: action.payload
                };
            default:
                    return state}    
}