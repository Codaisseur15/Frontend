import {SHOW_TEACHER_RESULT} from '../actions/types'

export const teacherResultList = [
  {
    id: 0,
    name: "GraphQl",
  results: {
    className: 15,
    avScore: 70
  }},
  {
    id: 1,
    name: "Postgres",
  results: {
    className: 14,
    avScore: 50
    }
}]



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
