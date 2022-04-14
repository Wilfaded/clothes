import DefaultConfig from "../DefaultState";
import {
    AKT_GET, COUNT_GIVE,
    DATE_GET, DATE_GIVE,
    DEV,
    NAME,
    NAME_MAT,
    NAME_MAT_LAST,
    NUMBER_MAT,
    NUMBER_REP,
    NUMBER_TAB
} from "./tablebackActions";


const initialState = DefaultConfig;


export const tablebackReducer = (state = initialState, action) => {
    switch (action.type) {
        case NAME:
        case DEV:
        case NUMBER_REP:
        case NAME_MAT:
        case NUMBER_MAT:
        case NAME_MAT_LAST:
        case NUMBER_TAB:
        case AKT_GET:
        case DATE_GET:
        case DATE_GIVE:
        case COUNT_GIVE:
            return state;

        default:
            return state;
    }

}