import { SELECT_ARTICLE } from '../constants'
import { RANGE_DAY } from '../constants'

export function filterArticle(selected) {
    return {
        type: SELECT_ARTICLE,
        payload: selected
    }
}

export function rangeDay(range) {
    return {
        type: RANGE_DAY,
        payload: range
    }
}
