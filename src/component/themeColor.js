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
  ayncAdd() {
    setTimeout(() => {
      this.props.onAdd()
    }, 1000);
  }  
  render () {
    return (
      <div >
        <button style={{color: this.props.themeColor}} onClick={this.changeRed}>Red</button>
        <button style={{color: this.props.themeColor}} onClick={this.changeBlue}>Blue</button>
        <button onClick={() => this.props.onAdd()}>add</button>
        <button onClick={() => this.props.onDes()}>dec</button>
        <button onClick={this.ayncAdd.bind(this)}>async add</button>
      </div>
    )
  }
}

export default ThemeColor
