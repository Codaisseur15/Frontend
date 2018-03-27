import {SHOW_TEACHER_RESULT} from '../actions/types'
import { teacherResultList } from '../lib/teacherResultList'



export default (state = teacherResultList, { type, payload }) => {
  switch (type) {
    case SHOW_TEACHER_RESULT:
      return {
        state
      }
    default:
      return state
  }
}
