import * as request from 'superagent'
import {baseUrl} from '../constants'

export const ADD_QUIZ = 'ADD_GAME'
export const SHOW_QUIZZES = 'SHOW_QUIZZES'
export const UPDATE_QUIZ_SUCCESS = 'UPDATE_GAME_SUCCESS'

export const getQuizzes = () => (dispatch, getState) => {
  const state = getState()
  const jwt = state.currentUser.jwt

  request
    .get(`${baseUrl}/quizzes`)
    .then(result => {
      dispatch({
        type: SHOW_QUIZZES,
        payload: result.body
      })
    })
    .catch(err => console.error(err))
}

export const createQuiz = () => (dispatch, getState) => {
  const state = getState()
  const jwt = state.currentUser.jwt

  request
    .post(`${baseUrl}/quizzes`)
    .set('Authorization', `Bearer ${jwt}`)
    .then(result => {
      dispatch({
        type: ADD_QUIZ,
        payload: result.body
      })
    })
    .catch(err => console.error(err))
}

export const updateQuiz = (quizId, board) => (dispatch, getState) => {
  const state = getState()
  const jwt = state.currentUser.jwt

  request
    .patch(`${baseUrl}/quizzes/${quizId}`)
    .set('Authorization', `Bearer ${jwt}`)
    .send({board})
    .then(result => {
      dispatch({
        type: UPDATE_QUIZ_SUCCESS
      })
    })
    .catch(err => console.error(err))
}
