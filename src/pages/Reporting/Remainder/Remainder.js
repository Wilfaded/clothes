import React, {useState} from "react";
import styles from "./Style.module.scss";
import initialState from "../../../redux/initialState";
import {
    AktListNumber, CountListGive,
    DateListGive,
    NameListMat,
    TabListMat
} from "../../../components/Tables/Users/UsersModule";
import Exit from "../../../static/img/Exit.svg";
import Modal from "../../../components/Tables/Modal";

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
            </table>
            <Modal open={open}>
                <div className={styles.NavToModal}>
                    <p>Карточка по материалу: {NameListMat(count)}</p>
                    <button className={styles.NoBorder} onClick={() => setOpen(false)}><img className={styles.Exits} src={Exit} alt="Exit" /></button>
                </div>

                <div className={styles.ContainerTextDev}>
                    <p className={styles.TextToDevOne}>Табельный номер: <span>{TabListMat(count)}</span></p>
                    <p className={styles.TextToDevTwo}>Акты списания:</p>
                </div>
                <table className={styles.TableBackModal} cellPadding="11">
                    <tr><th>Номер акта списания</th><th>Дата списания</th><th>Количество</th></tr>
                    <tr><td>{AktListNumber(count, 1)}</td><td>{DateListGive(count, 1)}</td><td>{CountListGive(count, 1)}</td></tr>
                    <tr><td>{AktListNumber(count, 2)}</td><td>{DateListGive(count, 2)}</td><td>{CountListGive(count, 2)}</td></tr>
                    <tr><td>{AktListNumber(count, 3)}</td><td>{DateListGive(count, 3)}</td><td>{CountListGive(count, 3)}</td></tr>
                </table>

                <div className={styles.BlockToDoing}>
                    <button className={styles.Cancel} onClick={() => setOpen(false)}><p>Понятно!</p></button>
                </div>
            </Modal>
        </>
    )
}