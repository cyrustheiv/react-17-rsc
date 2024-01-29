import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ReactCompareSlider } from 'react-compare-slider';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Reacts
        </a>

        <ReactCompareSlider
          itemOne={
            <img
              alt="one"
              src="https://via.placeholder.com/1280x720?text=one"
            />
          }
          itemTwo={
            <img
              alt="one"
              src="https://via.placeholder.com/1280x720?text=two"
            />
          }
        />
      </header>
    </div>
  );
}

export default App;
