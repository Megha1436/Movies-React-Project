import React from 'react';
import Home from '../Pages/Home/Home';
import Detail from '../Pages/Details/Detail';
import {Route} from 'react-router-dom';
const Mainroute =()=>{
    return(
        <div>
        <Route exact path="/" component={Home}/>
        <Route exact path="/Detail/:id" component={Detail}/>
        </div>
    )
}
export default Mainroute;