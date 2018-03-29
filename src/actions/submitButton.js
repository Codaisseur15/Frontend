import * as request from 'superagent'

import { SUBMIT, SUBMIT_FAILED } from './types'


const baseUrl_response = 'http://localhost:4001'

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






//<button
  //type="button"
  //onClick={() => dispatch(submit('Name of the Form'))}>Submit</button>
