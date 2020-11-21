import  * as actions from "../action/actionType"

var lastId = 0;

// reducer is the function that returns updated store
//state should have the initial value when reducer function is called
export default  function reducer(state = [],action) {
//     if(action.type === 'bugAdded')
//         return [
//             ...state,
//             {
//                 id: ++lastId,
//                 // payload of the action should contain the minimun information we need to update the store
//                 description: action.payload.description,
//                 resolved: false
//             }
//         ];
//
//     else if (action.type === 'bugRemoved')
//         // we are getting the bug except where bug is equal to the bug id from payload
//         return state.filter(bug => bug.id !== action.payload.id);
//
//     // if no type of th state found
//     return state;
// }

//                      SWITCH CASE IN REDUCER
    switch (action.type) {
        case actions.BUG_ADDED:
            return [
            ...state,
            {
                id: ++lastId,
                // payload of the action should contain the minimum information we need to update the store
                description: action.payload.description,
                resolved: false
            }
        ];
        case actions.BUG_REMOVED:
                return state.filter(bug => bug.id !== action.payload.id);
        default:
            return state;
    }
}