import {ACTIONS_TYPES} from '../actions'

// you can set default state in the fucntion parameter
// reducer funciton that determines the action states
const actionStates = (state = "noaction", action) => {
  switch (action.type) {
    case ACTIONS_TYPES.ACTION_NO_PAYLOAD:
      return "action_no_payload"
    case ACTIONS_TYPES.ACTION_WITH_PAYLOAD:
      return {
        action: 'action_with_payload',
        payload
      }
    default:
      return state
  }
}

export default actionStates