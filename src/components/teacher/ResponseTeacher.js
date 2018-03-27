import React, { Component } from 'react';
import { getTeacherResponse } from '../../actions/resultTeacher'
import {connect} from 'react-redux'



class ResponseTeacher extends Component {

  renderResponse = (quiz) => {
    return (
      <div>
      <h2>Results</h2>
      <p>Quiz ID {quiz.id}</p>
      <p>Class # {quiz.course_id}</p>
      <p>Response {quiz.Response}/</p>
      <p>Score {quiz.score}</p>
      </div>
    )
  }

  render() {
    const {quizResponse} = this.props

    return (
      <div>
        <header className="App-header">
          <h1 className="App-title">Quiz results</h1>
            </header>
              <div>
                {quizResponse.map(quiz => this.renderResponse(quiz))}
                </div>
                </div>
              );
            }
          }

const mapStateToProps = state => ({
  quizResult: state.quizResult,
  quizResponse: state.quizResponse
})

export default connect(mapStateToProps, { getTeacherResponse })(ResponseTeacher)
