import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import SubmitForm  from './components/submitButton'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/submit" component={SubmitForm} />
        </div>
      </Router>
    );
  }
}

export default App;
