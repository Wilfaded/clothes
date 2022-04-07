import React from "react";
import initialState from "../../../redux/initialState";
import store from "../../../redux/store";


let namePerson = "";
let devPerson = "";
let numberRep = "";
let nameMat = "";
let numberMat = "";
let nameListMat = "";
let tabListMat = "";
let aktListNumber = "";
let dateListGet = "";
let dateListGive= "";
let countListGive = "";


export const Names = (count) => {
    store.dispatch({type: "NAME", ids: count});
    store.subscribe(() => {
        const state = store.getState()
        namePerson = state
    });
    return namePerson;
}

export const Devs = (count) => {
    store.dispatch({type: "DEV", ids: count});
    store.subscribe(() => {
        const state = store.getState()
        devPerson = state
    });
    return devPerson;
}

export const NumReps = (count, props) => {
    store.dispatch({type: "NUMBER_REP", ids: count, idsMat: props});
    store.subscribe(() => {
        const state = store.getState()
        numberRep = state
    });
    return numberRep;
}

export const NameMats = (count, props) => {
    store.dispatch({type: "NAME_MAT", ids: count, idsMat: props});
    store.subscribe(() => {
        const state = store.getState()
        nameMat = state
    });
    return nameMat;
}

export const NumMats = (count, props) => {
    store.dispatch({type: "NUMBER_MAT", ids: count, idsMat: props});
    store.subscribe(() => {
        const state = store.getState()
        numberMat = state
    });
    return numberMat;
}

export const NameListMat = (count) => {
    store.dispatch({type: "NAME_MAT_LIST", ids: count});
    store.subscribe(() => {
        const state = store.getState()
        nameListMat = state
    });
    return nameListMat;
}

export const TabListMat = (count) => {
    store.dispatch({type: "NUMBER_TAB", ids: count});
    store.subscribe(() => {
        const state = store.getState()
        tabListMat = state
    });
    return tabListMat;
}

export const AktListNumber = (count, props) => {
    store.dispatch({type: "AKT_GET", ids: count, idsMat: props});
    store.subscribe(() => {
        const state = store.getState()
        aktListNumber = state
    });
    return aktListNumber;
}

export const DateListGet = (count, props) => {
    store.dispatch({type: "DATE_GET", ids: count, idsMat: props});
    store.subscribe(() => {
        const state = store.getState()
        dateListGet = state
    });
    return dateListGet;
}

export const DateListGive = (count, props) => {
    store.dispatch({type: "DATE_GIVE", ids: count, idsMat: props});
    store.subscribe(() => {
        const state = store.getState()
        dateListGive = state
    });
    return dateListGive;
}

export const CountListGive = (count, props) => {
    store.dispatch({type: "COUNT_GIVE", ids: count, idsMat: props});
    store.subscribe(() => {
        const state = store.getState()
        countListGive = state
    });
    return countListGive;
}

const UsersModule = ({ids}) => {
    return(
        <>
            <td>{initialState.Users[`${ids}`].number_rep}</td>
            <td>{initialState.Users[`${ids}`].date}</td>
            <td>{initialState.Users[`${ids}`].name}</td>
            <td>{initialState.Users[`${ids}`].number_tab}</td>
            <td>{initialState.Users[`${ids}`].dev}</td>
            <td>{initialState.Users[`${ids}`].works}</td>
        </>
    )
}

export default UsersModule;