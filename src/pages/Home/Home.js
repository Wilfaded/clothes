import React from "react";
import Nav from "../../components/Nav";
import styles from "./Style.module.scss";
import Tables from "../../components/Tables";
import Front from "../../static/img/Front.svg";
import Next from "../../static/img/Next.svg";

export const Home = () => {
    return (
        <div>
            <Nav />
            <div className={styles.BG}>
                <div className={styles.form_to_btn}>
                    <Tables/>
                </div>
                <div className={styles.input_block}>
                    <div className={styles.input_page}>
                        <img className={styles.front} src={Front} alt="Front"/>
                        <p>Страница <input type="text"/> из 18</p>
                        <img src={Next} alt="Next"/>
                    </div>
                    <p className={styles.looking}>Просмотр 1 - 13 из 348</p>
                </div>
            </div>
        </div>
    )
}
