import Header from '../component/header'
import { connect } from  'react-redux'

const mapState = state => ({
  themeColor: state.themeColor
})

export default connect(mapState)(Header)
