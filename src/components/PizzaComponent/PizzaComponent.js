import React from 'react';
import PropTypes from 'prop-types';
import './PizzaComponent.css';

const PizzaComponent = ({name, price}) => {
  return (
  <div className="PizzaComponent">
    <h1>name: {name}</h1>
    <h2>price: {price}</h2>
  </div>
)};

PizzaComponent.propTypes = {};

PizzaComponent.defaultProps = {};

export default PizzaComponent;
