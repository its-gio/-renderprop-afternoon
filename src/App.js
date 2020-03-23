import React, { Component } from 'react';
import CurrencyConverter from './Components/CurrencyConverter';
import './App.css';

class App extends Component {
  render() {
    return (
      <>
        <h2>Render Props</h2>
        <CurrencyConverter render={(currencyData, amount) => (
            <p>
              US Dollar ${amount.toFixed(2)} - {currencyData ? currencyData.name : "Waiting for choice"}{' '}
              {currencyData ? currencyData.symbol : ""}
              {(currencyData ? (amount * currencyData.rate).toFixed(2) : "")}
            </p>
          )}
        />
      </>
    );
  }
}

export default App;
