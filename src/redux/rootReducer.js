import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import user from './modules/user/reducer'

export default history => combineReducers({
  router: connectRouter(history),
  user
})
