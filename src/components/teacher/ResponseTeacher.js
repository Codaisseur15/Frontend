import React, { Component } from 'react';
import { getTeacherResponse, showTeacherResult } from '../../actions/resultTeacher'
import {connect} from 'react-redux'
import { showStudentQuiz } from '../../actions/result'
import OneResultTeacher from './OneResultTeacher'
import {withRouter} from 'react-router'
import './Response.css';



class ResponseTeacher extends Component {

  componentWillMount() {
    this.props.showStudentQuiz(this.props.match.params.quizId),
    this.props.showTeacherResult(
      this.props.match.params.quizId,
      this.props.match.params.courseId
    ),
    this.props.getTeacherResponse()
  }


renderQuizresponses(questionId, variantId) {
  const {response} = this.props
  const {quizResult} = this.props

  return response.filter(x => {
    const { quizResponse } = x
    if (x.courseId === quizResult.courseId)

    return quizResponse[questionId]
    .includes(variantId)
  }).length
}

renderQuizQuestion() {

const {studentQuiz} = this.props
const {quizResult} = this.props
  if (!studentQuiz.question) return null

return studentQuiz.question.map(q => {
  return (
    <li>
    <h3>{q.text}</h3>
    {q.answer.map(a => {
        if (a.correct === true)
        return (
          <div>
          <p className='correct'>{a.text}{'            '}
          ({this.renderQuizresponses(q.id, a.id)/quizResult.numberOfTakers*100}
          % of answers)</p>
        </div>)

        else
          return (<div>
          <p className='wrong'>{a.text}{'  '}
          ({this.renderQuizresponses(q.id, a.id)/quizResult.numberOfTakers*100}
          % of answers)
          </p>
        </div>)
      })}
    </li>
  )
})
}

  render() {

    const {quizResult} = this.props
    const {studentQuiz} = this.props
    const {response} = this.props
    if (!response[0]) return null


    return (
      <div class='container center-align'>
              <OneResultTeacher quizResult={quizResult}/>

                <h3>{studentQuiz.title} quiz questions</h3>
                {this.renderQuizQuestion()}
                <p/>
                </div>
              );
            }
          }

const mapStateToProps = state => ({
  response: state.quizResponse,
  quizResult: state.quizResult,
  studentQuiz: state.studentQuiz
})

export default withRouter(
connect(mapStateToProps, {
  getTeacherResponse,
    showStudentQuiz,
    showTeacherResult
})
(ResponseTeacher))
