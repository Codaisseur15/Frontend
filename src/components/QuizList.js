import React, { PureComponent } from 'react'
import './QuizList.css'
import {connect} from 'react-redux'
import {getQuizzes} from '../actions/quizzes'

export default class QuizList extends PureComponent {
componentWillMount() {
  this.props.getQuizzes()
}
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
            <th className="title">Title</th>
            <th>Score</th>
            <th>Edit</th>
          </tr>
          {QuizList.map(quiz =>
            <tr>
              <td width="5%">{quiz.id}</td>
              <td width="70%" className="title">{quiz.title}</td>
              <td width="10%">{quiz.score}</td>
              <td width="15%" onClick={_=>window.location.href=`/edit/${quiz.id}`} className='edit-button'>edit this quiz</td>

            </tr>
          )}
        </table>
        <button onClick={_=>window.location.href=`/QuizCreator`} className='add-button'>Create Quiz</button>
      </div>
    )
  }
}

const mapStateToProps = function (state) {
	return {
		quizzes: state.quizzes,
    //error: state.login.error
	}
}

export default connect(mapStateToProps, {getQuizzes})(QuizList)
