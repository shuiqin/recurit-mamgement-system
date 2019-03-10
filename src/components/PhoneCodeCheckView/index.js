import React, { Component } from 'react'
import './style.less'

class PhoneCodeCheckView extends Component {
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
      <div className="phone_code_check_container">
     
      </div>
    )
  }
}

export default PhoneCodeCheckView