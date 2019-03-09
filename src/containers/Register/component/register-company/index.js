import React, { Component } from 'react'
import { Button, WhiteSpace, WingBlank } from 'antd-mobile';
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
        <div className='container'>
          <Button type="primary">注册</Button>
          <WhiteSpace></WhiteSpace>
          <Button type="primary">登录</Button>
        </div>
      </div>
    )
  }
}

export default RegisterComanpay