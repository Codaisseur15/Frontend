import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import ResultTeacher from './components/ResultTeacher'
import QuizResultTeacher from './components/QuizResultTeacher'


//Pages
import LoginPage from './containers/LoginPage'
import SubmitForm  from './components/submitButton'
import ResultStudent from './components/ResultStudent'

//Styling
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/" render={ () => <Redirect to="/login" /> } />
          <Route exact path="/submit" component={SubmitForm} />
          <Route exact path="/student_quiz_result" component={ResultStudent} />
          <Route exact path="/teacher/quiz" component={ResultTeacher} />
          <Route exact path="/teacher/quiz/id" component={QuizResultTeacher} />


        </div>
      </Router>
    )
  }
}
export default App
