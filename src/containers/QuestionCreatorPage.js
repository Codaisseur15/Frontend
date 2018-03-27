import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

//Components

let AnwserAmount = 3

class QuestionCreator extends PureComponent {
  static propTypes = {

  }
  state = {
    AnwserAmount :[0,1],
    QuestionType :'multiple choice'
  }


  handleUpClick = () => {
    if(this.state.AnwserAmount === []) {
      this.setState({
      AnwserAmount: [0]
      })
    }
    console.log(this.state.AnwserAmount)
    this.setState({
      AnwserAmount: this.state.AnwserAmount.concat(this.state.AnwserAmount.slice(-1)[0]+1)
    })
  }

  handleDownClick = () => {
    if (this.state.AnwserAmount.length !== 2) {
      this.setState({
      AnwserAmount: this.state.AnwserAmount.slice(0,this.state.AnwserAmount.length-1)
      })
    }
  }

  renderTable = (x) => {
    if(this.state.QuestionType === 'multiple choice') {
      return(x.map(Anwser => {
        if(Anwser !== 0){return(
          <tr>
            <th>{Anwser-1}</th>
            <th><input type='checkbox'/>
            <input type='form'/></th>
            <th><input type='checkbox'/></th>
          </tr>
        )}
      }))
    }
    if(this.state.QuestionType === 'single choice') {
      return(x.map(Anwser => {
        if(Anwser !== 0){return(
          <tr>
            <th>{Anwser-1}</th>
            <th><input type="radio" name="group1"/>
            <input type='form'/></th>
            <th><input type="radio" name="group2"/></th>
          </tr>
        )}
      }))
    }
  }

  stateCheck = () => {
    if(this.state.QuestionType === 'multiple choice'){
      this.setState({
        QuestionType: 'single choice'
      })
    }
    if(this.state.QuestionType === 'single choice'){
      this.setState({
        QuestionType: 'multiple choice'
      })
    }
  }

	render() {
    console.log(this.state.AnwserAmount)
		return (
			<div>
				<h1>QuizCreator</h1>
        <form className='question-form'>
          <div>
            <h2>Question?</h2>
            <textarea name="item3" cols="50" rows="1"></textarea>
            <h5>{this.state.QuestionType}</h5>
            <label className="switch">
              <input type="checkbox" onClick={_ => this.stateCheck()}/>
              <span class="slider"></span>
            </label>
          </div>
        </form>
        <h5>Anwsers</h5>
        <table>
          <tr>
            <th>Id</th>
            <th>Anwser</th>
            <th>Correct?</th>
          </tr>
          {this.renderTable(this.state.AnwserAmount)}
        </table>
        <h5>Amount of Anwsers</h5>
          <div className='anwser-amount'>
            <button className='anwser-amount-button' onClick={_ => this.handleUpClick()}>+</button>
            <p>{this.state.AnwserAmount.length-1}</p>
            <button className='anwser-amount-button' onClick={_ => this.handleDownClick()}>-</button>
          </div>
        <br/>
        <button>Submit Question</button>
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

export default connect(mapStateToProps)(QuestionCreator)
