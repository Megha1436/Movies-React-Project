import React from 'react';
import {connect} from 'react-redux';
import {fetchMovies} from '../../ActionCreater/Movies';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faPoll } from '@fortawesome/free-solid-svg-icons';
import './style.css';

const calc_rating = (values) => {

    const arr = [];
        for(let i=0;i<values/2;i++){
             arr.push(<FontAwesomeIcon icon={faStar}/>)
        }

        return arr;
    
}

class Detail extends React.Component{
    render(){ console.log(this.props.match.params.id)
        return(
                this.props.movies.map((movies)=>{
                    if(movies.id==this.props.match.params.id)
                    {
                        return(
                            <div className='main-page'>
                                <div className='heading'><h1>{movies.title}</h1></div>
                                <div className='content'>
                                    <div className="img_container">
                                        <img className="image" src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`} width="400px"/>
                                    </div>
                                    <div className='details-container'>
                                            <div className="votes">
                                                <div><b>Number of Votes : </b>{movies.vote_count}</div>    
                                                <div className='icon'><FontAwesomeIcon icon={faPoll}/></div> 
                                            </div>    
                                            <div className="votes">
                                                <div><b>Average Rating : </b>{movies.vote_average}/10</div>
                                                <div className='star'>{calc_rating(movies.vote_average)}</div>
                                            </div>
                                            <div className="detail2"><b>Popularity : </b>{Math.trunc(movies.popularity)/10} %</div>
                                            <div className="detail2"><b>Release Date : </b>{movies.release_date}</div>
                                            <div className="detail2">
                                                <p><b>Overview : </b></p>
                                                <p className='overview'>{movies.overview}</p>
                                            </div>
                                            
                                    </div>
                                </div>
                            </div>
                        )
                    }
                }
            )
        )
    }
}

const mapStoreToProps=(store)=>{
    return{movies:store.movies}
}
export default connect (mapStoreToProps,null) (Detail);