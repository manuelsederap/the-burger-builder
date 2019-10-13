import React from 'react';
import Auxillary from '../../../hoc/Auxillary';

const orderSummary = (props) => {
  const ingredients = Object.keys(props.ingredients).map(igKey => {
    return <li key={igKey}>
            <span>{igKey}:</span> {props.ingredients[igKey]}
          </li>
  })
  return (
    <Auxillary>
      <h3>Your order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>
        {ingredients}
      </ul>
    </Auxillary>
  );

}

export default orderSummary;