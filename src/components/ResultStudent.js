import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import StudentSummary from './StudentSummary'
import QuizResultStudent from './QuizResultStudent'
import { showStudentResult, showStudentQuiz } from '../actions/result'
import PropTypes from 'prop-types'

//use one endpoint later, (and make sum score function) -> better

class ResultStudent extends PureComponent {
  static propTypes = {
//
  }

  render() {
    let {student, studentQuiz} = this.props

    return (
      <div>
        <h1>Quiz result for student</h1>
        <StudentSummary student={student}/>
        <QuizResultStudent studentQuiz={studentQuiz}/>
      </div>
    )
  }
}


const mapStateToProps = state => ({
  student: state.student,
  studentQuiz: state.studentQuiz
})

export default connect(
  mapStateToProps,
  {
    showStudentResult,
    showStudentQuiz
  })
  (ResultStudent)
