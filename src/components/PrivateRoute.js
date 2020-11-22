import React, { Component } from 'react';
import {Redirect, Route} from 'react-router-dom';

/**
* @author
* @function PrivateRoute
**/

const PrivateRoute = ({component: Component, ...rest}) => {
  return(
    <Route {...rest} component={(props)=>{
        const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;

        if(user){
                return <Component {...props}/>
        }
        else{
            <Redirect to='/login'/>

        }
    }}/>
   )

 }

export default PrivateRoute