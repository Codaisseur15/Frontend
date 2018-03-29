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
            <li key={key} class='collection-item row'>
              <input type='text' placeholder='Anwser' class='col s7 offset-s1'/>
              <label>
                <input type="checkbox" name={`correct${QuestionId}`}/>
                <span>correct</span>
              </label>
            </li>
        )}
      }))
    }
    if(QuestionType === 'single choice') {
      return(x.map((Anwser, key) => {
        if(Anwser !== 0){return(
            <li key={key} class='collection-item row'>
              <input type='text' placeholder='Anwser' class='col s7 offset-s1'/>
              <label>
                <input type="radio" name={`correct${QuestionId}`}/>
                <span>correct</span>
              </label>
            </li>
        )}
      }))
    }
  }

	render() {
		return (
			<div class='container col s12 offset-s1'>
        <div class='row'>
          <ul class='collection'>
            {this.renderTable(this.state.AnwserAmount)}
          </ul>
          <div class='container col s1'>
            <a class='btn-floating waves-effect waves-light hoverable' onClick={_ => this.handleUpClick()}><i class="material-icons">add</i></a>
            <div class='col s1 center-align'>
            </div>
            <a class='btn-floating waves-effect waves-light hoverable' onClick={_ => this.handleDownClick()}><i class="material-icons">remove</i></a>
          </div>
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
