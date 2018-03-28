import {SHOW_TEACHER_QUIZ} from '../actions/types'



export default (state = {}, { type, payload }) => {
  switch (type) {
    case SHOW_TEACHER_QUIZ:
      return payload

    default:
      return state
  }
}
