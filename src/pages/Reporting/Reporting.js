import React, {useMemo, useState} from "react";
import Nav from "../../components/Nav";
import styles from "./Style.module.scss";
import {NavLink} from "react-router-dom";
import {Given} from "./Given/Given";
import {Remainder} from "./Remainder/Remainder";
import {isElement} from "react-dom/test-utils";
import Front from "../../static/img/Front.svg";
import Next from "../../static/img/Next.svg";


function prov(props) {
    if (props === 1) {
        return <Given/>
    }
    if (props === 2) {
        return <Remainder/>
    }
}

export const Reporting = () => {
    const [temp, setTemp] = useState(null);
    return (
        <div>
            <Nav />
            <div className={styles.BG}>
                <div className={styles.LinkBlock}>
                    <NavLink
                        className={styles.GivenBtnOne}
                        activeClassName={styles.GivenBtnActive}
                        to="given"
                        onClick={() => setTemp(1)}
                    >
                        <span>Выдано</span>
                    </NavLink>

                    <NavLink
                        className={styles.GivenBtnTwo}
                        activeClassName={styles.GivenBtnActive}
                        to="remainder"
                        onClick={() => setTemp(2)}
                    ><span>Остаток</span>
                    </NavLink>
                </div>
                <div className={styles.FormToBtn}>
                    {prov(temp)}
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