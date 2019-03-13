import React, { Component } from 'react'
import './style.less'


class RegisterComanpay extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.init()
  }

  init() {

  }

  next = () => {
    this.props.router.push({
      pathname: '/login', //TODO
      query: {}
    })
  }

  componentDidMount() {
    this.backHandler = () => {
      this.props.router.goBack()
    }
  }

  render() {
    return (
      <div className="login_register_vertical_center">
        <button type="button" className="action_button">登录</button>
        <br></br>
        <br></br>
        <button type="button" className="action_button">注册</button>
      </div>
    )
  }
}

export default RegisterComanpay