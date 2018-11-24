import  Couter from '../component/couter'
import { connect } from '../connect'

const mapState = state => ({num: state.num})

export default connect(mapState)(Couter)