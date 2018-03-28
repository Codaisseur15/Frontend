import * as request from 'superagent'
import { SHOW_TEACHER_RESULT } from './types'
import { GET_ONE_TEACHER_RESULT } from './types'
import { GET_TEACHER_RESPONSE } from './types'
const baseUrl = 'http://localhost:4000'


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
