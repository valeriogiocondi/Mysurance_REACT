import { combineReducers } from 'redux'
import CounterReducer from './reducer-counter'
import InsuranceReducer from './insurance-list-reducer'
import StoreReducer from './insurance-to-remove'

const allReducers = combineReducers({
  counterReducer: CounterReducer,
  insuranceReducer: InsuranceReducer,
  storeReducer: StoreReducer
})

export default allReducers