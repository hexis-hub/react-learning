import React, { useState, useEffect } from 'react';
import './App.css';
import Tags from './tags/Tags';

const App = () => {
  const [save, setSave] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setSave(true);
    }, 5000);
  }, []);

  return (
    <div className='App'>
      <Tags save={save} />
    </div>
  );
};

export default App;
