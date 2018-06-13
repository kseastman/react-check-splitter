import React from 'react';

import './CheckSplitterContainer.css';

import CheckForm from './CheckForm';
import SplitInfo from './SplitInfo';

const FORM_KEYS = ['subtotal', 'tip', 'tax', 'split'];

class CheckSplitterContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      subtotal: '0',
      tip: '20',
      tax: '10',
      split: '1',
    }
  }

  updateCheck = (key, value) => {
    if (!FORM_KEYS.includes(key)) {
      throw new Error(`Invalid key "${key}" passed in to updateCheck (value "${value}")`);
    }
    console.log(`Updating check, ${key}: ${value}`);
    const update = {}
    update[key] = value;
    this.setState(update);
  }

  calculateSplit() {
    const subtotal = parseFloat(this.state.subtotal);
    const tip = subtotal * parseFloat(this.state.tip) / 100;
    const tax = subtotal * parseFloat(this.state.tax) / 100;
    const split = parseFloat(this.state.split);
    const total = subtotal + tip + tax

    return {
      taxAmount: tax.toFixed(2),
      tipAmount: tip.toFixed(2),
      totalPrice: total.toFixed(2),
      pricePerHead: (total / split).toFixed(2),
    }
  }

  splitInfo = (info) => {
    return(
      <SplitInfo
        key=""
        taxAmount={info.taxAmount}
        tipAmount={info.tipAmount}
        totalPrice={info.totalPrice}
        pricePerHead={info.pricePerHead}
        />
    )
  }

  render() {
    const rawInfo = this.calculateSplit();
    console.log(rawInfo)
    const splitInfo = this.splitInfo(rawInfo);
    console.log(splitInfo);

    return(
      <div className="check-splitter-container">
        <CheckForm
          subtotal={this.state.subtotal}
          tip={this.state.tip}
          tax={this.state.tax}
          split={this.state.split}
          updateCheckCallback={this.updateCheck}
          />
        {splitInfo}
      </div>
    );
  }
}

export default CheckSplitterContainer;
