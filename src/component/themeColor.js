import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ThemeColor extends Component {
  static propTypes = {
    onSwitchColor: PropTypes.func,
    themeColor: PropTypes.string
  }
  constructor(props) {
    super(props)
    this.changeRed = this.changeRed.bind(this)
    this.changeBlue = this.changeBlue.bind(this)
  }
  changeRed() {
    if(this.props.onSwitchColor) {
      this.props.onSwitchColor('red')
    }
  }
  changeBlue() {
    if(this.props.onSwitchColor) {
      this.props.onSwitchColor('blue')
    }
  }
  render () {
    const { themeColor, onAdd, onDes,  onSyncAdd } = this.props
    return (
      <div >
        <button style={{color: themeColor}} onClick={this.changeRed}>Red</button>
        <button style={{color: themeColor}} onClick={this.changeBlue}>Blue</button>
        <button onClick={() => onAdd()}>add</button>
        <button onClick={() => onDes()}>dec</button>
        <button onClick={() => onSyncAdd()}>async add</button>
      </div>
    )
  }
}

export default ThemeColor
