import React, { Component } from 'react'
import './style.less'

class PhoneCodeCheckView extends Component {
  inputCodeCount = 0;
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

  changeVal(e) {
    var val = e.target.value;
    if (isNaN(val)) {

    }
  }

  componentDidMount() {
    this.backHandler = () => {
      this.props.router.goBack()
    }
  }

  render() {
    return (
      <div className="pure_phone_code_check_container">
        <input id="code1" type="input" maxLength="1" autoFocus="true" className="code_input_style" onChange={this.changeVal}></input>
        <input id="code2" type="input" maxLength="1" className="code_input_style"></input>
        <input id="code3" type="input" maxLength="1" className="code_input_style"></input>
        <input id="code4" type="input" maxLength="1" className="code_input_style"></input>
      </div>
    )
  }
}

export default PhoneCodeCheckView