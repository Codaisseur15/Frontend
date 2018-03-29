import {SUBMIT, SUBMIT_FAILED} from '../actions/types'

export default (state=[], { type, payload }) => {
  switch (type) {
    case SUBMIT:
      return payload

    default:
      return state
  }
}
