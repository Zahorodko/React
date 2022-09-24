import "./Films.css"
import videoOne from './netflix/video1.mp4'

const SecondBlock = () => {
    return(
        <div className="Two">
        <div className="TwoLeft">
            <h1>Enjoy on your TV.</h1>
            <h2>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h2>
        </div>
        <div className="TwoRight">
            <div className="TwoRightImg"></div>
            <div className="TwoRightVideo">
                <video autoPlay muted loop>
                    <source src={videoOne} type="video/mp4" />
                </video>
            </div>
        </div>
    </div>
    )
}

export default SecondBlock