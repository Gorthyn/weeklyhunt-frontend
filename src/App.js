import React from 'react';
import logo from './logo.svg';
import './App.css';

// Import the HelloWorld component
import HelloWorld from './components/HelloWorld';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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

      {/* Add HelloWorld component below the header */}
      <main>
        <HelloWorld />
      </main>
    </div>
  );
}

export default App;

