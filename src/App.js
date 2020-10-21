import React from 'react';
import './App.css';
import Tags from './tags/Tags';

class App extends React.Component {

  state = { save: false };

  changeSave = () => {
    this.setState({save: false});
    //console.log(this.state.save);
  }

  async componentDidMount() {
    console.log('mounted app')
    setInterval( () => {
      this.setState({save: true});
    }, 5000);
  }

  componentDidUpdate(prevProps) {
     console.log('update app')
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
