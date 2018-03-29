import * as request from 'superagent'

import { SUBMIT, SUBMIT_FAILED, SHOW_QUIZ } from './types'


const baseUrl_response = 'http://localhost:4001'
const baseUrl_quiz = 'http://localhost:4008'

//export const submitForm = (courseId, studentId, quizId, quizResponse) => (dispatch) => {
export const submitForm = (response) => (dispatch) => {
  console.log('====================',response);
  console.log('==========================');
  request
      .post(`${baseUrl_response}/responses`)
      .send(response)

      .then(result => {
        dispatch({
          type: SUBMIT,
          payload: result.body
        })
      })

    }

export const showQuiz = (id) => (dispatch) => {
  request
      .get(`${baseUrl_quiz}/quizzes/${id}`)
      .then(result => {
        console.log(result.body);
        dispatch({
          type: SHOW_QUIZ,
          payload: result.body
        })
      })
      .catch(err => console.error(err))
}





//<button
  //type="button"
  //onClick={() => dispatch(submit('Name of the Form'))}>Submit</button>
