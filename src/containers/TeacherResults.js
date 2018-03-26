import React, { Component } from 'react';
import teacherResultList from '../lib/teacherResultList'


class teacherList extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <h1 className="App-title">Quiz results</h1>
        </header>
        <p className="App-intro">
          <h1>{teacherResultList[0].name}</h1>
        </p>
      </div>
    );
  }
}

export default teacherList;
