import { SHOW_TEACHER_RESULT } from './types'
import { GET_TEACHER_RESPONSE } from './types'
import { GET_ONE_TEACHER_RESULT } from './types'


export const getOneTeacherResult = () => {
  return {
    type: GET_ONE_TEACHER_RESULT
  }
}

export const showTeacherResult = () => {
  return {
    type: SHOW_TEACHER_RESULT
  }
}

export const getTeacherResponse = () => {
  return {
    type: GET_TEACHER_RESPONSE
  }
}
