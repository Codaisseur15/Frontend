import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

//Pages
import LoginPage from './containers/LoginPage'
import Question from './containers/Question'

//Styling
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/" render={ () => <Redirect to="/login" /> } />
          <Route exact path="/question" component={Question} />
        </div>
      </Router>
    )
  }
}
export default App
