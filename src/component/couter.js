import React , { Component }from 'react'
import PropTypes from 'prop-types'

class Couter extends Component {
  render() {
    return (
      <div>click the nums is {this.props.num} times</div>
    )
  }
}

Couter.propTypes = {
  num: PropTypes.number
}

export default Couter
