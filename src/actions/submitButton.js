import React from 'react'
import { connect } from 'react-redux'
import {responsesUrl} from '../constants'

import { SUBMIT, SUBMIT_FAILED } from './types'


export const SubmitForm = (courseId, studentId, quizId quizResponse ) = ({dispatch}) =>
          const course = courseId.id
          request
              .post(`${responsesUrl}/responses`)
              .send({ courseId, studentId, quizId, quizResponse})
              .then(result => {
                dispatch({
                  type: SUBMIT,
                  payload: result
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
