import React, {useEffect, useMemo, useState} from "react";
import styles from "./Style.module.scss"
import {createPortal} from "react-dom";
import Exit from "../../static/img/Exit.svg";
import Users from "./Users";
import id from "./Users";
import {Zlp} from "./Users/Users";

const modalRootElement = document.getElementById("modal");

const Modal = (props) => {
    let user;
    const { open, onClose } = props;

    const element = useMemo(() => document.createElement("div"),[])

    useEffect(() => {
        if (open) {
            modalRootElement.appendChild(element);

            return () => {
                modalRootElement.removeChild(element);
            };
        }
    });

    if (open) {
        return createPortal(
            <div className={styles.modal_bg} onClick={onClose}>
                <div className={styles.modal_card}>{props.children}</div>
            </div>,
            element
        );
    }
    return null;
};

// eslint-disable-next-line no-unused-vars
let temp;

const Tables = () => {
    let name;
    const [open, setOpen] = useState(false);
    return (
        <div>
            <table className={styles.table_back} cellPadding="16">
                <tr onClick={() => {
                    setOpen(true);
                    temp = "1";
                }} className={styles.tr_back}>
                    <Users ids={"1"}/>
                </tr>
                <tr onClick={() => {
                    setOpen(true);
                    temp = "2";
                }} className={styles.tr_back}>
                    <Users ids={"2"}/>
                </tr>
                <tr onClick={() => {
                    setOpen(true);
                    temp = "3";
                }} className={styles.tr_back}>
                    <Users ids={"3"}/>
                </tr>
                <tr onClick={() => {
                    setOpen(true);
                    temp = "4";
                }} className={styles.tr_back}>
                    <Users ids={"4"}/>
                </tr>
                <tr onClick={() => {
                    setOpen(true);
                    temp = "5";
                }} className={styles.tr_back}>
                    <Users ids={"5"}/>
                </tr>
                <tr onClick={() => {
                    setOpen(true);
                    temp = "6";
                }} className={styles.tr_back}>
                    <Users ids={"6"}/>
                </tr>
                <tr onClick={() => {
                    setOpen(true);
                    temp = "7";
                }} className={styles.tr_back}>
                    <Users ids={"7"}/>
                </tr>
                <tr onClick={() => {
                    setOpen(true);
                    temp = "8";
                }} className={styles.tr_back}>
                    <Users ids={"8"}/>
                </tr>
                <tr onClick={() => {
                    setOpen(true);
                    temp = "9";
                }} className={styles.tr_back}>
                    <Users ids={"9"}/>
                </tr>
                <tr onClick={() => {
                    setOpen(true);
                    temp = "10";
                }} className={styles.tr_back}>
                    <Users ids={"10"}/>
                </tr>
                <tr onClick={() => {
                    setOpen(true);
                    temp = "11";
                }} className={styles.tr_back}>
                    <Users ids={"11"}/>
                </tr>
                <tr onClick={() => {
                    setOpen(true);
                    temp = "12";
                }} className={styles.tr_back}>
                    <Users ids={"12"}/>
                </tr>
                <tr onClick={() => {
                    setOpen(true);
                    temp = "13";
                }} className={styles.tr_back}>
                    <Users ids={"13"}/>
                </tr>
            </table>


            <Modal open={open}>
                <div className={styles.nav_to_modal}>
                    <p>Карточка сотрудника: <Zlp ids={temp} valuer="name"/></p>
                    <button className={styles.no_border}><img className={styles.exits} src={Exit} alt="Exit" onClick={() => setOpen(false)}/></button>
                </div>

                <div className={styles.container_text_dev}>
                    <p className={styles.text_to_dev_one}>Штатная должность: <Zlp ids={temp} valuer="dev"/></p>
                    <p className={styles.text_to_dev_two}>Активная заявка:</p>
                </div>

                <div className={styles.block_to_mat}>
                    <p className={styles.number_rep}>Номер заявки</p>
                    <p className={styles.name_mat}>Наименование материала</p>
                    <p className={styles.number_mat}>Номер материала</p>
                </div>

                <div className={styles.block_to_doing}>
                    <button className={styles.cancel} onClick={() => setOpen(false)}><p>Отменить</p></button>
                    <button className={styles.give} onClick={() => {
                        setOpen(false);
                        alert("Успешно выдано!");
                    }}>
                        <p>Выдать</p>
                    </button>
                </div>
            </Modal>
        </div>
    )
}

export default Tables;