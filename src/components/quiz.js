import React, { Component } from 'react';

import QuizBoard from './quizBoard'

class Quiz extends Component {
	constructor () {
		super();
	}

	render(){
		const selectedQuestion = this.props.questionSet.map((e) => {
			if (e.id === '1') {
				return e
			} 
		})[0]

		return (
				<div className='quiz'>
					<h1>{selectedQuestion.subscription}</h1>
					<QuizBoard question={selectedQuestion} />
				</div>			
			)
	}
}

export default Quiz;