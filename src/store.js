// import { createStore } from 'redux'
import { themeColor, num } from './reducer'

function createStore (reducer) {
  let state = {}
  const listeners = []
  const subscribe = (listener) => listeners.push(listener)
  const getState = () => state
  const dispatch = (action) => {
    state = reducer(state, action)
    listeners.forEach((listener) => listener())
  }
  
  dispatch({}) // 初始化 state
  return { getState, dispatch, subscribe}
}

// const state = {
//   themeColor: 'red'
// }

const combineReducers = reducers => {
  return (state = {}, action) => {
    return Object.keys(reducers).reduce((nextState, key) => {
      nextState[key] = reducers[key](state[key], action)
      return nextState
    }, {})  
  }
}

const reducer = combineReducers({
  themeColor,
  num
})

// const themeReducer = (stateInit = state, action) => {
//   switch (action.type) {
//     case 'CHANGE_COLOR':
//       return { ...stateInit, themeColor: action.themeColor }
//     default:
//       return stateInit
//   }
// }

const store = createStore(reducer)

export default store