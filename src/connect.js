import React, { Component } from 'react'
import PropTypes from 'prop-types'

const connect = (mapStateToProps, mapDispatchToProps) => WrapperComponent => {
  return class extends Component {
    static contextTypes = {
      store: PropTypes.object
    }

    constructor(props) {
      super(props)
      this.state = {
        allProps: {}
      }
    }

    componentWillMount() {
      const { store } = this.context
      this._updateStore()
      store.subscribe(() => {
        this._updateStore()
      })
    }

    _updateStore() {
      const { store } = this.context
      let letState = mapStateToProps
        ? mapStateToProps(store.getState(), this.props)
        : {}
      let dispatchProps = mapDispatchToProps
        ? mapDispatchToProps(store.dispatch, this.props)
        : {}
      this.setState({
        allProps: {
          ...letState,
          ...this.props,
          ...dispatchProps
        }
      })
    }

    render() {
      return (
        <WrapperComponent {...this.state.allProps} />
      )
    }
  }
}

export { connect }