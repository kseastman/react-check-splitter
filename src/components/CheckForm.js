import React from 'react';
import PropTypes from 'prop-types';

import './CheckForm.css';

class CheckForm extends React.Component {
  static propTypes = {
    subtotal: PropTypes.string,
    tax: PropTypes.string,
    tip: PropTypes.string,
    split: PropTypes.string,
    updateCheckCallback: PropTypes.func.isRequired,
  }

  onInputChange = (event) => {
    const key = event.target.name;
    const value = event.target.value;
    this.props.updateCheckCallback(key, value);
  }

  render() {
    return (
      <form className="check-form">
        <div>
          <label htmlFor="subtotal">Price before tax / tip</label>
          <input
            name="subtotal"
            value={this.props.subtotal}
            onChange={this.onInputChange}
            />
        </div>
        <div>
          <label htmlFor="tip">Tip percentage</label>
          <input
            name="tip"
            value={this.props.tip}
            onChange={this.onInputChange}
            />
        </div>
        <div>
          <label htmlFor="tax">Tax percentage</label>
          <input
            name="tax"
            value={this.props.tax}
            onChange={this.onInputChange}
            />
        </div>
        <div>
          <label htmlFor="split">Split how many ways</label>
          <input
            name="split"
            value={this.props.split}
            onChange={this.onInputChange}
            />
        </div>
      </form>
    )
  }
}


export default CheckForm;
