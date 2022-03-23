import React, {Fragment} from "react";
import Nav from "../components/Nav";
import Buttons from "../components/Buttons";
import {NavLink} from "react-router-dom";
import {createPortal} from "react-dom";

/*let modal = document.getElementById("myModal");

// Получить кнопку, которая открывает модальный
let btn = document.getElementById("myBtn");

// Получить элемент <span>, который закрывает модальный
let span = document.getElementsByClassName("close")[0];

// Когда пользователь нажимает на кнопку, откройте модальный
btn.onclick = function() {
    modal.style.display = "block";
}

// Когда пользователь нажимает на <span> (x), закройте модальное окно
span.onclick = function() {
    modal.style.display = "none";
}

// Когда пользователь щелкает в любом месте за пределами модального, закройте его
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}*/

export const Home = () => {
    return (
        <Fragment>
            <Nav />
            <div className="block_to_rep">
                <button id="myBtn">Открыть модальное окно</button>

                <div id="myModal" className="modal">
                    <div className="modal-content">
                        <span className="close">&times;</span>
                        <p>Некоторый текст в модальном..</p>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}