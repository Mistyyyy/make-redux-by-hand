import { createStore, combineReducers, applyMiddleWare } from '../store'
import { themeColor, num } from '../reducer/index'
import logMiddleWare, { logOthers, thunk } from '../middleWare'

const reducers = combineReducers({themeColor, num})

const store = createStore(reducers, {}, applyMiddleWare(thunk, logOthers))

export default store
