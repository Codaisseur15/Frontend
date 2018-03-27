//modify after getting backend datamodel


import {SHOW_STUDENT_QUIZ} from '../actions/types'

const initialState = {
    id: 1,
    question: "what is your favorite musician?",
    answer1: 'beyonce',
    answer2: 'marron5',
    answer3: 'Dua Lipa',
    answer4: 'Imagin Dragon'
  }/*
  {
    id: 2,
    question: "what is your favorite fruits?",
    answers: ['strawberry', 'banana', 'watermelon', 'orange']
  }*/




export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SHOW_STUDENT_QUIZ:
      return {
        state
      }

    default:
      return state
  }
}
