import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {NavLink, Link} from 'react-router-dom';
import { logout } from '../../redux/actions';
import './style.css';
/**
* @author
* @function Header
**/

const Header = (props) => {

    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();

  return(
    <header className="header">
        <div style={{display:'flex'}}>
            <div className="logo">Cmessenger</div>

            {
                !auth.authenticated ? 
                <ul className="leftMenu">
                <li><NavLink to="/login">Login</NavLink></li>
                <li><NavLink to="signup">Signup</NavLink></li>
                </ul>
                : null
            }

           
        </div>
            <div style={{margin: "20px 0", color:"#fff", fontWeight: 'bold'}}>
                {
                    auth.authenticated ? `${auth.firstname} ${auth.lastname}`: ''
                }
                </div>
            <ul className="menu">
                {
                    auth.authenticated ? 
                    <li>
                    <Link to={'#'} onClick={()=>{
                        dispatch(logout())
                    }
                    }>Logout</Link>
                    </li>
                    : null
                }

               
          
            </ul>
    </header> 
   )

 }

export default Header