import React from 'react'
import { connect } from 'react-redux'


export const SUBMIT = 'SUBMIT'

export const SubmitForm ( {dispatch}) => {
    <button
      type="button"
      onClick={() => dispatch(submit('Name of the Form'))}>Submit</button>
}
