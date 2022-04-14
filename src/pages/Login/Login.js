import React, {useState} from "react";
import {Link} from "react-router-dom";
import styles from "./Style.module.scss";

let TempLan = null;

export function SetLanguage() {
    return TempLan;
}

const LanActiveLogin = (props) => {
    const {lan, onClickActiveEn, onClickActiveRu} = props;
    TempLan = lan;
    if (lan) return (
        <div>
            <button className={styles.RuActive}><p>RU</p></button>
            <button className={styles.En} onClick={onClickActiveEn}><p>EN</p></button>
        </div>
    )

    return (
        <div>
            <button className={styles.Ru} onClick={onClickActiveRu}><p>RU</p></button>
            <button className={styles.EnActive}><p>EN</p></button>
        </div>
    )
}

export const Login = () => {
    const [lan, setLan] = useState(true);
    return (
        <div className={styles.BG}>
            <div className={styles.MainBlock}>
                <div className={styles.HelloLog}>Вход в систему</div>
                <div className={styles.BlockLog}>
                    <div>
                        <p>Логин</p>
                        <input
                            type="text"
                            className={`${"form-control"} ${styles.LoginPass}`}
                            placeholder="Введите логин"
                        />
                    </div>
                    <div className={styles.OtstupToBlock}>
                        <p>Пароль</p>
                        <input
                            type="password"
                            className={`${"form-control"} ${styles.LoginPass}`}
                            placeholder="Введите пароль"
                        />
                    </div>
                </div>
                <Link to="/home/">
                    <button
                        className={styles.LoginInClass}
                        type="submit"
                    >
                        <p>Войти</p>
                    </button>
                </Link>

                <div className={styles.LanguageType}>
                    <p className={styles.Lan}>Язык</p>

                    <LanActiveLogin lan={lan} onClickActiveEn={() => setLan(false)} onClickActiveRu={() => setLan(true)}/>
                </div>
            </div>
        </div>
    )
}
