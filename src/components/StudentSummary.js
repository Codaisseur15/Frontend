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
          <p className="score"> score: {`${student.score}`}</p>
        </li>
      </div>
    )
  }
}
