import React, { Component } from 'react';
import { teacherResultList } from '../lib/teacherResultList'
import { showTeacherResult } from '../actions/resultTeacher'
import {connect} from 'react-redux'



class QuizResultTeacher extends Component {
  render() {
let {quizResult} = this.props

    return (
      <div>
        <header className="App-header">
          <h1 className="App-title">Quiz results</h1>
        </header>

          <h1>Quiz Name {quizResult.name}</h1>
            <h1>Av Score {quizResult.results.avScore}</h1>


      </div>
    );
  }
}

const mapStateToProps = state => ({
  quizResult: state.quizResult.find(quiz => quiz.id ===1)
})

export default connect(mapStateToProps, { showTeacherResult })(QuizResultTeacher)
