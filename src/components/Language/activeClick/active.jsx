import styles from "../Style.module.scss";
import React from "react";

const LanActive = (props) => {
    const {lan, onClickActiveEn, onClickActiveRu} = props;

    if (lan) return (
        <div>
            <div className={styles.BtnBarRuActive}><p>RU</p></div>
            <div className={styles.BtnBarEn} onClick={onClickActiveEn}><p>EN</p></div>
        </div>
    )

    return (
        <div>
            <div className={styles.BtnBarRu} onClick={onClickActiveRu}><p>RU</p></div>
            <div className={styles.BtnBarEnActive}><p>EN</p></div>
        </div>
    )
}

export default LanActive;