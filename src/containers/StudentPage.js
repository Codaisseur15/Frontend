import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import StudentSummary from '../components/StudentSummary'
import QuizResultStudent from '../components/QuizResultStudent'
import { showStudentResult, showStudentQuiz } from '../actions/result'
import PropTypes from 'prop-types'



class ResultStudent extends PureComponent {
  static propTypes = {
    showStudentResult: PropTypes.func.isRequired,
    showStudentQuiz: PropTypes.func.isRequired
  }

  componentWillMount() {
    this.props.showStudentQuiz(),
    this.props.showStudentResult()
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
  (ResultStudent)
