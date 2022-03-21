import React from "react";

const Language = () => {
    return (
        <div role="group" aria-label="Basic radio toggle button group">
            <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" checked/>
            <label className="ibtn_log btn-outline-danger" htmlFor="btnradio1"><p>RU</p></label>

            <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off"/>
            <label className="ibtn_log btn-outline-danger" htmlFor="btnradio2"><p>EN</p></label>
        </div>
    )
}

export default Language;