import React, { Component } from 'react';

class KeyItem extends Component {
	constructor () {
		super();

	}


	render(){

		return (
				<div className='keyItem'>
					<button onClick={this.props.addPressSet} value={this.props.word}>{this.props.show ? this.props.word : '빈칸'}</button>
				</div>			
			)
	}
}

export default KeyItem;