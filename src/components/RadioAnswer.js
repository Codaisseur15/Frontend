import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class RadioAnswer extends PureComponent {
  static propTypes = {
    content: PropTypes.string.isRequired,
  }

  render() {
    return (
      <form>
        <h1>{ this.props.content }</h1>
        <input type="radio" id="radioButton" />
      </form>
    )
  }
}
export default RadioAnswer
