import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Content extends Component {
  static propTypes = {
    themeColor: PropTypes.string
  }
  render () {
    return (
      <div style={{color: this.props.themeColor}}>
        <p>手动实现 redux 实现最基本的API 以及 封装来一个简单的中间件</p>
      </div>
    )
  }
}

export default Content