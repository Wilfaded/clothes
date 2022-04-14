import React from "react";
import useSelUsers from "./useSelToTableback/useSelUsers";


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
    namePerson = useSelUsers().users[`${count}`].name;
    return namePerson;
}

export const Devs = (count) => {
    devPerson = useSelUsers().users[`${count}`].dev;
    return devPerson;
}

export const NumReps = (count, props) => {
    numberRep = useSelUsers().users[`${count}`].reports[`${props}`].number_rep;
    return numberRep;
}

export const NameMats = (count, props) => {
    nameMat = useSelUsers().users[`${count}`].reports[`${props}`].name;
    return nameMat;
}

export const NumMats = (count, props) => {
    numberMat = useSelUsers().users[`${count}`].reports[`${props}`].number_mat;
    return numberMat;
}

export const NameListMat = (count) => {
    nameListMat = useSelUsers().materials[`${count}`].name;
    return nameListMat;
}

export const TabListMat = (count) => {
    tabListMat = useSelUsers().materials[`${count}`].number_tab;
    return tabListMat;
}

export const AktListNumber = (count, props) => {
    aktListNumber = useSelUsers().materials[`${count}`].getting[`${props}`].akt_number;
    return aktListNumber;
}

export const DateListGet = (count, props) => {
    dateListGet = useSelUsers().materials[`${count}`].getting[`${props}`].date_get;
    return dateListGet;
}

export const DateListGive = (count, props) => {
    dateListGive = useSelUsers().materials[`${count}`].getting[`${props}`].date_give;
    return dateListGive;
}

export const CountListGive = (count, props) => {
    countListGive = useSelUsers().materials[`${count}`].getting[`${props}`].count_give;
    return countListGive;
}

const UsersModule = ({ids}) => {
    return(
        <>
            <td>{useSelUsers().users[`${ids}`].number_rep}</td>
            <td>{useSelUsers().users[`${ids}`].date}</td>
            <td>{useSelUsers().users[`${ids}`].name}</td>
            <td>{useSelUsers().users[`${ids}`].number_tab}</td>
            <td>{useSelUsers().users[`${ids}`].dev}</td>
            <td>{useSelUsers().users[`${ids}`].works}</td>
        </>
    )
}

export default UsersModule;