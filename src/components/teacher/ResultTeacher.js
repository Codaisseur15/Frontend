import React, { Component } from 'react';
import { showTeacherResult } from '../../actions/resultTeacher'
import {connect} from 'react-redux'
import OneResultTeacher from './OneResultTeacher'



class ResultTeacher extends Component {

  renderResults = (quiz) => {
    return (
      <div>
      <OneResultTeacher
      result_id={quiz.result_id}
      />
      </div>
    )
  }

  render() {
    const {quizResult} = this.props

    return (
      <div>
        <header className="App-header">
          <h1 className="App-title">Quiz results</h1>
            </header>
              <div>
                {quizResult.map(quiz => this.renderResults(quiz))}
                </div>
                </div>
              );
            }
          }

const mapStateToProps = state => ({
  quizResult: state.quizResult
})

export default connect(mapStateToProps, { showTeacherResult })(ResultTeacher)
