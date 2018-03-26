import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'

class CheckboxAnswer extends PureComponent {
  static propTypes = {
    content: PropTypes.string.isRequired,
  }

  render() {
    return (
      <CheckboxAnswer content="CheckboxAnswer" />
    )
  }
}

export default CheckboxAnswer
