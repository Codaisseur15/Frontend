import * as request from 'superagent'
import { showStudentQuiz } from '../../actions/result'
import React, { Component } from 'react';
import {connect} from 'react-redux'

class OneResultTeacher extends Component {

  render() {
    const { quizResult } = this.props


    return (
      <div>
        <header className="App-header">
            </header>
              <div>
              <div>
              <h2>Results for class</h2>
              <p>Quiz ID {quizResult.quizId}</p>
              <p>Class # {quizResult.courseId}</p>
              <p>Avarage score {quizResult.average}/Max number of score</p>
              <p># of students {quizResult.numberOfTakers}/Number of students in class</p>
              </div>

                </div>
                </div>
              );
            }
          }


export default OneResultTeacher
