import React from "react";
import Nav from "../../components/Nav";
import styles from "./Style.module.scss";
import Front from "../../static/img/Front.svg";
import Next from "../../static/img/Next.svg";
import TableModal from "./Table";



export const Home = () => {

    return (
        <div>
            <Nav />
            <div className={styles.BG}>
                <div className={styles.FormToBtn}>
                    <TableModal/>
                </div>
                <div className={styles.InputBlock}>
                    <div className={styles.InputPage}>
                        <img src={Front} alt="Front"/>
                        <p>Страница <input type="text" defaultValue="1"/> из 18</p>
                        <img src={Next} alt="Next"/>
                    </div>
                    <p className={styles.Looking}>Просмотр 1 - 13 из 348</p>
                </div>
            </div>

        </div>
    )
}
