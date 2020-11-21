import {createStore} from "redux";
import reducer from "../reducers/reducer";

// we don't pass the reducer as the function parameter ,
// but we pass the reducer as the function reference
const store = createStore(reducer);

export default store;