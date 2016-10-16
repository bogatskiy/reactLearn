import { SELECT_ARTICLE } from '../constants'

export default (selected = [], action) => {
  const { type, payload } = action


  return type == SELECT_ARTICLE ? payload : selected
}
