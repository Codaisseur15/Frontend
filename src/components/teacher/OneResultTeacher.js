import React, { Component } from 'react';
import {connect} from 'react-redux'

class OneResultTeacher extends Component {


  render() {
    const { quizResult } = this.props
    const quiz = quizResult.find(quiz => quiz.result_id === this.props.result_id)

    return (
      <div>
        <header className="App-header">
          <h1 className="App-title">Quiz results</h1>
            </header>
              <div>
              <div>
              <h2>Results</h2>
              <p>Quiz ID {quiz.id}</p>
              <p>Class # {quiz.course_id}</p>
              <p>Avarage score {quiz.av_score}/Max number of score</p>
              <p># of students {quiz.number_of_students}/Number of students in class</p>
              </div>

                </div>
                </div>
              );
            }
          }


const mapStateToProps = state => ({
    quizResult: state.quizResult

     })

export default connect(mapStateToProps)(OneResultTeacher)
