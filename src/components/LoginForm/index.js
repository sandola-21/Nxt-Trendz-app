// Write your JS code here

import {Component} from 'react'
import './index.css'

class LoginFrom extends Component {
  state = {username: '', password: '', showErrorMessage: false, errorMsg: ''}

  onSubmitFailure = errorMsg => {
    this.setState({
      showErrorMessage: true,
      errorMsg,
    })
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onSubmitForm = async event => {
    event.preventDefault()

    const {username, password} = this.state
    const userDetails = {username, password}

    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      this.onSubmitSuccess()
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onChangePassword = event => {
    const {target} = event
    const {value} = target

    this.setState({password: value})
  }

  renderPassowrdField = () => {
    const {password} = this.state
    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={this.onChangePassword}
          placeholder="Password"
          className="password-input-field"
        />
      </>
    )
  }

  onChangeUserName = event => {
    const {target} = event
    const {value} = target

    this.setState({username: value})
  }

  renderUsernameField = () => {
    const {username} = this.state
    return (
      <>
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={this.onChangeUserName}
          placeholder="Username"
          className="username-input-field"
        />
      </>
    )
  }

  render() {
    const {showErrorMessage, errorMsg} = this.state
    return (
      <div className="login-form-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
          className="login-website-logo-mobile-img"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="login-image"
        />
        <form className="form-container" onSubmit={this.onSubmitForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="login-website-logo-desktop-img"
          />
          <div className="input-container">{this.renderUsernameField()}</div>
          <div className="input-container"> {this.renderPassowrdField()} </div>
          <button type="submit" className="login-button">
            Login
          </button>
          {showErrorMessage && <p className="error-message"> *{errorMsg} </p>}
        </form>
      </div>
    )
  }
}

export default LoginFrom
