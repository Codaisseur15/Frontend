import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import QuestionTitle from '../components/QuestionTitle'
import CheckboxAnswer from '../components/CheckboxAnswer'
import RadioAnswer from '../components/RadioAnswer'

class Question extends PureComponent {
  static propTypes = {
    content: PropTypes.string.isRequired,
  }

  render() {
    return (
      <div>
        <QuestionTitle content="Question Title Here" />
        <CheckboxAnswer content="CheckboxAnswer Test" />
        <RadioAnswer content="RadioAnswer Test" />
      </div>
    )
  }
}

export default Question
