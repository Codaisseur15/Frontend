import React, { Component } from 'react';
import { getTeacherResponse, showTeacherResult } from '../../actions/resultTeacher'
import {connect} from 'react-redux'
import { showStudentQuiz } from '../../actions/result'
import OneResultTeacher from './OneResultTeacher'



class ResponseTeacher extends Component {

  componentWillMount() {
    this.props.showStudentQuiz(),
    this.props.showTeacherResult()
  }

renderQuizresponses = (questionId, variantId) => {

const {quizResponse} = this.props

return quizResponse.filter(x =>
  x.quizResponse[questionId]
  .includes(variantId)
  ).length
}

renderQuizQuestion = () => {

const {studentQuiz} = this.props
  if (!studentQuiz.question) return null

return studentQuiz.question.map(q => {
  return (
    <li>
    <h3>{q.text}</h3>{
      q.answer.map(a =>
        <div>
          <input id={q.type} name={q.type} type={q.type} />
          <p>{q.text}</p>
        </div>
      )}
    </li>
  )
})
}

  render() {

    const {quizResult} = this.props
    const {studentQuiz} = this.props


    return (
      <div>
              <OneResultTeacher quizResult={quizResult}/>
                Question 1:
                Variant 1
                {this.renderQuizresponses(1,1)}
                <h1>Quiz questions</h1>
                {this.renderQuizQuestion()}

                <p/>

                </div>
              );
            }
          }

const mapStateToProps = state => ({
  quizResponse: state.quizResponse,
  quizResult: state.quizResult,
  studentQuiz: state.studentQuiz
})

export default connect(mapStateToProps, {
  getTeacherResponse,
    showStudentQuiz,
    showTeacherResult
})(ResponseTeacher)
