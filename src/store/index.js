import { createStore, combineReducers, applyMiddleWare } from '../store'
import { themeColor, num } from '../reducer/index'

const reducers = combineReducers({themeColor, num})

const store = createStore(reducers)

export default store
