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
        <h2>Current Quizzes</h2>
        <table>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Score</th>
            <th>Edit</th>
          </tr>
          {QuizList.map(quiz =>
            <tr>
              <td>{quiz.id}</td>
              <td>{quiz.title}</td>
              <td>{quiz.score}</td>
              <td><button onClick={_=>window.location.href=`/edit/${quiz.id}`} className='edit-button'>edit the quiz</button></td>
            </tr>
          )}
        </table>
        <button onClick={_=>window.location.href=`/QuizCreator`} className='add-button'>Create Quiz</button>
      </div>
    )
  }
}
