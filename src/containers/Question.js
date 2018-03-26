import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import QuestionTitle from '../components/QuestionTitle'
//import CheckboxAnswer from '../components/CheckboxAnswer'
//import RadioAnswer from '../components/RadioAnswer'
//import {Redirect} from 'react-router-dom'

class Question extends PureComponent {
  static propTypes = {
    content: PropTypes.string.isRequired,
  }

  render() {
    return (
      <QuestionTitle content="Question Title Here" />
    )
  }
}

export default Question
