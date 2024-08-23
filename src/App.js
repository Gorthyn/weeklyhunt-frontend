import React from 'react';
import logo from './logo.svg';
import './App.css';
import './styles/App.css';
import HelloWorld from './components/HelloWorld';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
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

        {/* Add Router functionality around the main content */}
        <main>
          <Header />
          <Routes>
            <Route path="/" element={<HelloWorld />} />
            {/* Future components will go here */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
