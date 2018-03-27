import React, { PureComponent } from 'react'
import './QuizList.css'

export default class QuizList extends PureComponent {

render() {

  let QuizList = [
    {
      id:1,
      title:'Ruby on Rails',
      score:'55/100',
    },
    {
      id:2,
      title:'JavaScript',
      score:'60/100',
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
    },
  ]

return (
<div className = 'quiz-list'>
<ol>
  {QuizList.map(quiz => <li> {quiz.title} {quiz.score} </li>)}
</ol>
</div>
)
}
}
