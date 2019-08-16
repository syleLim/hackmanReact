import React, { Component } from 'react';
import update from 'react-addons-update'

import PlayerBoard from './playerBoard.js'
import KeyBoard from './keyBoard.js'

class QuizBoard extends Component {
	constructor () {
		super();

		this.state = {
			pressSet : [],
			aiPressSet : []
		}
	}

	checkWinner(answerSet, flag){
		const winner = this.props.question.answer.split('').every((e) => answerSet.indexOf(e) !== -1) ? flag : 'nono'
		console.log(winner)
	}

	addPressSet(event){
		const newPressSet = update(this.state.pressSet, {$push : [event.target.value]})

		this.setState({
			pressSet : newPressSet
		})

		this.checkWinner(newPressSet, 'player')
	}

	addAiPressSet(event){
		const newAiPressSet = update(this.state.aiPressSet, {$push : [event.target.value]})

		this.setState({
			aiPressSet : newAiPressSet
		})

		this.checkWinner(newAiPressSet, 'Ai')
	}


	render(){
		console.log(this.state.pressSet)

		return (
				<div className='quizBoard'>
					<PlayerBoard who={'player'} question={this.props.question} pressSet={this.state.pressSet}/>
					<KeyBoard pressSet={this.state.pressSet} addPressSet={this.addPressSet.bind(this)} />
					<PlayerBoard who={'ai'} question={this.props.question} pressSet={this.state.aiPressSet}/>
				</div>			
			)
	}
}

export default QuizBoard;