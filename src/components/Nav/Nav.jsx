import React from "react";
import {NavLink} from "react-router-dom";
import Logo from "../../static/img/Logo.svg"
import Language from "../Language";


const Nav = () => {
    return (
        <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
            <div className="bgLogo">
                <img src={Logo} alt="Logo"/>
            </div>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink
                        className="nav-link"
                        to="/home"
                        exact
                    >
                        Заявки
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        className="nav-link"
                        to="/reporting"
                    >
                        Отчётность
                    </NavLink>
                </li>
            </ul>
            <Language />
        </nav>
    )
}

export default Nav;