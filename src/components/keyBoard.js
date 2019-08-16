import React, { Component } from 'react';

import KeyItem from './keyItem.js'

const WORDS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T','U', 'V', 'W', 'X', 'Y', 'Z']

class KeyBoard extends Component {
	constructor () {
		super();

	}


	render(){
		const words = WORDS.map((e) => {
			if (this.props.pressSet.indexOf(e) === -1){
				return <KeyItem word={e} show={true} addPressSet={this.props.addPressSet}/>	
			}else{
				return <KeyItem word={e} show={false} />	
			}
			
		})

		return (
				<div className='keyBoard'>
					{words}
				</div>			
			)
	}
}

export default KeyBoard;