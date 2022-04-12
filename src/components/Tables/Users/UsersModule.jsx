import React from "react";
import initialState from "../../../redux/DefaultState";
import store from "../../../redux/store";
import {
    AKT_GET, COUNT_GIVE, DATE_GET, DATE_GIVE,
    DEV,
    NAME,
    NAME_MAT,
    NAME_MAT_LAST,
    NUMBER_MAT,
    NUMBER_REP,
    NUMBER_TAB
} from "../../../redux/actions/Actions";


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
    store.dispatch({type: NAME});
    store.subscribe(() => {
        const state = store.getState()["1"]["0"][`${count}`].name
        namePerson = state
    });
    return namePerson;
}

export const Devs = (count) => {
    store.dispatch({type: DEV});
    store.subscribe(() => {
        const state = store.getState()["1"]["0"][`${count}`].dev
        devPerson = state
    });
    return devPerson;
}

export const NumReps = (count, props) => {
    store.dispatch({type: NUMBER_REP});
    store.subscribe(() => {
        const state = store.getState()["1"]["0"][`${count}`].reports[`${props}`].number_rep
        numberRep = state
    });
    return numberRep;
}

export const NameMats = (count, props) => {
    store.dispatch({type: NAME_MAT});
    store.subscribe(() => {
        const state = store.getState()["1"]["0"][`${count}`].reports[`${props}`].name
        nameMat = state
    });
    return nameMat;
}

export const NumMats = (count, props) => {
    store.dispatch({type: NUMBER_MAT});
    store.subscribe(() => {
        const state = store.getState()["1"]["0"][`${count}`].reports[`${props}`].number_mat
        numberMat = state
    });
    return numberMat;
}

export const NameListMat = (count) => {
    store.dispatch({type: NAME_MAT_LAST});
    store.subscribe(() => {
        const state = store.getState()["2"]["0"][`${count}`].name
        nameListMat = state
    });
    return nameListMat;
}

export const TabListMat = (count) => {
    store.dispatch({type: NUMBER_TAB});
    store.subscribe(() => {
        const state = store.getState()["2"]["0"][`${count}`].number_tab
        tabListMat = state
    });
    return tabListMat;
}

export const AktListNumber = (count, props) => {
    store.dispatch({type: AKT_GET});
    store.subscribe(() => {
        const state = store.getState()["2"]["0"][`${count}`].getting[`${props}`].akt_number
        aktListNumber = state
    });
    return aktListNumber;
}

export const DateListGet = (count, props) => {
    store.dispatch({type: DATE_GET});
    store.subscribe(() => {
        const state = store.getState()["2"]["0"][`${count}`].getting[`${props}`].date_get
        dateListGet = state
    });
    return dateListGet;
}

export const DateListGive = (count, props) => {
    store.dispatch({type: DATE_GIVE});
    store.subscribe(() => {
        const state = store.getState()["2"]["0"][`${count}`].getting[`${props}`].date_give
        dateListGive = state
    });
    return dateListGive;
}

export const CountListGive = (count, props) => {
    store.dispatch({type: COUNT_GIVE});
    store.subscribe(() => {
        const state = store.getState()["2"]["0"][`${count}`].getting[`${props}`].count_give
        countListGive = state
    });
    return countListGive;
}

const UsersModule = ({ids}) => {
    return(
        <>
            <td>{store.getState()["1"]["0"][`${ids}`].number_rep}</td>
            <td>{store.getState()["1"]["0"][`${ids}`].date}</td>
            <td>{store.getState()["1"]["0"][`${ids}`].name}</td>
            <td>{store.getState()["1"]["0"][`${ids}`].number_tab}</td>
            <td>{store.getState()["1"]["0"][`${ids}`].dev}</td>
            <td>{store.getState()["1"]["0"][`${ids}`].works}</td>
        </>
    )
}

export default UsersModule;