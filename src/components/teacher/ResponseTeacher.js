import React, { Component } from 'react';
import { getTeacherResponse } from '../../actions/resultTeacher'
import {connect} from 'react-redux'



class ResponseTeacher extends Component {

renderQuizresponses = (questionId, variantId) => {
const {quizResponse} = this.props
return quizResponse.filter(x => x.quizResponse[questionId].includes(variantId)).length
}

  render() {

    const {quizResult} = this.props

    return (
      <div>
        <header className="App-header">
          <h1 className="App-title">Quiz results</h1>
            </header>
              <div>

                <div>
                <h2>Results</h2>
                <p>Quiz ID {quizResult.id}</p>
                <p>Class # {quizResult.course_id}</p>
                <p>Answers: {quizResult.number_of_students}/</p>
                <p>Score: {quizResult.av_score}</p>
                </div>
                Question 1:
                Variant 1
                {this.renderQuizresponses(1,2)}
                <p/>

                </div>
                </div>
              );
            }
          }

const mapStateToProps = state => ({
  quizResponse: state.quizResponse,
  quizResult: state.quizResult
})

export default connect(mapStateToProps, { getTeacherResponse })(ResponseTeacher)
