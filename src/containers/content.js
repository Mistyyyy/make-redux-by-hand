import Content from '../component/content'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  themeColor: state.themeColor
})

export default connect(mapStateToProps)(Content)