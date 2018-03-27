//modify after getting backend datamodel

import {SHOW_STUDENT_RESULT} from '../actions/types'

const initialState = {
  score: 70
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
