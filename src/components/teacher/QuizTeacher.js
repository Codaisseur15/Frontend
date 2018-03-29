import React, { Component } from 'react';
import { showTeacherQuiz } from '../../actions/resultTeacher'
import {connect} from 'react-redux'
import OneResultTeacher from './OneResultTeacher'
import {withRouter} from 'react-router'



class QuizTeacher extends Component {

  componentWillMount() {
      this.props.showTeacherQuiz(this.props.match.params.quizId)
  }

  render() {
    const {teacherQuiz} = this.props
        if (!teacherQuiz) return null

    return (
      <div>
      {teacherQuiz.map(x => {
        return (
          <div>
          <OneResultTeacher
            quizResult={x}/>
            <button class='btn waves-effect waves-light hoverable'
            onClick={
              _=>window.location
              .href=`/teacher/${x.quizId}/${x.courseId}`
            }>
            View answers
            </button>
          </div>)
      }
      )}

        </div>
              );
            }
          }

const mapStateToProps = state => ({
  teacherQuiz: state.teacherQuiz
})

export default withRouter(
  connect(mapStateToProps, {
    showTeacherQuiz
})
(QuizTeacher)
)
