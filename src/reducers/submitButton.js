import {SUBMIT, SUBMIT_FAILED} from '../actions/types'

const initialState = {
  courseId: 1,
  studentId: 1,
  quizId: 1,
  quizes: "text"
}


export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SUBMIT:
      return {
        state
      }

    default:
      return state
  }
}
