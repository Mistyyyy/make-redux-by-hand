import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Header extends Component {
  static propTypes = {
    themeColor: PropTypes.string
  }
  render () {
    return (
      <h1 style={{ color: this.props.themeColor}}>手动实现 redux 实现最基本的API 以及 封装来一个简单的中间件</h1>
    )
  }
}

export default Header