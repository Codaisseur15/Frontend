import React, {PureComponent} from 'react'

export default class SubmitForm extends PureComponent {
    render() {
      const { onSubmit } = this.props

            return (
              <form onSubmit={ (e)=> {onSubmit}  }>
                  <button className = "submit" type="submit">Submit</button>
              </form>
            )
    }
}
