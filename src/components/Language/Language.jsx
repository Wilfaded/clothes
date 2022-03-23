import React from "react";
import styles from "./Lan.module.scss"
import {NavLink} from "react-router-dom";

const Language = () => {
    return (
        <div>
            <NavLink
                className={styles.btn_bar_ru}
                activeClassName={styles.btn_bar_ru_active}
                to="ru"
            >
                <p>RU</p>
            </NavLink>
            <NavLink
                className={styles.btn_bar_en}
                activeClassName={styles.btn_bar_en_active}
                to="en"
            >
                <p>EN</p>
            </NavLink>
        </div>
    )
}

export default Language;