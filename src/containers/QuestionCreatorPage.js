import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

//Components


class QuestionCreator extends PureComponent {

	render() {
		return (
			<div>
				<h1>QuizCreator</h1>
        <form className='question-form'>
        <div>
          <h2>Question?</h2>
          <textarea name="item3" cols="50" rows="1"></textarea>
        </div>
        </form>
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
