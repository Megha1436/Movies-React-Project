import React from 'react';
const initialStore ={
    movies: []
}
const movieReducer = (store= initialStore,action) =>{
    switch(action.type)
    {
        case "ADD_MOVIES" :
            return{
                ...store,
                movies : action.payload.movies
            }
            default: return{...store}
    }
    
}
export default movieReducer;