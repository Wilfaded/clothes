import React, {useState} from "react";
import styles from "./Style.module.scss";
import SecModal from "./SecModal/SecModal";
import store from "../../../redux/store";



export const Given = () => {
    const [open, setOpen] = useState(false);
    const [count, setCount] = useState(1);
    const numbers = [1,2,3,4,5,6,7,8,9,10,11,12];
    const ListTr = numbers.map((number) =>
        <tr className={styles.TrBack} onClick={() => {
            setOpen(true);
            setCount(number);
        }}>
            <td>{store.getState()["2"]["0"][`${number}`].getting["3"].date_give}</td>
            <td>{store.getState()["2"]["0"][`${number}`].name}</td>
            <td>{store.getState()["2"]["0"][`${number}`].number_mat}</td>
            <td>{store.getState()["2"]["0"][`${number}`].getting["3"].akt_number}</td>
            <td>{store.getState()["2"]["0"][`${number}`].getting["3"].date_get}</td>
            <td>{store.getState()["2"]["0"][`${number}`].number_tab}</td>
        </tr>
    )
    return (
        <div>
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
                <SecModal open={open} count={count} onClose={() => setOpen(false)}/>
            </table>

        </div>
    )
}