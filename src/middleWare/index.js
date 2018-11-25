const { log } = console

const logMiddle = ({ getState }) => dispatch => action => {
  const preveState = getState()
  const nowAction = action
  dispatch(action)
  const nowState =  getState()
  log(preveState)
  log(nowAction)
  log(nowState)
}

export const logOthers = () => dispatch => action => {
  log('second')
  dispatch(action)
} 

export const thunk = ({ dispatch, getState }) => originDispatch => action => {
  if (typeof action === 'function') {
    action(dispatch, getState)
  }
  originDispatch(action)
}

export default logMiddle