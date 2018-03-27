import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import QuestionTitle from '../components/QuestionTitle'
import Questions from '../components/Questions'
import SubmitForm from '../components/SubmitButton'

class Question extends PureComponent {
  static propTypes = {
    content: PropTypes.string.isRequired,
  }

  render() {
    return (
      <div>
        <QuestionTitle content="Question Title Here" />
        <Questions />
        <SubmitForm />
      </div>
    )
  }
}

export default Question
