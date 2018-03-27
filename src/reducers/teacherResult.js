import {SHOW_TEACHER_RESULT} from '../actions/types'
import {GET_ONE_TEACHER_RESULT} from '../actions/types'
import { oneResult } from '../lib/teacherResultList'



export default (state = oneResult, { type, payload }) => {
  switch (type) {
    case GET_ONE_TEACHER_RESULT:
      return {
        state
      }
    default:
      return state
  }
}
