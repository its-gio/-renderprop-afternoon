import React, { Component } from 'react'

const currencyData = [
  { name: 'Japanese Yen', symbol: '¥', rate: 113.6, id: 0 },
  { name: 'British Pound', symbol: '£', rate: 0.77, id: 1 },
  { name: 'Canadian Dollar', symbol: 'CAD', rate: 1.32, id: 2 },
  { name: 'Mexican Peso', symbol: 'Mex$', rate: 20.41, id: 3 },
  { name: 'Swiss Franc', symbol: 'Fr.', rate: 1.01, id: 4 }
]

export default class CurrencyConverter extends Component {
  state = {
    currencyChosen: false,
    selectedCurrency: 'Select Currency',
    amount: 0
  }

  render() {
    const currencyList = currencyData.map((currency, i) => <option key={i} value={i}>{currency.name}</option>)
    return (
      <div>
        <select name="" value={this.state.selectedCurrency}>
          <option value='Select Currency'>Select Currency</option>
          {currencyList}
        </select>

        <button>+</button>

        <button>-</button>

        {this.props.render(
					currencyData[this.state.selectedCurrency],
					this.state.amount
				)}
      </div>
    )
  }
}