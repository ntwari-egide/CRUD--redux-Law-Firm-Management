import * as actions from "./actionType";

export const addingClient = () => {
    return {
        type: actions.CLIENT_ADDED,
        payload: {
            firstName: "ntwari egide",
            secondName: "Ceo",
            phoneNumber:"078888328",
            service: "arbitration"
        }
    }
}

export const getingAllClient = () => {
    return {
        type: actions.GET_ALL_CLIENT
    }
}

export const getClientById = () => {
    return {
        type: actions.GET_CLIENT_BY_ID,
        payload: {
            id: 1
        }
    }
}

export const updateClient = () => {
    return {
        type: actions.UPDATE_CLIENT_BY_ID,
        payload: {
            id: 1,
            firstName: "ntwari egide updated",
            secondName: "Ceo updated",
            phoneNumber:"078888328",
            service: "arbitration updated"
        }
    }
}

export const removeClient = () => {
    return {
        type: actions.CLIENT_REMOVE,
        payload: {
            id: 1
        }
    }
}