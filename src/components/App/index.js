import React, { Component } from 'react';
import './App.css';
import "whatwg-fetch"
import Main from '../Main'
import Menu from '../Menu'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <a className="App-title" href="/">TV Series List</a>
        </header>
        <Menu/>
        <Main/>
      </div>
    );
  }
}

export default App;