import React, { Component } from 'react';
//import ReactDOM from 'react-dom';

import Main from './components/main.js'
import Quiz from './components/quiz.js'

class Index extends Component {
	constructor () {
		super ();

		this.state = {
			isMain : true,

			subjects : ['1', '2', '3'],

			selectedSubject : '',

			questionSet : [{	
					id : '1',
					subject : '1',
					subscription : '이햐햐햐햐햐1',
					answer : 'ANSWER'
				}, {	
					id : '2',
					subject : '1',
					subscription : '이햐햐햐햐햐2',
					answer : 'nodejs2'
				}, {	
					id : '3',
					subject : '1',
					subscription : '이햐햐햐햐햐3',
					answer : 'nodejs3'
				}]
			}
	}

	componentDidMount () {
			/*
				최초의 데이터 호출 실시
			*/
	}

	changePage(event){
		this.setState({
			isMain : false,
			selectedSubject : event.target.value
		})
	}

	render() {
		const selectedQuestionSet = this.state.questionSet.filter((e) => e.subject === this.state.selectedSubject)

		return this.state.isMain ? (<Main subjects={this.state.subjects} onChangePage={this.changePage.bind(this)}/>) : (<Quiz questionSet={selectedQuestionSet}/>)
	}
	

}

React.render(<Index />, document.getElementById('root'));