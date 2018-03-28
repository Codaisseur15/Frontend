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
      <div>
        <header className="App-header">
          <h1 className="App-title">All quizzes</h1>
            </header>
              <div>

              {allResult.map(x => {
                return (
                  <button
                  onClick={_=>window.location.href=`/teacher/${x.id}`}
                  >
                {x.title}
                  </button>
              )}
              )}
                </div>
                </div>
              );
            }
          }

const mapStateToProps = state => ({
  allResult: state.allTeacherResult
})

export default connect(mapStateToProps, { allTeacherResult })(ResultTeacher)
