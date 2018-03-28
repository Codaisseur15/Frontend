import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

//Components


class QuestionCreator extends PureComponent {
  static propTypes = {
    QuestionId : PropTypes.number.isRequired,
    QuestionType: PropTypes.string.isRequired,

  }
  state = {
    AnwserAmount :[0,1],
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
    const {QuestionType, QuestionId} = this.props
    if(QuestionType === 'multiple choice') {
      return(x.map((Anwser, key) => {
        if(Anwser !== 0){return(
            <tr key={key}>
                <th><input type='checkbox'/>
                <input type='form' className='question-form'/></th>
                <th><input type='checkbox'/></th>
            </tr>
        )}
      }))
    }
    if(QuestionType === 'single choice') {
      return(x.map((Anwser, key) => {
        if(Anwser !== 0){return(
            <tr key={key}>
              <th><input type="radio" name={QuestionId}/>
              <input type='form' className='question-form'/></th>
              <th><input type="radio" name={`correct${QuestionId}`}/></th>
            </tr>
        )}
      }))
    }
  }

	render() {
		return (
			<div className='quiz-container'>
        <table className='question-table'>
          <thead>
            <tr>
              <th>Anwser</th>
              <th>Correct?</th>
            </tr>
          </thead>
          <tbody>
          {this.renderTable(this.state.AnwserAmount)}
          </tbody>
        </table>
          <div className='anwser-amount'>
            <h5>Amount of Anwsers</h5>
            <button className='anwser-amount-button' onClick={_ => this.handleUpClick()}>+</button>
            <p>{this.state.AnwserAmount.length-1}</p>
            <button className='anwser-amount-button' onClick={_ => this.handleDownClick()}>-</button>
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

export default connect(mapStateToProps)(QuestionCreator)
