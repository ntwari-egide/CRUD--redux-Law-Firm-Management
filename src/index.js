import store from "./store/store";
import * as actions from "./action/actionType"
import {bugAdded, bugRemoved} from "./action/action";
import lawfirmStore from "./store/lawfirmStore"
import * as lawfirmActions from "./action/lawfirmAction"
// we can get subscribed to the store , to recieve changes when the store is changed
store.subscribe( () =>{
    console.log("State changed ! ",store.getState());
})


// Dispatch state is used to set the state

store.dispatch({
    type: actions.BUG_ADDED,
    payload: {
        description: "bug1 added"
    }
})

// unsubscribe();
store.dispatch(bugRemoved(1))

lawfirmStore.subscribe( () =>{
    console.log("Law firm State changed ! ",lawfirmStore.getState());
})

lawfirmStore.dispatch(lawfirmActions.addingClient())

lawfirmStore.dispatch(lawfirmActions.getingAllClient())

lawfirmStore.dispatch(lawfirmActions.getClientById())

lawfirmStore.dispatch(lawfirmActions.updateClient())

lawfirmStore.dispatch(lawfirmActions.removeClient())