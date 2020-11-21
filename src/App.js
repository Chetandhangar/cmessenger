import './App.css';
import {BrowserRouter as Router , Route, Switch,} from 'react-router-dom';
import HomePage from './pages/HomePage.js';
import LoginPage from './pages/LoginPage.js';
import SignupPage from './pages/SignUp.js';
import Header from './components/Header';
import Layout from './components/Layout';

function App() {
  return (
    <div className="App">
      <Router>
        
        
        <Route path='/' exact component={HomePage}/>
       
        <Route path='/login' component={LoginPage} />
        <Route path='/signup' component={SignupPage}/>
        
        
       
      </Router>
    </div>
  );
}

export default App;
