import {GET_TEACHER_RESPONSE} from '../actions/types'
import { teacherResponses } from '../lib/teacherResultList'



export default (state = teacherResponses, { type, payload }) => {
  switch (type) {
      case GET_TEACHER_RESPONSE:
        return {
          state
        }
    default:
      return state
  }
}
