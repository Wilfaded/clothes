import styles from "../Style.module.scss";
import {Devs, NameMats, Names, NumMats, NumReps} from "../../../../store/tableBack/useTablebackActions";
import Exit from "../../../../static/img/Exit.svg";
import Modal from "../../../../components/Table/Modal";
import React from "react";



const SecModal = (props) => {
    let {count, onClose} = props;

    return(
        <Modal open={true}>
            <div className={styles.NavToModal}>
                <p>Карточка сотрудника: {Names(count)}</p>
                <button className={styles.NoBorder} onClick={() => onClose()}><img className={styles.Exits} src={Exit} alt="Exit" /></button>
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
                <button className={styles.Cancel} onClick={() => onClose()}><p>Отменить</p></button>
                <button className={styles.Give} onClick={() => {
                    onClose();
                    alert("Успешно выдано!");
                }}>
                    <p>Выдать</p>
                </button>
            </div>
        </Modal>
    )
}

export default SecModal;