import {ADD_QUIZ, SHOW_QUIZZES, UPDATE_QUIZ_SUCCESS} from '../actions/quizzes'

export default (state = [], {type, payload} = {}) => {
  switch (type) {
    case SHOW_QUIZZES:
      return payload;

    case ADD_QUIZ:
      return {
        ...state,
        [payload.id]: payload
      }

    case UPDATE_QUIZ_SUCCESS:
      return payload.reduce((quizzes, quiz) => {
        quizzes[quiz.id] = quiz
        return quizzes
      }, {})

    default:
      return state
  }
}
