import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import NavBar from './components/NavBar'

import QuestionCreator from './components/QuestionCreator'
//Pages
import LoginPage from './containers/LoginPage'
import LogoutPage from './containers/LogoutPage'
import Quiz from './containers/Quiz'
import SubmitForm  from './components/SubmitButton'
import QuizList from './components/QuizList'
import StudentPage from './containers/StudentPage'
import QuizCreator from './containers/QuizCreatorPage'
import ResultTeacher from './components/teacher/ResultTeacher'
import QuizResultTeacher from './components/teacher/QuizResultTeacher'
import ResponseTeacher from './components/teacher/ResponseTeacher'


import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <NavBar/>
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/logout" component={LogoutPage} />
          <Route exact path="/quizlist" component={QuizList} />
          <Route exact path="/Quizcreator" component={QuizCreator} />
          <Route exact path="/" render={ () => <Redirect to="/login" /> } />
          <Route exact path="/quiz/course=:courseId" component={Quiz} />
          <Route exact path="/responses" component={SubmitForm} />
          <Route exact path="/student/result" component={StudentPage} />
          <Route exact path="/teacher/main" component={ResultTeacher} />
          <Route exact path="/teacher/:quizId" component={QuizResultTeacher} />
          <Route exact path="/teacher/1/14" component={ResponseTeacher} />
          <Route exact path="/" render={ () => <Redirect to="/quizList" /> } />
        </div>
      </Router>
    )
  }
}

export default App
