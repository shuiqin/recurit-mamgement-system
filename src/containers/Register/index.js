import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from './action'
import { CONSTANT } from './constants'
import { Button, WhiteSpace, WingBlank } from 'antd-mobile';
import RegisterComanpay from './component/register-company'
import RegisterPersonel from './component/register-personal'
import './style.css'

function mapStateToProps(state, ownProps) {
  const { RegisterReducer } = state
  return {
    RegisterReducer
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

class Register extends Component {
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
    let tt = false
    return (
      <div className='test'>
        <RegisterComanpay ></RegisterComanpay>
        <RegisterPersonel></RegisterPersonel>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register)
