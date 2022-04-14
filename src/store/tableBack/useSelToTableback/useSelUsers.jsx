import {useSelector} from "react-redux";


const useSelUsers = () => {
    const temp = useSelector((state) => state.todos);
    return temp;
}

export default useSelUsers;