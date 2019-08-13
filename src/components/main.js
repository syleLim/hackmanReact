import React, { Component } from 'react';

import QuizSubjectBoard from './quizSubjectBoard.js'

class Main extends Component {
	constructor () {
		super();
	}

	render () {
		console.log(this.state)

		return (
				<div className='main'>
					<h1>Hello with HackMan Quiz</h1>
					<QuizSubjectBoard subjects={this.props.subjects} onChangePage={this.props.onChangePage}/>
				</div>
			)
	}
}

export default Main;