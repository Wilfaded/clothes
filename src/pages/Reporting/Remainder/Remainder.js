import React from "react";
import styles from "./Style.module.scss";
import {indus} from "./remainders";

export const Remainder = () => {
    const numbers = [1,2,3,4,5,6,7,8,9,10,11,12];

    const ListTr = numbers.map((number) =>
        <tr className={styles.TrBack}>
            <td>{indus()[number].NameMat}</td>
            <td>{indus()[number].NumberMat}</td>
            <td>{indus()[number].Count}</td>
        </tr>
    )
    return (
        <table className={styles.Table} cellPadding="16">
            <tr className={styles.TrBack}>
                <th>Наименование материала</th>
                <th>Номер материала</th>
                <th>Количество</th>
            </tr>
            {ListTr}
        </table>
    )
}