export default function Projects() {

    return (
        <>
            <div id="projects">

                <h1>Projects</h1>

                Check out my most recent projects:
                <div className="box">
                    <img src="images/ai.jpg" alt="AI project" />
                    <h2 className="title">
                        Areivim USA
                    </h2>
                    <div className="button">
                        <a href="areivimusa.org" target="_blank">Visit website</a>
                    </div>
                </div>

                <div className="desc">
                    Yeshiva Keren Hatorah
                </div>
                <div className="button">
                    <a href="ykhp.org" target="_blank">Visit website</a>
                </div>
            </div>

            <div className="box">
                <img src="images/todo.jpg" alt="To DO list project" />
                <h2 className="title">
                    Shmiras Halashon Yomi
                </h2>
                <div className="button">
                    <a href="shmoirashalashonyomi.org..." target="_blank">Visit website</a>
                </div>
            </div>

            <div className="box">
                <img src="images/todo.jpg" alt="To DO list project" />
                <h2 className="title">
                   Chai Lifeline NJ Campus Campaign
                </h2>
                <div className="button">
                    <a href="shmoirashalashonyomi.org..." target="_blank">Visit website</a>
                </div>
            </div>
            <div className="box">
                <img src="images/backend.jpg" />
                <h2 className="title">
                    Chemed Health
                </h2> 
                <div className="button">
                    <a href="chemedhealth.org" target="_blank">Coming soon</a>
                </div>
            </div>

            <div className="box">
                <img src="images/backend.jpg" />
                <h2 className="title">
                    The Center NJ
                </h2>
                <div className="button">
                    <a href="thecenter.org" target="_blank">Coming soon</a>
                </div>
            </div>

            <div className="box">
                <img src="images/backend.jpg" />
                <h2 className="title">
                    Yeshiva Ketana of Long Island
                </h2>
                <div className="button">
                    <a href="ykli.org" target="_blank">Coming soon</a>
                </div>
            </div>

            <div className="box">
                <img src="images/Motivate.jpg" />
                <h2 className="title">
                    Motivate
                </h2>
                <div className="desc">
                    This is app does xyz
                </div>
                <div className="button">
                    <a href="git..." target="_blank">Visit project</a>
                </div>
            </div> 
        </>
    )
}