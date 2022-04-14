import React, {useEffect, useMemo} from "react";
import {createPortal} from "react-dom";
import styles from "./Style.module.scss";


const modalRootElement = document.getElementById("modal");

const Modal = (props) => {
    const {open} = props;

    const element = useMemo(() => document.createElement("div"),[])

    useEffect(() => {
        if (open){
            modalRootElement.appendChild(element);

            return () => {
                modalRootElement.removeChild(element);
            };
        }
    });

    if (open) {
        return createPortal(
            <div className={styles.ModalBg}>
                <div className={styles.ModalCard}>{props.children}</div>
            </div>,
            element
        );
    }
    return null;

};

export default Modal;