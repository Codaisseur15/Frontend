import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import SubmitForm from './SubmitButton'
import {submitForm} from '../actions/submitButton'
import {withRouter} from 'react-router'
import {connect} from 'react-redux'
import './Questions.css'

var quizResponse={}


class Questions extends PureComponent {
  state = {courseId: this.props.match.params.courseId}
  static PropTypes = {
      quiz: PropTypes.objectOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        questions: PropTypes.arrayOf(PropTypes.shape({
          id: PropTypes.number.isRequired,
          text: PropTypes.string.isRequired,
          type: PropTypes.string.isRequired,
          answer: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            correct: PropTypes.bool.isRequired
          })).isRequired
        })).isRequired
      })).isRequired,
      //studentId: PropTypes.number
    }

    handleSubmit = (e) => {
      const {quiz} = this.props
  		e.preventDefault()
      this.setState({...this.state,quizId:quiz.id})
  		this.props.submitForm({...this.state,quizId:quiz.id})
      console.log(this.state);
  	}

  	handleChange = (event) => {
      const {name, value} = event.target
      console.log(quizResponse);
      quizResponse[name]=quizResponse[name].concat(value)
      this.setState({
      //  [name]: this.state[name].concat([value]),
      //  courseId: this.props,
      //  studentId: this.state.studentId,
        quizResponse

      })

      console.log(this.state);
    }
    state = {
      editmode: false,
      radiobutton: 'checked',
    }

  componentWillMount(){
  }

  switchButton = () => {
    const {radiobutton} = this.state
    if (radiobutton === 'checked') {
      this.setState({
        radiobutton: ''
      })
    }
    else {
      this.setState({
        radiobutton: 'checked'
      })
    }
  }

  setQuestionEditState = () => {
    const {editmode} = this.state
    console.log(editmode)
    if(editmode === false) {
      this.setState({
        editmode: true
      })
    }
    if(editmode === true) {
      this.setState({
        editmode: false
      })
    }
    console.log('test')
    this.forceUpdate()
  }

    state = {}

    handleChange = (event, answerId) => {
      const {name} = event.target
      if (this.state[name]) {
        this.setState({
          [name]: [...this.state[name], answerId]
        })
      } else {
        this.setState({
          [name]: [answerId]
        })
      }
    }

    handleSubmit = (e) => {
  		e.preventDefault()
  		console.log(this.state)
  	}

  render() {
    const {onSubmit, quiz } = this.props
    const {editmode} = this.state

    quiz.questions.map(q=>
      {console.log(q.id);
      quizResponse[q.id]=[]
      return 0}
    )
    console.log(quizResponse, this.props.match.params.courseId);


    return (
      <div>
        <div class="row">
        </div>
      <div class="row">
      {!editmode &&
          <form onSubmit={this.handleSubmit}>
            {quiz.questions.map((q, key) =>
            <ul class='collection with-header col s8 offset-s2'>
              <li class='collection-header left-align'>
                <div class='row'>
                  <h3>
                    {q.id}.
                  </h3>
                  <h3>
                    {q.text}
                  </h3>
                </div>
              </li>
              {q.answer.map((a, key)=>
                <li class='collection-item'>
                  <div key={key} class="row">
                    <label>
                      <input name={q.id} type={q.type} value={a.id} onChange={this.handleChange}/>
                      <span>{a.text}</span>
                    </label>
                  </div>
                </li>
              )}
            </ul>)}
          </form>
        }
        {editmode &&
          <form onSubmit={this.handleSubmit}>
            {quiz.questions.map((q, key) =>
            <ul class='collection with-header col s8 offset-s2'>
              <li class='collection-item'>
              <label>
              <div class='container col s1'>
              <div class='switch'>
                <label class='row left-align'>
                  <span class="lever">{q.type}</span>
                  <input type="checkbox" onClick={_ => this.stateCheck(q)}/>
                </label>
              </div>
              </div>
              </label>
              </li>
              <li class='collection-header left-align'>
                <div class='row'>
                  <h3 class=''>
                    {q.id}.
                  </h3>
                  <h3 class='col s8 left-align pull-s2'>
                  <input placeholder={q.text} id="questionTitle" type="text" class="validate"/>
                  </h3>
                </div>
                </li>
                {q.answer.map((a, key)=>
                  <li class='collection-item'>
                    <div key={key} class="row">
                    <label>
                      <input name={q.id} type={q.type}/>
                      <span><input placeholder={a.text} id="questionTitle" type="text" class="validate"/></span>
                    </label>
                    </div>
                  </li>
                )}
              </ul>
              )}
          </form>}
        </div>
      </div>
    )
  }
}
//export default Questions
export default withRouter(
  connect(null,{submitForm})(Questions)
)
