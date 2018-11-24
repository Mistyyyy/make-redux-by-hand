import Content from '../component/content'
import { connect } from '../connect'

const mapStateToProps = state => ({
  themeColor: state.themeColor
})

export default connect(mapStateToProps)(Content)