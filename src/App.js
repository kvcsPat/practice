// import logo from './logo.svg';
import './App.css';
//import Timer from './components/Timer';
import Timer2 from './components/Timer2';
// import PizzaComponent from './components/PizzaComponent/PizzaComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <PizzaComponent name="sausage n ray" price="8.99"/> */}
        {/* <Timer/> */}
        <Timer2 />
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
