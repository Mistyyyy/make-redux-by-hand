import ThemeColor from '../component/themeColor'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  themeColor: state.ThemeColor
})

const mapDispatchToProps = dispatch => {
  return {
    onSwitchColor: (themeColor) => dispatch({
      type: 'CHANGE_COLOR',
      themeColor
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ThemeColor)