import initialState from "../initialState";
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
} from "../actions/Actions";


export default function tableReducer (state, action) {
    switch (action.type) {
        case NAME: return initialState.Users[`${action.ids}`].name;
        case DEV: return initialState.Users[`${action.ids}`].dev;
        case NUMBER_REP: return initialState.Users[`${action.ids}`].reports[`${action.idsMat}`].number_rep;
        case NAME_MAT: return initialState.Users[`${action.ids}`].reports[`${action.idsMat}`].name;
        case NUMBER_MAT: return initialState.Users[`${action.ids}`].reports[`${action.idsMat}`].number_rep;

        case NAME_MAT_LAST: return initialState.Materials[`${action.ids}`].name;
        case NUMBER_TAB: return initialState.Materials[`${action.ids}`].number_tab;
        case AKT_GET: return initialState.Materials[`${action.ids}`].getting[`${action.idsMat}`].akt_number;
        case DATE_GET: return initialState.Materials[`${action.ids}`].getting[`${action.idsMat}`].date_get;
        case DATE_GIVE: return initialState.Materials[`${action.ids}`].getting[`${action.idsMat}`].date_give;
        case COUNT_GIVE: return initialState.Materials[`${action.ids}`].getting[`${action.idsMat}`].count_give;

        default:
            return null
    }

}