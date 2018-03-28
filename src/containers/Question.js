import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import QuestionTitle from '../components/QuestionTitle'
import Questions from '../components/Questions'
//import 2 actions (submit, showstudentquiz)
//showstudentquiz => componentWillMount (this doesnt need trigger button)
//submit => connect to redux, connect submit action to button, and dispatch

class Question extends PureComponent {
  static propTypes = {
    content: PropTypes.string.isRequired,
  }

  render() {
    return (
      <div>
        <QuestionTitle content="Question Title Here" />
        <Questions />
      </div>
    )
  }
}

export default Question
