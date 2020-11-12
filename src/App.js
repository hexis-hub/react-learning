import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import UserDetails from './components/UserDetails';

function App() {
  return (    
    <div className="App">     
      <Router>      
      <div>
        <hr />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>         
          <Route path="/UserDetails/:userid" children={<UserDetails />} />   
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
