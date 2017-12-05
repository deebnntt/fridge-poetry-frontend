import wordReducer from './wordReducer.js'
import poemReducer from './poemReducer.js'
import userReducer from './userReducer.js'
import { combineReducers } from 'redux'

export const rootReducer = combineReducers({
  words: wordReducer,
  poem: poemReducer,
  user: userReducer
})
