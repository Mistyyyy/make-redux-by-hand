// import { createStore } from 'redux'

export function createStore (reducer, initState = {}, enhancer) {
  if (enhancer) {
    const createSotre = enhancer(createStore)
    const store = createSotre(reducer, initState)
    console.log(store)
  }
  let state = initState
  const listeners = []
  const subscribe = (listener) => {
    listeners.push(listener)
    return () => listeners.pop()
  }
  const getState = () => state
  const dispatch = (action) => {
    state = reducer(state, action)
    listeners.forEach((listener) => listener())
  }
  
  dispatch({}) // 初始化 state
  return { getState, dispatch, subscribe}
}


export const combineReducers = reducers => {
  return (state, action) => {
    return Object.keys(reducers).reduce((nextState, key) => {
      nextState[key] = reducers[key](state[key], action)
      return nextState
    }, {})  
  }
}

export const applyMiddleWare = (...middleWares) => {
  debugger
  return (createStore) => (reducer, initState, enhancer) => {
    const store = createStore(reducer, initState, enhancer)
    let dispatch = store.dispatch
    let chain = []
    const middlewareAPI = {
      getState: store.getState,
      dispatch: (action) => dispatch(action)
    }
    // middleWares is a array which type is func
    // then map the array and pass middleWareAPI to the func to get an new array which is content of the func result
    chain = middleWares.map(middleware => middleware(middlewareAPI))
    // then pass the original dispath of the store to the item of the chain which is content of the func
    // then get the new dispatch as the final dispatch which access the action as the arguments
    dispatch = compose(...chain)(store.dispatch)

    return {
      ...store,
      dispatch
    }
  }
}

const compose = (...fn) => {
  if (fn.length === 0) {
    return
  }
  if (fn.length === 1) {
    return fn[0]()
  }
  let last = fn[fn.length - 1]
  let others = fn.slice(0, -1)
  return (...args) => others.reduceRight((current, next) => next(current), last(...args))
}

// const reducer = combineReducers({
//   themeColor,
//   num
// })


// const store = createStore(reducer, {}, applyMiddleWare(({getState}) => {
//     console.log(getState())
//     return (next) => {
//       return dispatch => dispatch
//     }
//   }
// ))

// export default store