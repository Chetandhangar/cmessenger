import './App.css';
import {BrowserRouter as Router , Route, Switch,} from 'react-router-dom';
import HomePage from './pages/HomePage.js';
import LoginPage from './pages/LoginPage.js';
import SignupPage from './pages/SignUp.js';
import PrivateRoute from './components/PrivateRoute';


function App() {
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
