import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './Questions.css'


class Questions extends PureComponent {
  static PropTypes = {
      quizes: PropTypes.objectOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        questions: PropTypes.arrayOf(PropTypes.shape({
          id: PropTypes.number.isRequired,
          text: PropTypes.string.isRequired,
          type: PropTypes.string.isRequired,
          answer: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            correct: PropTypes.bool.isRequired
          })).isRequired
        })).isRequired
      })).isRequired
    }
    state = {
      editmode: false,
      radiobutton: 'checked',
    }

  componentWillMount(){
  }

  switchButton = () => {
    const {radiobutton} = this.state
    if (radiobutton === 'checked') {
      this.setState({
        radiobutton: ''
      })
    }
    else {
      this.setState({
        radiobutton: 'checked'
      })
    }
  }

  setQuestionEditState = () => {
    const {editmode} = this.state
    console.log(editmode)
    if(editmode === false) {
      this.setState({
        editmode: true
      })
    }
    if(editmode === true) {
      this.setState({
        editmode: false
      })
    }
    console.log('test')
    this.forceUpdate()
  }

  render() {

    const {onSubmit, quizes } = this.props
    const {editmode} = this.state

    return (
      <div>
        <div class="row">
          {<a class="waves-effect waves-light btn col s2 hoverable"
            onClick={_ => this.setQuestionEditState()}>
            <i class="material-icons left">edit</i>
            edit
          </a>}
        </div>
      <div class="row">
      {!editmode &&
          <form onSubmit={ (e)=> {onSubmit}}>
            {quizes.questions.map((q, key) =>
            <ul class='collection with-header col s8 offset-s2'>
              <li class='collection-header left-align'>
                <div class='row'>
                  <h3>
                    {q.id}.
                  </h3>
                  <h3>
                    {q.text}
                  </h3>
                </div>
              </li>
              {q.answer.map((a, key)=>
                <li class='collection-item'>
                  <div key={key} class="row">
                    <label>
                      <input name={q.id} type={q.type}/>
                      <span>{a.text}</span>
                    </label>
                  </div>
                </li>
              )}
            </ul>)}
          </form>
        }
        {editmode &&
          <form onSubmit={ (e)=> {onSubmit}}>
            {quizes.questions.map((q, key) =>
            <ul class='collection with-header col s8 offset-s2'>
              <li class='collection-item'>
              <label>
              <div class='container col s1'>
              <div class='switch'>
                <label class='row left-align'>
                  <span class="lever">{q.type}</span>
                  <input type="checkbox" onClick={_ => this.stateCheck(q)}/>
                </label>
              </div>
              </div>
              </label>
              </li>
              <li class='collection-header left-align'>
                <div class='row'>
                  <h3 class=''>
                    {q.id}.
                  </h3>
                  <h3 class='col s8 left-align pull-s2'>
                  <input placeholder={q.text} id="questionTitle" type="text" class="validate"/>
                  </h3>
                </div>
                </li>
                {q.answer.map((a, key)=>
                  <li class='collection-item'>
                    <div key={key} class="row">
                    <label>
                      <input name={q.id} type={q.type}/>
                      <span><input placeholder={a.text} id="questionTitle" type="text" class="validate"/></span>
                    </label>
                    </div>
                  </li>
                )}
              </ul>
              )}
          </form>}
        </div>
      </div>
    )
  }
}

export default Questions
