import React, { Component } from 'react';
import update from 'react-addons-update'

import QuizBoard from './quizBoard'

class Quiz extends Component {
	constructor () {
		super();

		this.state = {
			useId : []
		}
	}

	/*
		question select error

	*/
	selectQuestion() {
		if(this.state.useId.length === 0) {

		}
		

		const curIds = 
		const newSelectedId = curIds.pop()
		
		return this.props.questionSet.map((e) => e.id === newSelectedId)
	}

	render(){
		//selectedQuestion = this.selectQuestion()

		return (
				<div className='quiz'>
					<h1>{selectedQuestion.subscription}</h1>
					<QuizBoard question={this.selectedQuestion} />
				</div>			
			)
	}
}

export default Quiz;