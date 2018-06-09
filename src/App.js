import React, { Component } from 'react';

import './App.css';

import CheckSplitterContainer from './components/CheckSplitterContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Check Splitter</h1>
        <img className='background-image' src='https://goodstock.photos/wp-content/uploads/empty-plate-fork-knife.jpg' />
        <CheckSplitterContainer />
      </div>
    );
  }
}

export default App;
