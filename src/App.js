import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import PersonList from './Components/PersonList';
import PersonInput from './Components/PersonInput';

class App extends Component {
  render() {
    return(
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Bienvenido: Alejandro Calixto Villavicencio</h1>
      </header>
        <PersonInput />
        <PersonList />
      </div>
    );
  }
}
export default App;
