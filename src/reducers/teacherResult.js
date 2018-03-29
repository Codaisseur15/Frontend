import {SHOW_TEACHER_RESULT} from '../actions/types'
import {GET_ONE_TEACHER_RESULT} from '../actions/types'

export default (state = {}, { type, payload }) => {
  switch (type) {
    case SHOW_TEACHER_RESULT:
      return payload

    default:
      return state
  }
}
