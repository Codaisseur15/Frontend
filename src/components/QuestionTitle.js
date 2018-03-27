import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class QuestionTitle extends PureComponent {
  static propTypes = {
    content: PropTypes.string.isRequired,
  }

  render() {
    return (
      <h1>{ this.props.content }</h1>
    )
  }
}
export default QuestionTitle
