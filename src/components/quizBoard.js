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

		if(winner !== 'nono') {
			return true
		}else{
			return false
		}
	}
	addPressSet(event){
		const newPressSet = update(this.state.pressSet, {$push : [event.target.value]})

		this.setState({
			pressSet : newPressSet
		})

		if (!this.checkWinner(newPressSet, 'player')) {
			this.addAiPressSet()
		}
	}

	aiChoiceWord(){
		/*
			have to chagne - this time choice only correct word
		*/
		let word = ''

		this.props.question.answer.split('').forEach((e)=>{
			word = this.state.aiPressSet.indexOf(e) === -1 ? e : word
		})

		return word
	}

	addAiPressSet(){
		const word = this.aiChoiceWord()

		const newAiPressSet = update(this.state.aiPressSet, {$push : [word]})

		this.setState({
			aiPressSet : newAiPressSet
		})

		this.checkWinner(newAiPressSet, 'Ai')

		console.log('ai', newAiPressSet)
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