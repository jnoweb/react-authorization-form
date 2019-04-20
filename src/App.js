import React, { Component } from 'react';
import './App.css';
import Contact from './Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Contact />
        </header>
      </div>
    );
  }
}

export default App;
