import React, { Component } from 'react';
import { teacherResultList } from '../lib/teacherResultList'
import { showTeacherResult } from '../actions/resultTeacher'
import QuizResultTeacher from './QuizResultTeacher'
import {connect} from 'react-redux'



class ResultTeacher extends Component {
  render() {
const {quizResult} = this.props

    return (
      <div>
        <header className="App-header">
          <h1 className="App-title">Quiz results</h1>
        </header>

        <h1>Students results</h1>
        <QuizResultTeacher />


      </div>
    );
  }
}

const mapStateToProps = state => ({
  quizResult: state.quizResult
})

export default connect(mapStateToProps, { showTeacherResult })(ResultTeacher)
