import initialState from "../initialState";
import Modal from "../../components/Tables/Modal";

export default function rootReducer(state = initialState.open, action) {
    if (action.type === "OPENS") {
        return (<Modal open={true}/>)
    } else if (action.type === "CLOSES") {
        return Modal(false);
    }

    return state;
}