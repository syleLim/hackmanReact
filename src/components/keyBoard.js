import React, { Component } from 'react';

import KeyItem from './keyItem.js'

class KeyBoard extends Component {
	constructor () {
		super();

	}


	render(){
		const words = ['all alpabet'].map((e) => {
			return <KeyItem word={e} show={true}/>
		})

		return (
				<div className='keyBoard'>
					{words}
				</div>			
			)
	}
}

export default KeyBoard;