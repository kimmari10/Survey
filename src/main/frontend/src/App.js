import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // fetch(url, options) : Http 요청 함수
    fetch("/api/hello")
        .then(response => response.text())
        .then(message => {
          setMessage(message);
        });
  }, [])

  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            server message : {message}
          </p>
        </header>
      </div>
  );
}

export default App;