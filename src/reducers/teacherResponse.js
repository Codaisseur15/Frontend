import {GET_TEACHER_RESPONSE} from '../actions/types'

export default (state = {}, { type, payload }) => {
  switch (type) {
      case GET_TEACHER_RESPONSE:
        return payload

    default:
      return state
  }
}
