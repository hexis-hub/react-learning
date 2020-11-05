import './App.css';
import Users from './Users/Users';
import Detail from './Detail/Detail';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
          <Route exact={true} path="/" component={Users} />
          <Route path="/g/:login" component={Detail} />
      </div>
    </Router>
  );
}

export default App;


// Botoes
// Nova TAB - link to new site