import React, { Component } from 'react';

import QuizSubjectItem from './quizSubjectItem.js'

class QuizSubjectBoard extends Component {
	constructor () {
		super();
	}

	render(){

		var quizItems = this.props.subjects.map((sub)=>{
			return <QuizSubjectItem subject={sub} onChangePage={this.props.onChangePage}/>
		})

		return (
				<div>
					{quizItems}
				</div>
			)
	}
}

export default QuizSubjectBoard;