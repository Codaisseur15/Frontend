import {ALL_TEACHER_RESULT} from '../actions/types'


export default (state = {}, { type, payload }) => {
  switch (type) {
    case ALL_TEACHER_RESULT:
      return payload

    default:
      return state
  }
}
