import React, {useState} from "react";
import Nav from "../../components/Nav";
import styles from "./Style.module.scss";
import Front from "../../static/img/Front.svg";
import Next from "../../static/img/Next.svg";
import Users from "../../components/Tables/Users";
import TableModal from "../../components/Tables";
import store from "../../redux/store";

export const Home = () => {
    const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13];

    function onClickOnState() {
        store.dispatch({type: "OPENS"});
    }
    function onClickOffState() {
        store.dispatch({type: "CLOSES"});
    }

    const ListTr = numbers.map((number) =>
        <tr onClick={() => {
            onClickOnState();
        }} className={styles.TrBack}>
            <Users ids={number}/>
        </tr>
    )

    return (
        <div>
            <Nav />
            <div className={styles.BG}>
                <div className={styles.FormToBtn}>
                    <table className={styles.TableBack} cellPadding="16">
                        {ListTr}
                    </table>
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
