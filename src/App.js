import React, { Component } from 'react';
import juventus from './juventus.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={juventus} className="App-juventus" alt="juventus" />
          <h1>FORZA JUVENTUS</h1>
          <br/>
          <hr/>
          <p>la vecchia signora</p>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    )
   
    
  }

}

export default App;
