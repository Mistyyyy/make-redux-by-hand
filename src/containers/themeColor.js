import ThemeColor from '../component/themeColor'
import { connect } from '../connect'

const mapStateToProps = state => ({
  themeColor: state.ThemeColor
})

const mapDispatchToProps = dispatch => {
  return {
    onSwitchColor: (themeColor) => dispatch({
      type: 'CHANGE_COLOR',
      themeColor
    }),
    onAdd : () => dispatch({
      type: 'ADD'
    }),
    onDes: () => dispatch({
      type: 'DEC'
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ThemeColor)