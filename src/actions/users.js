import * as request from 'superagent'
import {baseUrl} from '../constants'

import { USER_LOGIN_SUCCESS } from './types'
import { USER_LOGIN_FAILED } from './types'
import { USER_LOGOUT } from './types'


export const login = (email, password) => (dispatch) =>
	request
		.post(`${baseUrl}/logins`)
    .send({email, password})
    .then(result => {
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: result.body
      })
    })
    .catch(err => {
    	if (err.status === 400) {
    		dispatch({
    			type: USER_LOGIN_FAILED,
    			payload: err.response.body.message || 'Unknown error'
    		})
    	}
    	else {
    		console.error(err)
    	}
    })

export const logout = () => {
	   console.log("logout")
	      return {
	        type: USER_LOGOUT
	      }
	    }
