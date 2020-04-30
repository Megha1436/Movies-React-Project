const addMovies =(movies) =>{
    return{type : "ADD_MOVIES", payload:{ movies:movies}}
}

export const fetchMovies = () =>{
    return(dispatch) =>{
        const url = "https://api.themoviedb.org/3/movie/popular?api_key=a2df3d1a7611194432bbdf1fc80540f2"
        fetch(url,{
            method : 'GET',
          //  headers: {"accep-type" : "application/json"}
        })
        .then((response) =>{ return response.json()})
        .then((data) =>{dispatch(addMovies(data.results))})
        .catch(error => console.log(error))
    }
}