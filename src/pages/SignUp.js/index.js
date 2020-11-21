import React, { useState } from 'react'
import Layout from '../../components/Layout'
import Card from '../../components/UI/Card'

import {useDispatch} from 'react-redux';
import { signup } from '../../redux/actions';

/**
* @author
* @function SignupPage
**/

const SignupPage = (props) => {

  const [firstname, setFirstName] = useState('')
  const [lastname, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch();

  const signupUser = (e) =>{
    e.preventDefault();

    const user={
      firstname ,lastname, email, password
    }
      dispatch(signup(user))
  }
  return(
        <Layout>
          <div className="signupContainer">
            <Card>
          <form onSubmit={signupUser}>
          <input type="text"
          id="firstname"
          name="firstname"
          value={firstname}
          onChange={(e)=> setFirstName(e.target.value)}
          placeholder="First Name">
          </input>
          <input type="text"
          id="lastname"
          name="lastname"
          value={lastname}
          onChange={(e)=> setLastName(e.target.value)}
          placeholder="lastname">  
          </input>
          <input type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e)=> setEmail(e.target.value)}
          placeholder="Email">
          </input>
          <input type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e)=> setPassword(e.target.value)}
          placeholder="Password">  
          </input>
          <button>Signup</button>
        </form>
          </Card>
           </div>
        </Layout>
        
    
      

   
   )

 }

export default SignupPage