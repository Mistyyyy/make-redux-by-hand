
export function createStore (reducer, initState = {}, enhancer) {
  if (enhancer) {
    const createSotre = enhancer(createStore)
    const store = createSotre(reducer, initState)
    return store
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
    return dispatch => dispatch
  }
  if (fn.length === 1) {
    return fn[0]
  }
  let last = fn[fn.length - 1]
  let others = fn.slice(0, -1)
  // 简单说一下这样做的原因 也就是中间件的原理 => 利用改装原来store的dispatch
  // 每一个都会在中间件中做一些事情 同理，第二个中间件是利用前一个中间件改装后的dispatch来形成新的dispatch
  // 必须要触发最基本的store的dispatch才会有作用。
  // 这里的last(...arg)这句话的用意在于形成新的dispatch
  return (...args) => others.reduceRight((current, next) => next(current), last(...args))
}