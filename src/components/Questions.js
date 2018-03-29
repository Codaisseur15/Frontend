import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import SubmitForm from './SubmitButton'
import {submitForm,showQuiz} from '../actions/submitButton'
import './Questions.css'
import {withRouter} from 'react-router'
import {connect} from 'react-redux'

var quizResponse={}

class Questions extends PureComponent {
  state = {courseId: this.props.match.params.courseId,
          quizId: this.props.match.params.quizId,
          quizResponse: {}}
  static propTypes = {
      quiz: PropTypes.objectOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        question: PropTypes.arrayOf(PropTypes.shape({
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
  		this.props.submitForm(this.state)
      console.log(this.state);
  	}

  	handleChange = (event) => {
      const {name, value, type, checked} = event.target
      const {quizResponse} = this.state
      let answers

      console.log(type)

      if (type === 'radio'){
        answers = [+value]
      } else {
        if (!quizResponse[name]) {
          answers = [{ id: value, checked }]
        } else {
          quizResponse[name].map(a => {
            if(a.id == +value) return { id: value, checked: false }
            return a
          })
          answers = quizResponse[name]
            .concat({ id: value, checked })
        }
      }

      console.log(!quizResponse[name])
      console.log(quizResponse[name])

      this.setState({
        [name]: checked,
        quizResponse: {
          ...quizResponse,
          [name]: answers
        }
      })

      console.log(this.state);
    }

    // state = {}
    //
    // handleChange = (event, answerId) => {
    //   const {name} = event.target
    //   if (this.state[name]) {
    //     this.setState({
    //       [name]: [...this.state[name], answerId]
    //     })
    //   } else {
    //     this.setState({
    //       [name]: [answerId]
    //     })
    //   }
    // }

    // handleSubmit = (e) => {
  	// 	e.preventDefault()
  	// 	console.log(this.state)
  	// }


  componentWillMount() {
    //console.log('==================');
    //console.log(this.props.match.params.quizId);
    //console.log('---------------');

    this.props.showQuiz(this.props.match.params.quizId)
  }
  render() {
  //  console.log('==================');
  //  console.log(this.props.quiz.question);
  //  console.log('---------------');


    //console.log(quizResponse, this.props.match.params.courseId);

    //const { onSubmit } = this.props
  if (this.props.quiz.question) {
    return (
      <div>
      <ol>
        <form onSubmit={this.handleSubmit}>
        {this.props.quiz.question.map(q =>
          <li>
          <h3>{q.text}</h3>
            {q.answer.map(a =>
              <div>
                <label>
                <input name={q.id} type={q.type} checked={this.state[a.id]} value={a.id} onChange={this.handleChange}/>
                <span>{a.text}</span>
                </label>
              </div>
            )}
          </li>)}


          <button type="submit">Submit</button>
          <button onClick={e => {
            e.preventDefault()
            console.log(this.state)
          }}>testbutton</button>
        </form>
      </ol>
      </div>
    )
  }
  return null
  }
}

const mapStateToProps = ({showQuiz}) => {
  return {
    quiz: showQuiz
  }
}
//export default Questions
export default withRouter(
  connect(mapStateToProps,{submitForm, showQuiz})(Questions)
)
