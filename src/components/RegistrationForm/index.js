// Write your JS code here
import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {isfirstname: false, islastname: false}

  onFormSubmit = event => {
    const {isfirstname, islastname} = this.state
    event.preventDefault()
    this.onNameBlurEvent()
    this.onLastNameBlur()

    if (isfirstname === false || islastname === false) {
      this.setState({isfirstname: true, islastname: true})
    }
  }

  onNameBlurEvent = event => {
    if (event.target.value === '') {
      this.setState({isfirstname: true})
    }
  }

  onLastNameBlur = event => {
    if (event.target.value === '') {
      this.setState({islastname: true})
    }
  }

  render() {
    const {isfirstname, islastname} = this.state
    return (
      <div className="main-cont">
        <h1>Registration</h1>
        <form onSubmit={this.onFormSubmit}>
          <label htmlFor="nameInput">FIRST NAME</label>
          <input type="text" id="nameInput" onBlur={this.onNameBlurEvent} />
          {isfirstname ? <p>*Required</p> : ''}
          <label htmlFor="lastName">LAST NAME</label>
          <input type="text" id="lastName" onBlur={this.onLastNameBlur} />
          {islastname ? <p>*Requirted</p> : ''}
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}
export default RegistrationForm
