import React, { Component } from 'react'
import './style.less'
import PhoneCodeCheckView from '../../../../components/PhoneCodeCheckView'
import {Button} from 'antd-mobile'

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
        <input type="input" placeholder="请输入手机号码" autoFocus="true" className="action_input"></input>
        <br></br>
        <br></br>
        <label className="alertLabel">验证码</label>
        <br></br>
        <PhoneCodeCheckView></PhoneCodeCheckView>
        <Button  type="primary" disabled className="action_button">下一步</Button>
      </div>
    )
  }
}

export default RegisterInitPhoneCheck