import React from "react";
import styles from "./Style.module.scss"
import {NavLink} from "react-router-dom";

const Language = () => {
    return (
        <div>
            <NavLink
                className={styles.BtnBarRu}
                activeClassName={styles.BtnBarRuActive}
                to="ru"
            >
                <p>RU</p>
            </NavLink>
            <NavLink
                className={styles.BtnBarEn}
                activeClassName={styles.BtnBarEnActive}
                to="en"
            >
                <p>EN</p>
            </NavLink>
        </div>
    )
}

export default Language;