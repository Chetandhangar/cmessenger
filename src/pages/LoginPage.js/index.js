import React, { useState } from 'react';
import Layout from '../../components/Layout';
import Card from '../../components/UI/Card';
import './style.css';


/**
* @author
* @function LoginPage
**/

const LoginPage = (props) => {

  const [email, setEmail] = useState('');
  const [passwod, setPassword] = useState(''); 

  return(
    <Layout>
      <div className="loginContainer">
      <Card>
        <form>
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
          value={passwod}
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