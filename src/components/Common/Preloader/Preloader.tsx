import preloader from "../../../assets/images/preloader.svg";
import React from "react";

const Preloader:React.FC = () => {
    return (
        <div>
            <img src={preloader} alt="preloader"/>
        </div>
    )
}
export default Preloader;