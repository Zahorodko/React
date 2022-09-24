import "./Films.css"
import { IconContext } from "react-icons";
import {AiOutlineDownload} from 'react-icons/ai';

const ThirdBlock = () => {
    return(
        <div className="Two">
            <div className="TwoRight">
                <div className="ThreeRightImg"></div>
                <div className="ThreeRightImgTwo">
                <div className="ThreeRightImgTwoImg"></div>
                <div className="ThreeRightImgTwoText">
                    <p> Stranger Things</p>
                <p className="Download">Downloading...</p>
                    </div>
                    <IconContext.Provider value={{ className: "shared-class", size: 35, color: 'white', padding: '5px'}}>
                            <>
                                <AiOutlineDownload />
                            </>
                        </IconContext.Provider>
                </div>
            </div>
            <div className="TwoLeft">
                <h1>Download your shows to watch offline.</h1>
                <h2>Save your favorites easily and always have something to watch.</h2>
            </div>
        </div>
    )
}

export default ThirdBlock