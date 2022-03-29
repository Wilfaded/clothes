import React, {useEffect, useMemo, useState} from "react";
import styles from "./Style.module.scss"
import {createPortal} from "react-dom";

const modalRootElement = document.getElementById("modal");

const Modal = (props) => {
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

const Buttons = () => {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <button className={styles.button_out} onClick={() => setOpen(true)}>Нажми</button>
            <Modal open={open} onClose={() => setOpen(false)}><p>123</p></Modal>
        </div>
    )
}

export default Buttons;