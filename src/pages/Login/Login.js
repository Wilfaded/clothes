import React, {useState} from "react";
import {Link} from "react-router-dom";
import styles from "./Style.module.scss";

export const Login = () => {
    let Ru;
    let En;
    const [value, setValue] = useState(Ru)
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
                <Link to="/home/ru">
                    <button
                        className={styles.LoginInClass}
                    >
                        <p>Войти</p>
                    </button>
                </Link>
                <div className={styles.LanguageType}>
                    <p className={styles.Lan}>Язык</p>

                    <div role="group" aria-label="Basic radio toggle button group">
                        <input type="radio" className={`${"btn-check"}`} name="btn radio" id="btn radio1" autoComplete="off" checked/>
                        <label className={`${styles.IBtnLog} ${"btn-outline-danger"}`} htmlFor="btn radio1"><p>RU</p></label>

                        <input type="radio" className={`${"btn-check"}`} name="btn radio" id="btn radio2" autoComplete="off"/>
                        <label className={`${styles.IBtnLog} ${"btn-outline-danger"}`} htmlFor="btn radio2"><p>EN</p></label>
                    </div>
                </div>
            </div>
        </div>
    )
}
