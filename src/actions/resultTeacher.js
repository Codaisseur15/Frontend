import * as request from 'superagent'
import { SHOW_TEACHER_RESULT, ALL_TEACHER_RESULT, SHOW_TEACHER_QUIZ, GET_TEACHER_RESPONSE } from './types'


const apiUrl = 'http://localhost:4001'
const baseUrl = 'http://localhost:4008'


export const showTeacherResult = (quizId, courseId) => (dispatch) => {
  request
  .get(`${apiUrl}/results/quiz=${quizId}/course=${courseId}`)
  .then(result => {
    dispatch({
        type: SHOW_TEACHER_RESULT,
        payload: result.body
    })
  })
.catch(err => console.error(err))
}

export const showTeacherQuiz = (id) => (dispatch) => {
  request
  .get(`${apiUrl}/results/quiz/${id}`)
  .then(result => {
    dispatch({
        type: SHOW_TEACHER_QUIZ,
        payload: result.body
    })
  })
.catch(err => console.error(err))
}

export const allTeacherResult = () => (dispatch) => {
  request
    .get(`${baseUrl}/quizzes/`)
    .then(result => {
      dispatch({
        type: ALL_TEACHER_RESULT,
        payload: result.body
      })
    })
    .catch(err => console.error(err))
}

export const getTeacherResponse = () => (dispatch) => {
  request
  .get(`${apiUrl}/responses/quiz/1`)
  .then(result => {
    dispatch({
      type: GET_TEACHER_RESPONSE,
      payload: result.body
  })
})
.catch(err => console.error(err))
}
