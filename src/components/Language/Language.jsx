import React, {useState} from "react";
import LanActive from "./activeClick/active";



const Language = () => {
    const [lan, setLan] = useState(true);
    return (
        <div>
            <div>
                <LanActive lan={lan} onClickActiveEn={() => setLan(false)} onClickActiveRu={() => setLan(true)}/>
            </div>
        </div>
    )
}

export default Language;