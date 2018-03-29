import React, { PureComponent } from 'react'
import './QuizList.css'
import {connect} from 'react-redux'
import {getQuizzes} from '../actions/quizzes'

class QuizList extends PureComponent {
componentWillMount() {
  this.props.getQuizzes()
}
  render() {
    const {quizzes} = this.props;
    if (!quizzes) return null


    return (
      <div className = 'quiz-list'>
      {console.log(this.props)}
        <h2>Current Quizzes</h2>
        <table>
          <tr>
            <th>ID</th>
            <th className="title">Title</th>
            <th>Score</th>
            <th>Edit</th>
          </tr>

          {quizzes.map(quiz =>
            <tr>
              <td width="5%">{quiz.id}</td>
              <td width="70%" className="title">{quiz.title}</td>
              <td width="10%"></td>
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
