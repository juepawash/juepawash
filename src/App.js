import logo from './logo.svg';
import './App.css';
import React from "react";
import QRCode from "react-qr-code";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <QRCode value="https://www.google.com/"></QRCode>
        <p>
        Esta QR te manda para www.google.com prueba de escanner 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
       
        </a>
      </header>
    </div>
  );
}

export default App;
