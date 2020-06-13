import React from 'react';

import SentenceMaker from './containers/SentenceMaker/SentenceMaker';

import './App.css';
class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <SentenceMaker />
      </div>
    );
  }
}

export default App;
