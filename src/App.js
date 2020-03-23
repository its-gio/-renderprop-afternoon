import React, { Component } from 'react';
import CurrencyConverter from './Components/CurrencyConverter';
import './App.css';

class App extends Component {
  render() {
    return (
      <>
        <h2>Render Props</h2>
        <CurrencyConverter render={() => {}} />
      </>
    );
  }
}

export default App;
