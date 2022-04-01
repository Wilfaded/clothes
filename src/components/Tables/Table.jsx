import React, {useState} from "react";
import styles from "./Style.module.scss"
import Exit from "../../static/img/Exit.svg";
import Users from "./Users";
import {indus} from "./Users/Users";
import Modal from "./Modal";



const Table = () => {
    const [open, setOpen] = useState(false);
    const [count, setCount] = useState(1);
    const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13];

    const ListTr = numbers.map((number) =>
        <tr onClick={() => {
            setOpen(true);
            setCount(number);
        }} className={styles.TrBack}>
            <Users ids={number}/>
        </tr>
    )

    return (
        <div>
            <table className={styles.TableBack} cellPadding="16">
                {ListTr}
            </table>

            <Modal open={open}>
                <div className={styles.NavToModal}>
                    <p>Карточка сотрудника: {indus()[`${count}`].name}</p>
                    <button className={styles.NoBorder}><img className={styles.Exits} src={Exit} alt="Exit" onClick={() => setOpen(false)}/></button>
                </div>

                <div className={styles.ContainerTextDev}>
                    <p className={styles.TextToDevOne}>Штатная должность: <span>{indus()[`${count}`].dev}</span></p>
                    <p className={styles.TextToDevTwo}>Активная заявка:</p>
                </div>
                {/*Cделать через редакс*/}
                <table className={styles.TableBackModal} cellPadding="11">
                    <tr><th>Номер заявки</th><th>Наименование материала</th><th>Номер материала</th></tr>
                    <tr><td>{indus()[`${count}`].material["1"].number_rep}</td><td>{indus()[`${count}`].material["1"].name}</td><td>{indus()[`${count}`].material["1"].number_mat}</td></tr>
                    <tr><td>{indus()[`${count}`].material["2"].number_rep}</td><td>{indus()[`${count}`].material["2"].name}</td><td>{indus()[`${count}`].material["2"].number_mat}</td></tr>
                    <tr><td>{indus()[`${count}`].material["3"].number_rep}</td><td>{indus()[`${count}`].material["3"].name}</td><td>{indus()[`${count}`].material["3"].number_mat}</td></tr>
                    <tr><td>{indus()[`${count}`].material["4"].number_rep}</td><td>{indus()[`${count}`].material["4"].name}</td><td>{indus()[`${count}`].material["4"].number_mat}</td></tr>
                </table>

                <div className={styles.BlockToDoing}>
                    <button className={styles.Cancel} onClick={() => setOpen(false)}><p>Отменить</p></button>
                    <button className={styles.Give} onClick={() => {
                        setOpen(false);
                        alert("Успешно выдано!");
                    }}>
                        <p>Выдать</p>
                    </button>
                </div>
            </Modal>
        </div>
    );
}

export default Table;