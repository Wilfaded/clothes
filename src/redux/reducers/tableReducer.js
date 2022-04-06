import initialState from "../initialState";

export default function tableReducer(state, action) {
    if (action.type === "NAME"){
        return initialState[`${action.ids}`].name;
    } else if (action.type === "DEV"){
        return initialState[`${action.ids}`].dev;
    } else if (action.type === "NUMBER_REP"){
        return initialState[`${action.ids}`].material[`${action.idsMat}`].number_rep;
    } else if (action.type === "NAME_MAT"){
        return initialState[`${action.ids}`].material[`${action.idsMat}`].name;
    } else if (action.type === "NUMBER_MAT"){
        return initialState[`${action.ids}`].material[`${action.idsMat}`].number_rep;
    }
    return null;
}
