//modify after getting backend datamodel

import {SHOW_STUDENT_RESULT} from '../actions/types'

const initialState = []

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SHOW_STUDENT_RESULT:
      return {
        payload
      }

    default:
      return state
  }
}
