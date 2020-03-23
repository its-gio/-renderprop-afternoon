import React from 'react'

function CurrencyDisplay({currencyData, amount}) {

  return (
    <p>
      US Dollar ${amount.toFixed(2)} - {currencyData ? currencyData.name : "Waiting for choice"}{' '}
      {currencyData ? currencyData.symbol : ""}
      {(currencyData ? (amount * currencyData.rate).toFixed(2) : "")}
    </p>
  )
}

export default CurrencyDisplay;
