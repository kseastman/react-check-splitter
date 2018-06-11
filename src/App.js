import React, { Component } from 'react';

import './App.css';

import CheckSplitterContainer from './components/CheckSplitterContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img className='background-image' src='https://goodstock.photos/wp-content/uploads/empty-plate-fork-knife.jpg' />
        <h1>Ada Check Splitter</h1>
        <CheckSplitterContainer />

        <footer>
          &copy;2018, Ada Developers Academy
        </footer>
      </div>
    );
  }
}

export default App;
