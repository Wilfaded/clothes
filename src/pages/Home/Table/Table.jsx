import React, {useState} from "react";
import styles from "./Style.module.scss";
import UsersModule from "../../../components/Tables/Users/UsersModule";
import SecModal from "./SecModal/SecModal";


const TableModal = () => {
    const [count, setCount] = useState(1);
    const [open, setOpen] = useState(false);
    const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13];

    return (
        <table className={styles.TableBack} cellPadding="16">
            {numbers.map((number) =>
                <tr onClick={() => {
                    setCount(number);
                    setOpen(true);
                }} className={styles.TrBack}>
                    <UsersModule ids={number}/>
                </tr>
            )}
            <SecModal open={open} count={count} onClose={()=> setOpen(false)}/>
        </table>
    );
}

export default TableModal;