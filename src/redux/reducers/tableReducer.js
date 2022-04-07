import initialState from "../initialState";

export default function tableReducer(state, action) {
    if (action.type === "NAME"){
        return initialState.Users[`${action.ids}`].name;
    } else if (action.type === "DEV"){
        return initialState.Users[`${action.ids}`].dev;
    } else if (action.type === "NUMBER_REP"){
        return initialState.Users[`${action.ids}`].reports[`${action.idsMat}`].number_rep;
    } else if (action.type === "NAME_MAT"){
        return initialState.Users[`${action.ids}`].reports[`${action.idsMat}`].name;
    } else if (action.type === "NUMBER_MAT"){
        return initialState.Users[`${action.ids}`].reports[`${action.idsMat}`].number_rep;
    }
//Выдача материала (модалка)
    else if (action.type === "NAME_MAT_LIST"){
        return initialState.Materials[`${action.ids}`].name;
    } else if (action.type === "NUMBER_TAB"){
        return initialState.Materials[`${action.ids}`].number_tab;
    } else if (action.type === "AKT_GET"){
        return initialState.Materials[`${action.ids}`].getting[`${action.idsMat}`].akt_number;
    } else if (action.type === "DATE_GET"){
        return initialState.Materials[`${action.ids}`].getting[`${action.idsMat}`].date_get;
    } else if (action.type === "DATE_GIVE"){
        return initialState.Materials[`${action.ids}`].getting[`${action.idsMat}`].date_give;
    } else if (action.type === "COUNT_GIVE"){
        return initialState.Materials[`${action.ids}`].getting[`${action.idsMat}`].count_give;
    }
    return null;
}
