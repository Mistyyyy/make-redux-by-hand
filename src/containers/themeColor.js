import ThemeColor from '../component/themeColor'
import { connect } from '../connect'
import { createChangeAction, createAddAction, createDecAction } from '../actions'

const mapStateToProps = state => ({
  themeColor: state.ThemeColor
})

const mapDispatchToProps = dispatch => {
  return {
    onSwitchColor: (themeColor) => dispatch(createChangeAction(themeColor)),
    onAdd : () => dispatch(createAddAction()),
    onDes: () => dispatch(createDecAction()),
    onSyncAdd: (delay = 1000) => dispatch((dispatch) => {
      setTimeout(() => {
        dispatch(createAddAction())
      },  delay)
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ThemeColor)