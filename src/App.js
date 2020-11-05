import React from 'react';
import './App.css';
import Users from './users/Users';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Details from './user/Details';

class App extends React.Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Users} />
          <Route path="/:id" component={Details} />
        </Switch>    
      </Router>
    );
  }
}

export default App;
