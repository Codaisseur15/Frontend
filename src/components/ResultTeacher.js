import React, { Component } from 'react';
import { showTeacherResult } from '../actions/resultTeacher'
import {connect} from 'react-redux'



class ResultTeacher extends Component {

  renderResults = (quiz) => {
    return (
      <div>
      <h2>Results</h2>
      <p>Quiz ID {quiz.id}</p>
      <p>Class # {quiz.course_id}</p>
      <p>Avarage score {quiz.av_score}/Max number of score</p>
      <p># of students {quiz.number_of_students}/Number of students in class</p>
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
