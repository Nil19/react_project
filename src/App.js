import logo from './n.png';
import Button from './Button.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Nil A
        </p>
        <p>
          Learning React as a hobby
        </p>
        <Button buttonText={"Please click me!"} paragraphText={"hello"}/> 
         <button
          className="button"
        >
        <a
          className="App-link"
          href="https://github.com/nil19"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Git Profile 
        </a>
        </button>
      </header>
    </div>
  );
}

export default App;
