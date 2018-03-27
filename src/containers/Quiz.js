import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import QuestionTitle from '../components/QuestionTitle'
import Questions from '../components/Questions'

class Quiz extends PureComponent {
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

export default Quiz
