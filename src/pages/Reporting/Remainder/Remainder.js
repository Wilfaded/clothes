import React, {useState} from "react";
import styles from "./Style.module.scss";
import SecModal from "./SecModal/SecModal";
import {useSelector} from "react-redux";



export const Remainder = () => {
    const items = useSelector((state) => state.todos);

    const [isOpen, setOpen] = useState(false);
    const [count, setCount] = useState(1);
    const numbers = [1,2,3,4,5,6,7,8,9,10,11,12];

    function onClose() {
        setOpen(false);
    }

    const ListTr = numbers.map((number) =>
        <tr className={styles.TrBack} onClick={() => {
            setOpen(true);
            setCount(number);
        }}>
            <td>{items.materials[`${number}`].name}</td>
            <td>{items.materials[`${number}`].number_mat}</td>
            <td>{items.materials[`${number}`].count}</td>
        </tr>
    )
    return (
        <div>
            <table className={styles.Table} cellPadding="16">
                <tr className={styles.TrBack}>
                    <th>Наименование материала</th>
                    <th>Номер материала</th>
                    <th>Количество</th>
                </tr>
                {ListTr}
                {isOpen ? <SecModal count={count} onClose={onClose}/> : null}
            </table>
        </div>
    )
}