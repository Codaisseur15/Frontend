import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import './QuizListPage.css'

export default class QuizList extends PureComponent {

render() {

  let QuizList = [
    {
      id:1,
      title:'Ruby on Rails',
      score:'54/100',
    },
    {
      id:2,
      title:'JavaScript',
      score:'60/10',
    },
    {
      id:3,
      title: 'React-Redux',
      score: '45/100',
    },
    {
      id:4,
      title: 'TypeScript',
      score: '70/100',
    },
    {
      id:5,
      title: 'WebSockets',
      score: '35/100',
    }
  ]

return (
<div className = 'QuizList'>
<ol>
  {QuizList.map(quiz => <li>{quiz.id} {quiz.title.id} {quiz.score.id} </li>)}
</ol>
</div>
)
}
}
