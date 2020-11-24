import './App.css';
import {BrowserRouter as Router , Redirect, Route, Switch,} from 'react-router-dom';
import HomePage from './pages/HomePage.js';
import LoginPage from './pages/LoginPage.js';
import SignupPage from './pages/SignUp.js';
import PrivateRoute from './components/PrivateRoute';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { isLoggedInUser } from './redux/actions';


function App() {

  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(()=>{
    if(!auth.authenticated){
      dispatch(isLoggedInUser());
    }
  }, []);

  return (
    <div className="App">
      <Router>
        
        
        <PrivateRoute path='/' exact component={HomePage}/>
       
        <Route path='/login' component={LoginPage} />
        <Route path='/signup' component={SignupPage}/>
        
        
       
      </Router>
    </div>
  );
}

export default App;
