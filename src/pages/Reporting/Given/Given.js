import React from "react";
import styles from "./Style.module.scss";
import {indus} from "./materials";

export const Given = () => {
    const numbers = [1,2,3,4,5,6,7,8,9,10,11,12];
    const ListTr = numbers.map((number) =>
        <tr className={styles.TrBack}>
            <td>{indus()[number].DateGive}</td>
            <td>{indus()[number].NameMat}</td>
            <td>{indus()[number].NumberMat}</td>
            <td>{indus()[number].NumberAkt}</td>
            <td>{indus()[number].DateGet}</td>
            <td>{indus()[number].TableNumber}</td>
        </tr>
    )
    return (
        <table className={styles.Table} cellPadding="16">
            <tr className={styles.TrBack}>
                <th>Дата выдачи</th>
                <th>Наименование материала</th>
                <th>Номер материала</th>
                <th>№ Акта списания</th>
                <th>Дата акта списания</th>
                <th>Табельный номер</th>
            </tr>
            {ListTr}
        </table>
    )
}