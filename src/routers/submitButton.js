import React from 'react'
import PropTypes from 'prop-types'

export default class SubmitButton extends React.Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired
  }
    render() {
      return (
        <button className="Submit" onClick={this.props.onClick}>'Submit'</button>

      )
    }

}

export default SubmitButton
