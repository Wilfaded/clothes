import React from "react";
import styles from './Style.module.scss'
import {NavLink} from "react-router-dom";
import Logo from "../../static/img/Logo.svg"
import LogOut from "../../static/img/LogOut.svg"
import Language from "../Language";


const Nav = () => {
    return (
        <nav className={styles.bar}>
            <div className={styles.logo}>
                <img src={Logo} className={styles.picture} alt="Logo"/>
            </div>

            <NavLink
                className={styles.ssl_one}
                activeClassName={styles.ssl_one_active}
                to="/home/"
            >
                <p>Заявки</p>
            </NavLink>

            <NavLink
                className={styles.ssl_two}
                activeClassName={styles.ssl_two_active}
                to="/reporting/"
            >
                <p>Отчётность</p>
            </NavLink>

            <div className={styles.air_to_lan}>
                <Language/>
            </div>
            <p className={styles.text_hello}>Здравствуйте, Алексей Олегович</p>
            <div className={styles.block_out}>
                <NavLink
                    className={styles.logout}
                    to={"/"}
                    >
                    <img src={LogOut} alt="LogOut"/>
                </NavLink>
            </div>
        </nav>

    )
}

export default Nav;