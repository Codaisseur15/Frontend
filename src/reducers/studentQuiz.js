import {SHOW_STUDENT_QUIZ} from '../actions/types'

const initialState = []


export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SHOW_STUDENT_QUIZ:
      return payload

    default:
      return state
  }
}
