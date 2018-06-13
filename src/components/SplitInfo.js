import React from 'react';
import PropTypes from 'prop-types';

import './SplitInfo.css';

const SplitInfo = (props) => {
  console.log(props)
  return (

    <table className="text-box">
      <h2 className="text-box">SplitInfo</h2>
    <tbody>
      <tr><td>Tax:</td>
        <td>$ {props.taxAmount}</td></tr>
        <tr><td>Tip:</td> <td>$ {props.tipAmount}</td></tr>
        <tr><td>Total:</td>  <td>$ {props.totalPrice}</td></tr>
        <tr><td>Each Person Pays:</td>  <td>$ {props.pricePerHead}</td></tr>
    </tbody>
  </table>
  );
};

SplitInfo.propTypes = {
  taxAmount: PropTypes.string.isRequired,
  tipAmount: PropTypes.string.isRequired,
  totalPrice: PropTypes.string.isRequired,
  pricePerHead: PropTypes.string.isRequired
};

export default SplitInfo;
