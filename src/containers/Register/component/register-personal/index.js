import React, { Component } from 'react'
import { Button, WhiteSpace, WingBlank } from 'antd-mobile';
import './style.less'


class RegisterPersonel extends Component {
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
      <div>
        <WingBlank>
        <Button onClick=''>default</Button><WhiteSpace />
        <Button disabled>default disabled</Button><WhiteSpace />
      </WingBlank>
      </div>
    )
  }
}

export default RegisterPersonel