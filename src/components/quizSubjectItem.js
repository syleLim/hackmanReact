import React, { Component } from 'react';

class QuizSubjectItem extends Component {
	constructor () {
		super();
	}

	render(){
		return (
				<div className='quizItem'>
					<button value={this.props.subject} onClick={this.props.onChangePage}>{this.props.subject}</button>
				</div>
			)
	}
}

export default QuizSubjectItem;