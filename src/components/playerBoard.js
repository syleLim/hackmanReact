import React, { Component } from 'react';

import KeyItem from './keyItem.js'

class PlayerBoard extends Component {
	constructor () {
		super();
	}

	render(){
		const answerWords = this.props.question.answer.split('').map((e)=>{
			if (this.props.pressSet.indexOf(e) !== -1){
				return <KeyItem word={e} show={true}/>	
			}else{
				return <KeyItem word={e} show={false}/>	
			}
			
		})

		return (
				<div className='Board'>
					{answerWords}
				</div>			
			)
	}
}

export default PlayerBoard;