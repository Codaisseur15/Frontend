import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import logo from './logo.svg';
import ResultStudent from './components/ResultStudent'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/student_quiz_result" component={ResultStudent} />
        </div>
      </Router>
    );
  }
}

export default App;
