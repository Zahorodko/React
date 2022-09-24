import "./Films.css"

const Questions = (props) => {
    return(
        <div className="Question">
                <h1>Frequently Asked Questions</h1>
                <div className="QuestionMain">
                  <div className="QuestionMainOne">
                    <div className="QuestionMainHeader" onClick={()=>props.Zero(1)}>
                        <div>What is Netflix?</div>
                        <div>+</div>
                    </div>
                    <div className="QuestionMainFooter" style={{display: props.Count==1?'block':'none'}}>
                       <p>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.

                        You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!</p>
                    </div>
                  </div>
                  <div className="QuestionMainOne">
                    <div className="QuestionMainHeader" onClick={()=>props.Zero(2)}>
                        <div>How much does Netflix cost?</div>
                        <div>+</div>
                    </div>
                    <div className="QuestionMainFooter" style={{display: props.Count==2?'block':'none'}}>
                       <p>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from 29 zł to 60 zł a month. No extra costs, no contracts.</p>
                    </div>
                  </div>
                  <div className="QuestionMainOne">
                    <div className="QuestionMainHeader" onClick={()=>props.Zero(3)}>
                        <div>Where can I watch?</div>
                        <div>+</div>
                    </div>
                    <div className="QuestionMainFooter" style={{display: props.Count==3?'block':'none'}}>
                       <p>Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.

                        You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.</p>
                    </div>
                  </div>                 
                  <div className="QuestionMainOne">
                    <div className="QuestionMainHeader" onClick={()=>props.Zero(4)}>
                        <div>What is Netflix?</div>
                        <div>+</div>
                    </div>
                    <div className="QuestionMainFooter" style={{display: props.Count==4?'block':'none'}}>
                       <p>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.

                        You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!</p>
                    </div>
                  </div>
                  <div className="QuestionMainOne">
                    <div className="QuestionMainHeader" onClick={()=>props.Zero(5)}>
                        <div>How much does Netflix cost?</div>
                        <div>+</div>
                    </div>
                    <div className="QuestionMainFooter" style={{display: props.Count==5?'block':'none'}}>
                       <p>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from 29 zł to 60 zł a month. No extra costs, no contracts.</p>
                    </div>
                  </div>
                  <div className="QuestionMainOne">
                    <div className="QuestionMainHeader" onClick={()=>props.Zero(6)}>
                        <div>Where can I watch?</div>
                        <div>+</div>
                    </div>
                    <div className="QuestionMainFooter" style={{display: props.Count==6?'block':'none'}}>
                       <p>Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.

                        You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.</p>
                    </div>
                  </div>
                </div>       
            </div>
    )
}

export default Questions