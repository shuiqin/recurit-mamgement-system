import React, { Component } from 'react'
import './style.less'


class RegisterPSWSetting extends Component {
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
        <label className="alertLabel">企业名称</label>
        <br></br>
        
        <br></br>
        <br></br>
        <label className="alertLabel">个人用户</label>
        <br></br>
        <button type="button" className="action_button">点击进入</button>
      </div>
    )
  }
}

export default RegisterPSWSetting