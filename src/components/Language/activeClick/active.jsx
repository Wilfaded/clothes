import styles from "../Style.module.scss";
import React from "react";

const LanActive = (props) => {
    const {lan, onClickActiveEn, onClickActiveRu} = props;

    if (lan) return (
        <div>
            <button className={styles.BtnBarRuActive}><p>RU</p></button>
            <button className={styles.BtnBarEn} onClick={onClickActiveEn}><p>EN</p></button>
        </div>
    )

    return (
        <div>
            <button className={styles.BtnBarRu} onClick={onClickActiveRu}><p>RU</p></button>
            <button className={styles.BtnBarEnActive}><p>EN</p></button>
        </div>
    )
}

export default LanActive;