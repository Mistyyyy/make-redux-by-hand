import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Content extends Component {
  static propTypes = {
    themeColor: PropTypes.string
  }
  render () {
    return (
      <div style={{color: this.props.themeColor}}>
        <p>React.js 小书内容</p>
      </div>
    )
  }
}

export default Content