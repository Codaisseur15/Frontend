import {SHOW_QUIZ} from '../actions/types'


export default (state = {}, { type, payload }) => {
  switch (type) {
    case SHOW_QUIZ:
      return payload
    default:
      return state
  }
}
