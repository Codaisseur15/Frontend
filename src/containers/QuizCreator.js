import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

//Components
import QuestionCreatorList from '../components/QuestionCreatorList'

class QuizCreator extends PureComponent {

	render() {
		return (
			<div>
				<h1>QuizCreator</h1>
        <form>
        <div>
          <label htmlFor="Title">Title:</label>
          <input name="Title" id="Title"
          onChange={console.log(this.value)}/>
        </div>
        </form>
        <QuestionCreatorList/>
        <button>Add question</button>
			</div>
		)
	}
}

const mapStateToProps = function (state) {
	return {
		currentUser: state.currentUser,
    error: state.login.error
	}
}

export default connect(mapStateToProps)(QuizCreator)
