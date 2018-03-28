import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './Questions.css'

const quizes = {
    "id": 1,
    "title": "HTML",
    "questions": [
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
          "type": "checkbox",
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


class Questions extends PureComponent {
  static PropTypes = {
      quizes: PropTypes.objectOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        questions: PropTypes.arrayOf(PropTypes.shape({
          text: PropTypes.string.isRequired,
          type: PropTypes.string.isRequired,
          answer: PropTypes.arrayOf(PropTypes.shape({
            text: PropTypes.string.isRequired,
            correct: PropTypes.bool.isRequired
          })).isRequired
        })).isRequired
      })).isRequired
    }
    state = {
      edit: 'something'
    }

  render() {

    const { onSubmit } = this.props

    return (
      <div>
      <ol>
        <form onSubmit={ (e)=> {onSubmit}}>
        {quizes.questions.map(q =>
          <li>
          <h3>
            {q.text}
            {<a class="waves-effect waves-light btn">
              <i class="material-icons left">edit</i>
              edit
            </a>}
          </h3>
            {q.answer.map(a =>
              <div>
                <label>
                <input name={q.type} type={q.type} />
                <span><input type='form'/>{a.text}</span>
                </label>
              </div>
            )}
          </li>)}
          <input className = "submit" type="submit" value="Submit" />
        </form>
      </ol>
      </div>
    )
  }
}
export default Questions
