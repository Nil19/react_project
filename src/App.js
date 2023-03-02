import logo from './n.png';
import Button from './components/Button.js';
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
        <a
          className="App-link"
          href="https://github.com/nil19"
          target="_blank"
          rel="noopener noreferrer"
        >
        <Button buttonText={"View Github Profile"}/> 
        </a>
      </header>
    </div>
  );
}

export default App;
