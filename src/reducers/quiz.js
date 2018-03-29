import {GET_ONE_QUIZ} from '../actions/types'


export default (state = {}, { type, payload }) => {
  switch (type) {
    case GET_ONE_QUIZ:
      return {
        state
      }
    default:
      return state
  }
}
