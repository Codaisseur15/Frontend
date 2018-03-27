import { SHOW_STUDENT_RESULT } from './types'
import { SHOW_STUDENT_QUIZ } from './types'

export const showStudentResult = () => {
  return {
    type: SHOW_STUDENT_RESULT
  }
}

export const showStudentQuiz = () => {
  return {
    type: SHOW_STUDENT_QUIZ
  }
}
