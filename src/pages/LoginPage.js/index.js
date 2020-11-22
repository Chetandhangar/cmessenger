import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Layout from '../../components/Layout';
import Card from '../../components/UI/Card';
import './style.css';
import {signin} from '../../redux/actions';


/**
* @author
* @function LoginPage
**/

const LoginPage = (props) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); 
  const dispatch = useDispatch();

const userLogin = (e) =>{
    e.preventDefault();

    if(email == '')
    {
      alert("Email is required");
      return;
    }

    if(password == '')
    {
      alert("password is required");
      return;
    }

    dispatch(signin({email, password}));

}

  return(
    <Layout>
      <div className="loginContainer">
      <Card>
        <form onSubmit={userLogin}>
          <input type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e)=> setEmail(e.target.value)}
          placeholder="Email">
          </input>
          <input type="password"
          id="password"
          name="passwod"
          value={password}
          onChange={(e)=> setPassword(e.target.value)}
          placeholder="Password">  
          </input>
          <button>Login</button>
        </form>
      </Card>
      </div>
     
    </Layout>
    


  ) 

 }

export default LoginPage