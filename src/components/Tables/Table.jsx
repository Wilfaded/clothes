import React, {useState} from "react";
import styles from "./Style.module.scss"
import Exit from "../../static/img/Exit.svg";
import Users, {Devs, NameMats, Names, NumMats, NumReps} from "./Users/Users";
import Modal from "./Modal";


const TableModal = () => {
    const [count, setCount] = useState(1);
    const [open, setOpen] = useState(false);

    const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13];
    const ListTr = numbers.map((number) =>
        <tr onClick={() => {
            setOpen(true);
            setCount(number);
        }} className={styles.TrBack} id={`${number}`}>
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
                    <p>Карточка сотрудника: {Names(count)}</p>
                    <button className={styles.NoBorder} onClick={() => setOpen(false)}><img className={styles.Exits} src={Exit} alt="Exit" /></button>
                </div>

                <div className={styles.ContainerTextDev}>
                    <p className={styles.TextToDevOne}>Штатная должность: <span>{Devs(count)}</span></p>
                    <p className={styles.TextToDevTwo}>Активная заявка:</p>
                </div>
                <table className={styles.TableBackModal} cellPadding="11">
                    <tr><th>Номер заявки</th><th>Наименование материала</th><th>Номер материала</th></tr>
                    <tr><td>{NumReps(count, 1)}</td><td>{NameMats(count, 1)}</td><td>{NumMats(count, 1)}</td></tr>
                    <tr><td>{NumReps(count, 2)}</td><td>{NameMats(count, 2)}</td><td>{NumMats(count, 2)}</td></tr>
                    <tr><td>{NumReps(count, 3)}</td><td>{NameMats(count, 3)}</td><td>{NumMats(count, 3)}</td></tr>
                    <tr><td>{NumReps(count, 4)}</td><td>{NameMats(count, 4)}</td><td>{NumMats(count, 4)}</td></tr>
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

export default TableModal;