import React from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Truncate = (values) =>{
 return (
            values.slice(0,10)
        )
}

const calc_rating = (values) => {

    const arr = [];
        for(let i=0;i<values/2;i++){
             arr.push(<FontAwesomeIcon icon={faStar}/>)
        }

        return arr;
    
}

const MoviePoster = (props) =>{
    return(
       
            <div onClick={() => props.onClick(props.id)} className ="Poster_container">
                <img className ="Poster_img" src = {props.url}/>
                <div className="Poster_content">
                    <div className = "content4">
                        <div className="content1"> <p>{Truncate(props.title)}...</p></div> 
                        <div className="content3"><FontAwesomeIcon icon={faThumbsUp}/><span>  </span><span>{props.vote_average}</span></div>
                    </div>
                    
                    <div className="content2">{calc_rating(props.vote_average)}</div>
                </div>
            </div>

    )
}
export default MoviePoster;