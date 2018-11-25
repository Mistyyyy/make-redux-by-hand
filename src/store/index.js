import { createStore, combineReducers, applyMiddleWare } from '../store'
import { themeColor, num } from '../reducer/index'
import logMiddleWare, { logOthers } from '../middleWare'

const reducers = combineReducers({themeColor, num})

const store = createStore(reducers, {}, applyMiddleWare(logOthers, logMiddleWare))

export default store
