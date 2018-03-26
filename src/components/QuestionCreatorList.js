import React, {PureComponent} from 'react'

export default class QuestionCreatorList extends PureComponent {


	render() {
	 let QuestionList = [
		 {
			 id: 0,
			 title: 'cow?',
			 awnsers: {
				 1: 'Whoop',
				 2:	'What',
				 3:	'Who',
			 }
		 },
		 {
			 id: 1,
			 title: 'sheep?',
			 awnsers: {
				 1: 'Whoop',
				 2:	'What',
				 3:	'Who',
			 }
		 },
		 {
			 id: 2,
			 title: 'dragon?',
			 awnsers: {
				 1: 'Whoop',
				 2:	'What',
				 3:	'Who',
			 }
		 },

	 ]
		return (
			<div className='question-list'>
				<ol>
					{QuestionList.map(question => <li>{question.title} <ol><li>{question.awnsers[0]}</li></ol></li>)}
				</ol>
			</div>
		)
	}
}
