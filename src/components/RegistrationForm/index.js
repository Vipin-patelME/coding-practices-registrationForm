// Write your JS code here
import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {isfirstname: false, islastname: false, loginsuccess: false}

  onSuccessLogin = () => (
    <div className="thankyou-cont">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="successlogo"
      />
      <p>Submitted successfully</p>
      <button type="button" onClick={this.onDirectToForm}>
        send another response
      </button>
    </div>
  )

  onDirectToForm = () => {
    this.setState({loginsuccess: false})
  }

  onFailLogin = () => {
    const {isfirstname, islastname} = this.state
    return (
      <div className="main-cont">
        <h1>Registration</h1>
        <form className="form-cont" onSubmit={this.onFormSubmit}>
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

  onEmptyData = () => {
    this.setState({isfirstname: true, islastname: true})
  }

  onFormSubmit = event => {
    const {isfirstname, islastname} = this.state
    event.preventDefault()
    this.onNameBlurEvent()
    this.onLastNameBlur()

    if (isfirstname === false && islastname === false) {
      this.onEmptyData()
    } else {
      this.setState({loginsuccess: true})
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
    const {loginsuccess} = this.state
    return (
      <div>{loginsuccess ? this.onSuccessLogin() : this.onFailLogin()}</div>
    )
  }
}

export default RegistrationForm
