import logo from './logo.svg';
import './App.css';
import MyButton from './Button';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  function handleAddCount() {
    setCount(count + 1);
  }

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
        <MyButton count={count} addCountFunction={handleAddCount}/>
      </header>
    </div>
  );
}

export default App;
