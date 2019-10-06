import React, { Component } from 'react';
import Auxillary from '../../hoc/Auxillary';

class BurgerBuilder extends Component {
	render() {
		return (
			<Auxillary>
				<div>Burger</div>
				<div>Burger controls</div>
			</Auxillary>
		);
	}
};

export default BurgerBuilder