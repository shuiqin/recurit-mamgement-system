import React, { Component } from 'react'
import './style.less'
import PhoneCodeCheckView from '../../../../components/PhoneCodeCheckView'

class RegisterInitPhoneCheck extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.init()
  }

  getValue(value) {
    console.log(value)
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
        <label className="alertLabel">手机号码</label>
        <br></br>
        <button type="input" placeholder="请输入手机号码" autoFocus="true" className="action_input"></button>
        <br></br>
        <br></br>
        <label className="alertLabel">验证码</label>
        <br></br>
       
      </div>
    )
  }
}

export default RegisterInitPhoneCheck