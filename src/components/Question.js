import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'

class ComponentName extends PureComponent {
  static propTypes = {
    content: PropTypes.string.isRequired,
  }

  render() {
    return (
      <ComponentName content="Hello, World" />
    )
  }
}

export default ComponentName
