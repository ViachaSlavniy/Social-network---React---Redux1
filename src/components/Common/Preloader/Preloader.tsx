import preloader from "../../../assets/images/preloader.svg";
import React from "react";

type PreloaderType = {

}


const Preloader:React.FC<PreloaderType> = () => {
    return (
        <div>
            <img src={preloader} alt="preloader"/>
        </div>
    )
}
export default Preloader;