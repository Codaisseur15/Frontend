import {SHOW_STUDENT_RESULT} from '../actions/types'

const initialState = {
  name: "yoonji",
  title: "database",
  score: 70,
  class: "b-15"
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SHOW_STUDENT_RESULT:
      return {
        state
      }

    default:
      return state
  }
}
