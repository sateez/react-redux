import { combineReducers } from 'redux'
import sideMenuSelection from './sideMenuSelection'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

const contactApp = combineReducers({
  sideMenuSelection:sideMenuSelection,
  routing: routerReducer
})

export default contactApp
