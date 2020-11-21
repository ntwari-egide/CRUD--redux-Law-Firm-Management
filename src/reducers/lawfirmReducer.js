import * as actions from "../action/actionType"
var lastId = 0;

export default function reducer(state = [],action) {
    switch (action.type) {
        case actions.CLIENT_ADDED:
            return [
                ...state,
                {
                    id : ++lastId,
                    firstName: action.payload.firstName,
                    secondName: action.payload.secondName,
                    phoneNumber: action.payload.phoneNumber,
                    service: action.payload.service
                }
            ]
        case actions.GET_CLIENT_BY_ID:
            return state.filter(client => client.id === action.payload.id);
        case actions.UPDATE_CLIENT_BY_ID:
            var updatedState = state.filter(clients => clients.id !== action.payload.id)
            return [
                ...updatedState,
                {
                    id : action.payload.id,
                    firstName: action.payload.firstName,
                    secondName: action.payload.secondName,
                    phoneNumber: action.payload.phoneNumber,
                    service: action.payload.service
                }
            ]
        case actions.GET_ALL_CLIENT:
            return state;
        case actions.CLIENT_REMOVE:
            return state.filter(client => client.id !== action.payload.id);

        default:
            return state;
    }
}