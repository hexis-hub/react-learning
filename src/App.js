import {
  BrowserRouter as Router,

  Route, Switch
} from "react-router-dom";
import './App.css';
import ListPage from './components/ListPage';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <ListPage />
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
