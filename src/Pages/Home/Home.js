import React from 'react';
import {connect} from 'react-redux';
import {fetchMovies} from '../../ActionCreater/Movies';
import MoviePoster from '../../Component/MoviePoster';
import './style.css';
class Home extends React.Component{
    componentDidMount(){
        this.props.fetchMovieList();
    }

    onPosterCardClick = (id) =>{
        this.props.history.push("/Detail/"+id)
    }

    render(){
        return(
            <div className="Home_poster">
            {this.props.movies.map((movie) =>{
                return <MoviePoster url={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} title ={movie.title} id={movie.id} onClick={this.onPosterCardClick} vote_average={movie.vote_average} />     
            }     
            )}
    
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{fetchMovieList : () => dispatch(fetchMovies())}
}
const mapStoreToProps =(store) =>{
    return{movies : store.movies}
}
export default connect(mapStoreToProps,mapDispatchToProps)(Home);