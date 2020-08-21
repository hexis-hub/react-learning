import React from 'react';
import './App.css';
import Tags from './tags/Tags';

class App extends React.Component {
  state = {
    save: false,
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        save: true
      });
    }, 5000);
  }

  render() {
    return (
      <div className='App'>
        <Tags save={this.state.save} />
      </div>
    );
  }
}

export default App;
