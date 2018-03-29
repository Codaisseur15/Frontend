import * as request from 'superagent'


import { SHOW_STUDENT_RESULT } from './types'
import { SHOW_STUDENT_QUIZ } from './types'


const baseUrl = 'http://localhost:4000'


export const showStudentResult = () => {
  return {
      type: SHOW_STUDENT_RESULT
    }
  }


export const showStudentQuiz = (id) => (dispatch) => {
  request
    .get(`${baseUrl}/quizzes/${id}`)
    .then(result => {
      dispatch({
        type: SHOW_STUDENT_QUIZ,
        payload: result.body
      })
    })
    .catch(err => console.error(err))
}



/* two request needed
  1) questions, answers from quiz team
  2) correct answer, score from response team

  then compare answers and correct answer in frontend
*/
/*
export const showStudentResult = (name,id) => (dispatch) => {
  console.log(name,id);
  request
    .post(`${baseUrl}/response`) //I dont know address yet
    .send({type: name})
    .then(response => {
      //console.log(response);
      request
        .put(`${baseUrl}/users/${id}`)
        .send({preferredbreed: response.body.id})
        .then(res => dispatch({
          type: LIKE_BREED,
          //payload: response.body
        }))
    })
    .catch(err => alert(err))
}
*/
