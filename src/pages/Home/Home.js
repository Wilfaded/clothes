import React from "react";
import Nav from "../../components/Nav";
import styles from "./Style.module.scss";
import Front from "../../static/img/Front.svg";
import Next from "../../static/img/Next.svg";
import TableModal from "./Table";

/*"1": {
    number_rep: "653262",
        date: "13.01.2019",
        name: "Иванов Иван Сергеевич",
        number_tab: "444221",
        dev: "Information Developer",
        works: "ГИВЦ",
        reports: {
        "1": {
            number_rep: "653262",
                name: "Жилет сигнальный",
                number_mat: "200905"
        },
        "2": {
            number_rep: "653262",
                name: "Галстук",
                number_mat: "207763"
        },
        "3": {
            number_rep: "656236",
                name: "Кожаный ремень",
                number_mat: "212635"
        },
        "4": {
            number_rep: "656236",
                name: "Жилет утепленный",
                number_mat: "200900"
        }
    }
},*/

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
