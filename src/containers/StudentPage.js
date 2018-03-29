import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import { showStudentResult, showStudentQuiz } from '../actions/result'
import PropTypes from 'prop-types'



class StudentPage extends PureComponent {
  static propTypes = {
    showStudentResult: PropTypes.func.isRequired,
    showStudentQuiz: PropTypes.func.isRequired,
    studentQuiz: PropTypes.objectOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      question: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        answer: PropTypes.arrayOf(PropTypes.shape({
          text: PropTypes.string.isRequired,
          correct: PropTypes.bool.isRequired
        })).isRequired
      })).isRequired
    })).isRequired
  }

  renderQuestions() {
    const {student, studentQuiz} = this.props
    return studentQuiz.question.map(q => {
      return (
        <li>
        <h3>{q.text}</h3>{
          q.answer.map(a =>
            <div>
              <input id={q.type} name={q.type} type={q.type} />
              <p>{q.text}</p>
            </div>
          )}
        </li>
      )
    })
  }

  componentWillMount() {
    this.props.showStudentQuiz(),
    this.props.showStudentResult()
  }

  render() {
    const {student, studentQuiz} = this.props
    const { onSubmit } = this.props


    return (
      <div>
        <h1>Quiz result for student</h1>
        <li className="student">
          <p className="score"> score: {`${student.score}`}</p>
        </li>
        <div>
        <ol>
          <form onSubmit={(e)=> {onSubmit}}>
          {
            studentQuiz.question !== undefined &&
            this.renderQuestions()
          }
            <input className = "submit" type="submit" value="Submit" />
          </form>
        </ol>
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state, props) => ({
  student: state.student,
  studentQuiz: state.studentQuiz
})

export default connect(
  mapStateToProps,
  {
    showStudentResult,
    showStudentQuiz
  })
  (StudentPage)
