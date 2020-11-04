import logo from './logo.svg';
import ListPage from './components/ListPage';
import Profile from './components/Profile';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h4>GitHub profile searcher</h4>
                <ListPage/>
              </header>
            </Route>
            <Route path="/user/:username">
              <Profile />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
