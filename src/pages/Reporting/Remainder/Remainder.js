import React, {useState} from "react";
import styles from "./Style.module.scss";
import initialState from "../../../redux/initialState";
import SecModal from "./SecModal/SecModal";

export const Remainder = () => {
    const [open, setOpen] = useState(false);
    const [count, setCount] = useState(1);
    const numbers = [1,2,3,4,5,6,7,8,9,10,11,12];

    const ListTr = numbers.map((number) =>
        <tr className={styles.TrBack} onClick={() => {
            setOpen(true);
            setCount(number);
        }}>
            <td>{initialState.Materials[`${number}`].name}</td>
            <td>{initialState.Materials[`${number}`].number_mat}</td>
            <td>{initialState.Materials[`${number}`].count}</td>
        </tr>
    )
    return (
        <>
            <table className={styles.Table} cellPadding="16">
                <tr className={styles.TrBack}>
                    <th>Наименование материала</th>
                    <th>Номер материала</th>
                    <th>Количество</th>
                </tr>
                {ListTr}
                <SecModal open={open} count={count} onClose={() => setOpen(false)}/>
            </table>
        </>
    )
}