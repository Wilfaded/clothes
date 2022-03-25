import React from "react";
import Nav from "../../components/Nav";
import styles from "./Style.module.scss";
import Buttons from "../../components/Buttons";
import {NavLink} from "react-router-dom";
import {createPortal} from "react-dom";

export const Home = () => {
    return (
        <div>
            <Nav />
        </div>
    )
}
