import React, { Component } from 'react';
import { allTeacherResult } from '../../actions/resultTeacher'
import {connect} from 'react-redux'
import '../../App.css';


class ResultTeacher extends Component {
  componentWillMount() {
    this.props.allTeacherResult()
  }

  render() {
    const {allResult} = this.props

    if (!allResult[0]) return null

    return (
      <div>
        <h1>All quizzes</h1>
              {allResult.map(x => {
                return (
                  <div>
                  <h3>
                    {x.title}
                    </h3>
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
