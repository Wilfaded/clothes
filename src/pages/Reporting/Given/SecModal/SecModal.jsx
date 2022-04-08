import styles from "../Style.module.scss";
import {
    AktListNumber,
    DateListGet,
    DateListGive,
    NameListMat,
    TabListMat
} from "../../../../components/Tables/Users/UsersModule";
import Exit from "../../../../static/img/Exit.svg";
import Modal from "../../../../components/Tables/Modal";
import React from "react";


const SecModal = (props) => {
    const {open, count, onClose} = props;

    return (
        <Modal open={open}>
            <div className={styles.NavToModal}>
                <p>Карточка по материалу: {NameListMat(count)}</p>
                <button className={styles.NoBorder} onClick={() => onClose()}><img className={styles.Exits} src={Exit} alt="Exit" /></button>
            </div>

            <div className={styles.ContainerTextDev}>
                <p className={styles.TextToDevOne}>Табельный номер: <span>{TabListMat(count)}</span></p>
                <p className={styles.TextToDevTwo}>Акты списания:</p>
            </div>
            <table className={styles.TableBackModal} cellPadding="11">
                <tr><th>Номер акта списания</th><th>Дата списания</th><th>Дата выдачи</th></tr>
                <tr><td>{AktListNumber(count, 1)}</td><td>{DateListGive(count, 1)}</td><td>{DateListGet(count, 1)}</td></tr>
                <tr><td>{AktListNumber(count, 2)}</td><td>{DateListGive(count, 2)}</td><td>{DateListGet(count, 2)}</td></tr>
                <tr><td>{AktListNumber(count, 3)}</td><td>{DateListGive(count, 3)}</td><td>{DateListGet(count, 3)}</td></tr>
            </table>

            <div className={styles.BlockToDoing}>
                <button className={styles.Cancel} onClick={() => onClose()}><p>Понятно!</p></button>
            </div>
        </Modal>
    )
}

export default SecModal;