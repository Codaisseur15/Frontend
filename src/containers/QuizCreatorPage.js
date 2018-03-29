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
        let tempType = 0
        if (this.state.QuestionType[question] === 'multiple choice'){
        tempType = 'mpC'}
        if (this.state.QuestionType[question] === 'single choice'){
        tempType = 'sC'}
        return(
        <li key={key} class='row collection-item'>
          <div class='container'>
            <input type='text' class='col s12 offset-s1' placeholder='Question' id='Question'/>
            <div class='container'>
            <div class='row col s8'>
              <span class='col s1'>{this.state.QuestionType[question]}</span>
              <div class='switch'>
                <label>
                  <input type="checkbox" onClick={_ => this.stateCheck(question)}/>
                  <span class="lever"></span>
                </label>
              </div>
              </div>
              </div>
            </div>
          <div class='container col s12'>
            <QuestionCreator QuestionId={question} QuestionType={this.state.QuestionType[question]}/>
          </div>
        </li>
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
			<div class='container center-align'>
				<h1>QuizCreator</h1>
        <div class='row valign-wrapper left-align'>
          <div class='input-field col s12'>
            <label for="QuizTitle">Quiz title</label>
            <input type='text' class='col s8' id='QuizTitle'/>
          </div>
          <div class='row valign-wrapper left-align'>
            <p class='col s12'>Amount of Questions:</p>
            <div class='row left-align col s11'>
              <a class='btn-floating waves-effect waves-light hoverable' onClick={_ => this.handleUpClick()}><i class="material-icons">add</i></a>
              <div class='col s1 center-align'>
              </div>
              <a class='btn-floating waves-effect waves-light hoverable' onClick={_ => this.handleDownClick()}><i class="material-icons">remove</i></a>
            </div>
          </div>
        </div>
        <ul class="collection col s12">
          <div>
            {this.renderTable(this.state.QuestionAmount)}
          </div>
        </ul>
        <button class='btn waves-effect waves-light hoverable'>Submit Quiz</button>
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
