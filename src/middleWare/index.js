const { log } = console

const logMiddle = ({ getState }) => dispatch => action => {
  const preveState = getState()
  const nowAction = action
  dispatch(action)
  const nowState =  getState()
  log(dispatch)
  log(preveState)
  log(nowAction)
  log(nowState)
}

export const logOthers = () => dispatch => action => {
  log('second')
  log(dispatch)
  dispatch(action)
  log('end')
} 

export default logMiddle