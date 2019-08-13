import React, { Component } from 'react';

import KeyItem from './keyItem.js'

class PlayerBoard extends Component {
	constructor () {
		super();

	}


	render(){
		const answerWords = this.props.question.answer.split('').map((e)=>{
			return <KeyItem word={e} show={false}/>
		})

		return (
				<div className='Board'>
					{answerWords}
				</div>			
			)
	}
}

export default PlayerBoard;