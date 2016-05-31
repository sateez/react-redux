import { combineReducers } from 'redux'
import sideMenuSelection from './sideMenuSelection'
import modalReducer from './modalReducer'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

const contactApp = combineReducers({
  sideMenuSelection:sideMenuSelection,
  routing: routerReducer,
  modal:modalReducer
})

export default contactApp
