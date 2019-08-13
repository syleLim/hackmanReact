import React, { Component } from 'react';

import PlayerBoard from './playerBoard.js'
import KeyBoard from './keyBoard.js'

class QuizBoard extends Component {
	constructor () {
		super();

	}


	render(){
		return (
				<div className='quizBoard'>
					<PlayerBoard who={'ai'} question={this.props.question}/>
					<KeyBoard />
					<PlayerBoard who={'player'} question={this.props.question}/>
				</div>			
			)
	}
}

export default QuizBoard;