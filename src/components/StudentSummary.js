import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'

export default class StudentSummary extends PureComponent {
  static propTypes = {
    student: PropTypes.object.isRequired,
  }

  render() {
    let {student} = this.props
    return (
      <div>
        <h1>Student Information</h1>
        <li className="student">
          <p className="name"> Name: {`${student.name}`}</p>
          <p className="title"> Quiz_title: {`${student.title}`}</p>
          <p className="class"> class: {`${student.class}`}</p>
          <p className="score"> score: {`${student.score}`}</p>
        </li>
      </div>
    )
  }
}
