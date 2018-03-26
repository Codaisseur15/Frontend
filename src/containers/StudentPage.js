import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import StudentSummary from '../components/StudentSummary'
import { showStudentResult } from '../actions/result'
import PropTypes from 'prop-types'

class ResultStudent extends PureComponent {
  static propTypes = {
//
  }

  render() {
    let {student} = this.props
    return (
      <div>
        <h1>Quiz result for student</h1>
        <StudentSummary student={student}/>
      </div>
    )
  }
}

//It can be changed depends on student identification
const mapStateToProps = state => ({
  student: state.student
})

export default connect(mapStateToProps, { showStudentResult })(ResultStudent)
