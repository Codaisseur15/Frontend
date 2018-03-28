import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import SubmitForm from './SubmitButton'
import {submitForm} from '../actions/submitButton'
import './Questions.css'
import {withRouter} from 'react-router'
import {connect} from 'react-redux'
const quizes = {
    "id": 1,
    "title": "HTML",
    "question": [
        {
          "id": 1,
          "text": "What is HTML?",
          "type": "radio",
            "answer": [
                {
                    "correct": true,
                    "id": 1,
                    "text": "html"
                },
                {
                    "correct": false,
                    "id": 2,
                    "text": "HTML"
                },
                {
                    "correct": false,
                    "id": 3,
                    "text": "HyperText"
                },
                {
                    "correct": false,
                    "id": 4,
                    "text": "Cascading Style"
                },
                {
                    "correct": true,
                    "id": 17,
                    "text": "html"
                },
                {
                    "correct": false,
                    "id": 18,
                    "text": "HTML"
                },
                {
                    "correct": false,
                    "id": 19,
                    "text": "HyperText"
                },
                {
                    "correct": false,
                    "id": 20,
                    "text": "Cascading Style"
                }
            ]
        },
        {
          "id": 2,
          "text": "What is CSS?",
          "type": "radio",
            "answer": [
                {
                    "correct": true,
                    "id": 5,
                    "text": "Cascading Style Sheet"
                },
                {
                    "correct": false,
                    "id": 6,
                    "text": "html"
                },
                {
                    "correct": false,
                    "id": 7,
                    "text": "i dont know"
                },
                {
                    "correct": false,
                    "id": 8,
                    "text": "booring"
                },
                {
                    "correct": true,
                    "id": 21,
                    "text": "Cascading Style Sheet"
                },
                {
                    "correct": false,
                    "id": 22,
                    "text": "html"
                },
                {
                    "correct": false,
                    "id": 23,
                    "text": "i dont know"
                },
                {
                    "correct": false,
                    "id": 24,
                    "text": "booring"
                }
            ]
        },
        {
          "id": 3,
          "text": "What is JavaScript?",
          "type": "checkbox",
            "answer": [
                {
                    "correct": true,
                    "id": 9,
                    "text": "JavaScript"
                },
                {
                    "correct": true,
                    "id": 10,
                    "text": "java is an island"
                },
                {
                    "correct": false,
                    "id": 11,
                    "text": "Java"
                },
                {
                    "correct": false,
                    "id": 12,
                    "text": "Php"
                },
                {
                    "correct": true,
                    "id": 25,
                    "text": "JavaScript"
                },
                {
                    "correct": true,
                    "id": 26,
                    "text": "java is an island"
                },
                {
                    "correct": false,
                    "id": 27,
                    "text": "Java"
                },
                {
                    "correct": false,
                    "id": 28,
                    "text": "Php"
                }
            ]
        }
    ]
}
var quizResponse={}


class Questions extends PureComponent {
  state = {courseId: this.props.match.params.courseId}
  static PropTypes = {
      quizes: PropTypes.objectOf(PropTypes.shape({
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
  		e.preventDefault()
      this.setState({...this.state,quizId:quizes.id})
  		this.props.submitForm({...this.state,quizId:quizes.id})
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

  render() {
    quizes.question.map(q=>
      {console.log(q.id);
      quizResponse[q.id]=[]
      return 0}
    )
    console.log(quizResponse, this.props.match.params.courseId);

    //const { onSubmit } = this.props

    return (
      <div>
      <ol>
        <form onSubmit={this.handleSubmit}>
        {quizes.question.map(q =>
          <li>
          <h3>{q.text}</h3>
            {q.answer.map(a =>
              <div>
                <label>
                <input name={q.id} type={q.type} value={a.id} onChange={this.handleChange}/>
                <span>{a.text}</span>
                </label>
              </div>
            )}
          </li>)}

          <button type="submit">Submit</button>
        </form>
      </ol>
      </div>
    )
  }
}
//export default Questions
export default withRouter(
  connect(null,{submitForm})(Questions)
)
