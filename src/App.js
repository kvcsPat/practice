// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Timer from './components/Timer';
// import Timer2 from './components/Timer2';
// import PizzaComponent from './components/PizzaComponent/PizzaComponent';

function App() {
  const [showTimer, setShowTimer] = useState(true);

  /*
  //line 9 step by step:
  const state = useState(true);
  console.log(state);

  const showTimer = state[0];
  const setShowTimer = state[1];
  */

  return (
    <div className="App">
      <header className="App-header">
        {/* <PizzaComponent name="sausage n ray" price="8.99"/> */}
        {showTimer ? <Timer /> : <div>No Timer</div>}
        {/* <Timer /> */}
        <button onClick={() => {setShowTimer(false)}}>Hide</button>
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
  );
}

export default App;
