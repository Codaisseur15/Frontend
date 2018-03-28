import React, { Component } from 'react';
import { getTeacherResponse, showTeacherResult,
  showTeacherQuiz } from '../../actions/resultTeacher'
import {connect} from 'react-redux'
import OneResultTeacher from './OneResultTeacher'



class ResponseTeacher extends Component {

  componentWillMount() {
    this.props.showTeacherQuiz()
  }
  render() {

    const {teacherQuiz} = this.props
        if (!teacherQuiz[0]) return null

    return (
      <div>

      {teacherQuiz.map(x => {
        return (
          <OneResultTeacher
            quizResult={x}/>
        )
      }
      )}

                <p/>
        </div>
              );
            }
          }

const mapStateToProps = state => ({

  teacherQuiz: state.teacherQuiz
})

export default connect(mapStateToProps, {
    showTeacherQuiz
})(ResponseTeacher)
