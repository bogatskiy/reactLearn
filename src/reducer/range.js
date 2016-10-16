import { RANGE_DAY } from '../constants'

export default (range = {from: null, to: null}, action) => {
  const { type, payload } = action

  switch (type) {
    case RANGE_DAY:
        return payload
  }

  return range
}
