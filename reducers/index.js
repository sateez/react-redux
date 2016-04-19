import { combineReducers } from 'redux'
import values from './values'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

const contactApp = combineReducers({
  formValues:values
  ,routing: routerReducer
})

export default contactApp
