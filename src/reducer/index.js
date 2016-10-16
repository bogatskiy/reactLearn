import { combineReducers } from 'redux'
import count from './counter'
import articles from './articles'
import selected from './filters'
import range from './range'


export default combineReducers({
    articles, count, selected, range
})
