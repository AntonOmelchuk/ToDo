import {createStore} from "redux";
import {reducer} from "../reducers/todoReducer";

export const store = createStore(reducer);