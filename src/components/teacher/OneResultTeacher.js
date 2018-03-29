import * as request from 'superagent'
import { showStudentQuiz } from '../../actions/result'
import React, { Component } from 'react';
import {connect} from 'react-redux'

class OneResultTeacher extends Component {

  render() {
    const { quizResult } = this.props

    return (

              <div>
              <h2>Results for class {quizResult.courseId}</h2>
              <h4>Avarage score {quizResult.average}% based on {' '}
              {quizResult.numberOfTakers} responses</h4>
              </div>

            );
          }
        }


export default OneResultTeacher
