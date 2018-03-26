import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'

class RadioAnswer extends PureComponent {
  static propTypes = {
    content: PropTypes.string.isRequired,
  }

  render() {
    return (
      <RadioAnswer content="RadioAnswer" />
    )
  }
}

export default RadioAnswer
