import reducer from "../reducers/lawfirmReducer";
import {createStore} from "redux";

const lawfirmStore  =  createStore(reducer);

export default lawfirmStore;