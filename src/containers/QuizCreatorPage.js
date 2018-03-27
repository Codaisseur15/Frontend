import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

//Components
import QuestionCreator from '../components/QuestionCreator'

class QuizCreator extends PureComponent {
  static propTypes = {

  }
  state = {
    QuestionAmount :[0,1],
    QuestionType: ['multiple choice']
  }

  handleUpClick = () => {
    if(this.state.QuestionAmount.length < 2) {
      this.setState({
      QuestionAmount: [0,1],
      QuestionType: this.state.QuestionType.concat(['multiple choice'])
      })
      console.log(this.state.QuestionType)
    }
    this.setState({
      QuestionAmount: this.state.QuestionAmount.concat(this.state.QuestionAmount.slice(-1)[0]+1),
      QuestionType: this.state.QuestionType.concat(['multiple choice']),
    })
    console.log(Object.values(this.state.QuestionType).length)
    console.log(this.state.QuestionType)
  }

  handleDownClick = () => {
    if (this.state.QuestionAmount.length !== 2) {
      this.setState({
      QuestionAmount: this.state.QuestionAmount.slice(0,this.state.QuestionAmount.length-1),
      QuestionType: this.state.QuestionType.slice(0,this.state.QuestionType.length-1)
      })
    }
    console.log(Object.values(this.state.QuestionType).length)
    console.log(this.state.QuestionType)
  }

  renderTable = (x) => {
    return(x.map((Question, key) => {
      if(Question !== 0){
        let question = Question - 1
        return(
        <tr key={key}>
          <th>{question}</th>
          <th>
            <input type='form' className='question-form'/>
            <div className='row'>
              <h5 className= 'h5y'>{this.state.QuestionType[question]}</h5>
              <label className="switch" key={key}>
                <input type="checkbox" onClick={_ => this.stateCheck(question)}/>
                <span className="slider"></span>
              </label>
            </div>
          </th>
          <th><QuestionCreator QuestionId={question} QuestionType={this.state.QuestionType[question]}/></th>
        </tr>
      )}
    }))
  }

  stateCheck = (questionId) => {
    let currentState = this.state.QuestionType
    switch (this.state.QuestionType[questionId]) {
      case 'multiple choice':
        currentState.splice(questionId ,1, 'single choice')
        this.setState({
          QuestionType: currentState
        })
        this.forceUpdate()
        break;
      case 'single choice':
        currentState.splice(questionId ,1, 'multiple choice')
        this.setState({
          QuestionType: currentState
        })
        this.forceUpdate()
        break;
      default:

    }
  }

	render() {
		return (
			<div className='quiz-container'>
				<h1>QuizCreator</h1>
        <div className='quiz-name-container'>
        <h3>Quiz title:</h3>
        <input type='form' className='quiz-name'/>
        </div>
        <table className='quiz-table'>
        <tbody>
          <tr>
            <th>Id</th>
            <th>Question</th>
            <th>Anwsers</th>
          </tr>
          {this.renderTable(this.state.QuestionAmount)}
        </tbody>
        </table>
        <div className='quiz-right-fixed'>
          <h5>Amount of Questions</h5>
            <div className='anwser-amount'>
              <button className='question-amount-button' onClick={_ => this.handleUpClick()}>+</button>
              <div className='question-amount-container'>
              <p className='question-amount'>{this.state.QuestionAmount.length-1}</p>
              </div>
              <button className='question-amount-button' onClick={_ => this.handleDownClick()}>-</button>
            </div>
          <button>Submit Quiz</button>
        </div>
			</div>
		)
	}
}

const mapStateToProps = function (state) {
	return {
		currentUser: state.currentUser,
    //error: state.login.error
	}
}

export default connect(mapStateToProps)(QuizCreator)
