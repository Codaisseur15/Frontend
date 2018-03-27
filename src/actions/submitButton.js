import React from 'react'
import { connect } from 'react-redux'
import { SUBMIT, SUBMIT_FAILED } from './types'


export const SubmitForm = (courseId, studentId, quizResponse ) = ({dispatch}) =>
          const course = courseId.id
          request
              .post(`${baseUrl}/responses`)
              .send({ courseId, studentId, quizResponse})
              .then(result => {
                dispatch({
                  type: SUBMIT
                })
              }
              .catch(err => {
                if(err.status === 400){
                  dispatch({
                    type: SUBMIT_FAILED
					          payload: err.response.body.message || 'Please, answer every question!'
                   })
                }
                else {
				             console.error(err)
                }
              })






//<button
  //type="button"
  //onClick={() => dispatch(submit('Name of the Form'))}>Submit</button>
