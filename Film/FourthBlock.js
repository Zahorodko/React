import "./Films.css"
import videoTwo from './netflix/video2.mp4'

const FourthBlock = () => {
    return(
        <div className="Two">
        <div className="TwoLeft">
            <h1>Watch everywhere.</h1>
            <h2>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.</h2>
        </div>
        <div className="TwoRight">
            <div className="TwoRightImgTwo"></div>
            <div className="TwoRightVideoTwo">
                <video autoPlay muted loop>
                    <source src={videoTwo} type="video/mp4" />
                </video>
            </div>
        </div>
    </div>
    )
}

export default FourthBlock