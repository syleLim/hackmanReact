import React, { Component } from 'react';

class KeyItem extends Component {
	constructor () {
		super();

	}


	render(){
		console.log(this.props.show)

		return (
				<div className='keyItem'>
					{this.props.show ? this.props.word : 'ㅋㅋ'}
				</div>			
			)
	}
}

export default KeyItem;