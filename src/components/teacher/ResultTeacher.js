import React, { Component } from 'react';
import { allTeacherResult } from '../../actions/resultTeacher'
import {connect} from 'react-redux'


class ResultTeacher extends Component {
  componentWillMount() {
    this.props.allTeacherResult()
  }

  render() {
    const {allResult} = this.props

    if (!allResult[0]) return null

    return (
      <div class='container center-align'>
        <h1>All quizzes</h1>


              {allResult.map(x => {
                return (
                  <div>
                  <h1>
                    {x.title}
                    </h1>
                  <button class='btn waves-effect waves-light hoverable'
                  onClick={_=>window.location.href=`/teacher/${x.id}`}
                  >
                  See results
                  </button>
                  </div>
              )}
              )}

                </div>
              );
            }
          }

const mapStateToProps = state => ({
  allResult: state.allTeacherResult
})

export default connect(mapStateToProps, { allTeacherResult })(ResultTeacher)
