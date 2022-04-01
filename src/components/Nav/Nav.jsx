import React from "react";
import styles from './Style.module.scss'
import {NavLink} from "react-router-dom";
import Logo from "../../static/img/Logo.svg"
import LogOut from "../../static/img/LogOut.svg"
import Language from "../Language";


const Nav = () => {
    return (
        <nav className={styles.Bar}>
            <div className={styles.Logo}>
                <img src={Logo} className={styles.Picture} alt="Logo"/>
            </div>

            <NavLink
                className={styles.SslOne}
                activeClassName={styles.SslOneActive}
                to="/home/"
            >
                <p>Заявки</p>
            </NavLink>

            <NavLink
                className={styles.SslTwo}
                activeClassName={styles.SslTwoActive}
                to="/reporting/"
            >
                <p>Отчётность</p>
            </NavLink>

            <div className={styles.AirToLan}>
                <Language/>
            </div>
            <p className={styles.TextHello}>Здравствуйте, Алексей Олегович</p>
            <div className={styles.BlockOut}>
                <NavLink
                    className={styles.Logout}
                    to={"/"}
                    >
                    <img src={LogOut} alt="LogOut"/>
                </NavLink>
            </div>
        </nav>

    )
}

export default Nav;