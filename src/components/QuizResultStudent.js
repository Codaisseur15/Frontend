import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import { showStudentQuiz } from '../actions/result'
import PropTypes from 'prop-types'

class QuizResultStudent extends PureComponent {
  static propTypes = {
//
  }

  render() {
    let {studentQuiz} = this.props
    return (

    // when I should show multiple quiz set, i have to map maybe
      <div>
        {`${studentQuiz.id}`}
        {`${studentQuiz.question}`}
        {`${studentQuiz.answers}`}
      </div>
    )
  }
}

//It can be changed depends on student identification
const mapStateToProps = state => ({
  quizzes: state.studentQuiz
})

export default connect(mapStateToProps, { showStudentQuiz })(QuizResultStudent)
