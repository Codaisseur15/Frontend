import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

//Pages
import LoginPage from './containers/LoginPage'
import Question from './containers/Question'
import SubmitForm  from './components/submitButton'
import ResultStudent from './components/ResultStudent'
import QuizCreator from './containers/QuizCreator'
import QuizList from './components/QuizList'

//Styling
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/Quizcreator" component={QuizCreator} />
          <Route exact path="/" render={ () => <Redirect to="/login" /> } />
          <Route exact path="/question" component={Question} />
          <Route exact path="/submit" component={SubmitForm} />
          <Route exact path="/student_quiz_result" component={ResultStudent} />
          <Route exact path="/quizList" component={QuizList} />
          <Route exact path="/" render={ () => <Redirect to="/quizList" /> } />
        </div>
      </Router>
    )
  }
}
export default App
