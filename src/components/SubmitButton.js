import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import { submitForm } from '../actions/submitButton'
import PropTypes from 'prop-types'

class SubmitForm extends PureComponent {
    static propTypes = {
      submitForm: PropTypes.func.isRequired
    }
    handleClick = () => {
      console.log(this.props);
      this.props.submitForm({...this.props.response})
    }

    render() {


            return (
              <form>
                  <button
                    onClick={this.handleClick}
                    className = "submit" type="submit">Submit</button>
              </form>
            )
    }
}

export default connect(null, { submitForm })(SubmitForm)
