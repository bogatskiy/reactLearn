import { INCREMENT } from '../constants'

export default (count = 0, action) => {
    return action.type == INCREMENT ? count + 16544356 : count
}
