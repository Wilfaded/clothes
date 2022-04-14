import {combineReducers} from "redux";
import {tablebackReducer} from "./tableBack/tablebackReducer";


const rootReducer = combineReducers({
    todos: tablebackReducer,
})

export default rootReducer;
