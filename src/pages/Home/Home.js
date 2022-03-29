import React from "react";
import Nav from "../../components/Nav";
import styles from "./Style.module.scss";
import Buttons from "../../components/Buttons";


export const Home = () => {
    return (
        <div>
            <Nav />
            <div className={styles.BG}>
                <div className={styles.form_to_btn}>
                    <Buttons />
                </div>
            </div>
        </div>
    )
}
