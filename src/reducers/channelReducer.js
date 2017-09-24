import * as types from './../constants/types'

const initialState = {
    channels: [],
    activeChannelId: 1,
    users: [],
    activeUserId: 1,
    messages: [],
    activeMessageId: 1
}

export function channelReducer(state = initialState, action){
    switch(action.type){
        case types.CHANNELS_LOADED:
        return {
            ...state,
            type: types.CHANNELS_LOADED,
            channels: action.payLoad
        }

        case types.CHANNEL_ADDED:
        const newChannels = state.channels.concat(action.payLoad)
        return {
            ...state,
            type: types.CHANNEL_ADDED,
            channels: newChannels
        }
        
        case types.USERS_LOADED:
        return {
            ...state,
            type: types.USERS_LOADED,
            users: action.payLoad
        }

        case types.USER_ADDED:
        const newUsers = state.users.concat(action.payLoad)
        return {
            ...state,
            type: types.USER_ADDED,
            users: newUsers
        }

        case types.MESSAGES_LOADED:
        return {
            ...state,
            type: types.MESSAGES_LOADED,
            messages: action.payLoad
        }

        case types.MESSAGE_ADDED:
        const newMessages = state.messages.concat(action.payLoad)
        return {
            ...state,
            type: types.MESSAGE_ADDED,
            messages: newMessages
        }

        default:
        return state;
    }
}