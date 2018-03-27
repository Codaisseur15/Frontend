import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class CheckboxAnswer extends PureComponent {
  static propTypes = {
    content: PropTypes.string.isRequired,
  }

  render() {
    return (
      <form>
        <h1>{ this.props.content }</h1>
        <input id="checkBox" type="checkbox" />
      </form>
    )
  }
}
export default CheckboxAnswer
