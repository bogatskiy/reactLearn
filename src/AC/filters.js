import { SELECT_ARTICLE } from '../constants'

export function filterArticle(selected) {
    return {
        type: SELECT_ARTICLE,
        payload: selected
    }
}
