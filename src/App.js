import logo from './logo.svg';
import './App.css';
import NavInput from './components/UI/Nav/NavInput'
import NavFavorites from './components/UI/Nav/NavFavorites'
import {BrowserRouter as Router} from 'react-router-dom'
import {Route} from 'react-router'
//import ButtonDisplay from './components/UI/Button/ButtonDisplay'

function App() {
  return (
    <Router>
      
    <div className="App">
      <Route path = '/' exact component = {NavInput} /> 
      <Route path = '/favorites' exact component = {NavFavorites} /> 
    </div>
    
    </Router>
  );
}

export default App;
