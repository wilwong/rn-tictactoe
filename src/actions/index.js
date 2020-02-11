export const ACTIONS_TYPES = {
	ACTION_NO_PAYLOAD : 'ACTION_NO_PAYLOAD',
	ACTION_WITH_PAYLOAD: 'ACTION_WITH_PAYLOAD',
}

export const ActionWithPayload = payload => ({
	type: 'ACTION_WITH_PAYLOAD',
	payload
})

export const ActionWithoutPayload = () => ({
	type: ACTIONS_TYPES.ACTION_NO_PAYLOAD,
})

