import Header from '../component/header'
import { connect } from '../connect'

const mapState = state => ({
  themeColor: state.themeColor
})

export default connect(mapState)(Header)
