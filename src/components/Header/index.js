import React from 'react'
import {NavLink, Link} from 'react-router-dom';
import './style.css';
/**
* @author
* @function Header
**/

const Header = (props) => {
  return(
    <header className="header">
        <div style={{display:'flex'}}>
            <div className="logo">Cmessenger</div>
            <ul className="leftMenu">
                <li><NavLink to="/login">Login</NavLink></li>
                <li><NavLink to="signup">Signup</NavLink></li>
            </ul>
        </div>
            <div style={{margin: "20px 0", color:"#fff", fontWeight: 'bold'}}>Hi Chetan</div>
            <ul className="menu">
                <li>
                <Link to={'#'} onClick={props.logout}>Logout</Link>
                </li>
          
            </ul>
    </header> 
   )

 }

export default Header