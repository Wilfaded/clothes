import React from "react";
import initialState from "../../../redux/initialState";
import store from "../../../redux/store";


let namePerson = "";
let devPerson = "";
let numberRep = "";
let nameMat = "";
let numberMat = "";


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


const Users = ({ids}) => {
    return(
        <>
            <td>{initialState[`${ids}`].number_rep}</td>
            <td>{initialState[`${ids}`].date}</td>
            <td>{initialState[`${ids}`].name}</td>
            <td>{initialState[`${ids}`].number_tab}</td>
            <td>{initialState[`${ids}`].dev}</td>
            <td>{initialState[`${ids}`].works}</td>
        </>
    )
}

export default Users