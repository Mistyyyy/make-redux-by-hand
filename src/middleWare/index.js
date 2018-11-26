const { info } = console

const logMiddle = ({ getState }) => dispatch => action => {
  const preveState = getState()
  const nowAction = action
  dispatch(action)
  const nowState =  getState()
  info(preveState)
  info(nowAction)
  info(nowState)
}

export const logOthers = () => dispatch => action => {
  info('second')
  dispatch(action)
} 

export const thunk = ({ dispatch, getState }) => originDispatch => action => {
  if (typeof action === 'function') {
    return action(dispatch, getState)
  }
    return originDispatch(action)
}

export default logMiddle