import React, {Fragment} from "react";
import {Link} from "react-router-dom";

export const Login = () => {
    return (
        <Fragment>
            <div className="BG">
                <div className="MainBlock" >
                    <div className="HelloLog">Вход в систему</div>
                    <div className="BlockLog">
                        <div>
                            <p>Логин</p>
                            <input
                                type="text"
                                className="form-control LoginPass"
                                placeholder="Введите логин"
                            />
                        </div>
                        <div className="OtstupToBlock">
                            <p>Пароль</p>
                            <input
                                type="password"
                                className="form-control LoginPass"
                                placeholder="Введите пароль"
                            />
                        </div>
                    </div>
                    <Link to="/home">
                        <button
                            className="LoginInClass"
                        >
                            <p>Войти</p>
                        </button>
                    </Link>
                    <div className="LanguageType">
                        <p className="Lan">Язык</p>
                        <div role="group" aria-label="Basic radio toggle button group">
                            <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" checked/>
                            <label className="ibtn_log btn-outline-danger" htmlFor="btnradio1"><p>RU</p></label>

                            <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off"/>
                            <label className="ibtn_log btn-outline-danger" htmlFor="btnradio2"><p>EN</p></label>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}