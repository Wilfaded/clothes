import React from "react";
import styles from "./Style.module.scss"
import Exit from "../../static/img/Exit.svg";
import {indus} from "./Users/Users";
import Modal from "./Modal";



const TableModal = () => {
    return (
        <Modal>
            <div className={styles.NavToModal}>
                <p>Карточка сотрудника: {indus()[`${"1"}`].name}</p>
                <button className={styles.NoBorder}><img className={styles.Exits} src={Exit} alt="Exit" /></button>
            </div>

            <div className={styles.ContainerTextDev}>
                <p className={styles.TextToDevOne}>Штатная должность: <span>{indus()[`${"1"}`].dev}</span></p>
                <p className={styles.TextToDevTwo}>Активная заявка:</p>
            </div>
            {/*Cделать через редакс*/}
            <table className={styles.TableBackModal} cellPadding="11">
                <tr><th>Номер заявки</th><th>Наименование материала</th><th>Номер материала</th></tr>
                <tr><td>{indus()[`${"1"}`].material["1"].number_rep}</td><td>{indus()[`${"1"}`].material["1"].name}</td><td>{indus()[`${"1"}`].material["1"].number_mat}</td></tr>
                <tr><td>{indus()[`${"1"}`].material["2"].number_rep}</td><td>{indus()[`${"1"}`].material["2"].name}</td><td>{indus()[`${"1"}`].material["2"].number_mat}</td></tr>
                <tr><td>{indus()[`${"1"}`].material["3"].number_rep}</td><td>{indus()[`${"1"}`].material["3"].name}</td><td>{indus()[`${"1"}`].material["3"].number_mat}</td></tr>
                <tr><td>{indus()[`${"1"}`].material["4"].number_rep}</td><td>{indus()[`${"1"}`].material["4"].name}</td><td>{indus()[`${"1"}`].material["4"].number_mat}</td></tr>
            </table>

            <div className={styles.BlockToDoing}>
                <button className={styles.Cancel}><p>Отменить</p></button>
                <button className={styles.Give} onClick={() => {
                    alert("Успешно выдано!");
                }}>
                    <p>Выдать</p>
                </button>
            </div>
        </Modal>
    );
}

export default TableModal;