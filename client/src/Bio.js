import resume from './assets/devorah_kogan.pdf';

export default function Bio() {

    return (
        <>
            <div id="bio" >
                <h1>Bio</h1>
                <div className='bioDiv'>
                    <p>
                        When working with me on a project you'll notice my critical thinking, strong communication skills and analytical
                        abilities. You will also notice that working under pressure with a flexible, positive
                        attitude are key strong points for me.<br />
                        With training in both front-end and back-end
                        programming, I'm proficient in a great variety of
                        programming languages, with a special interest in the MERN stack.<br />
                        I am eager to invest myself in a junior software
                        development position.
                    </p>
                    <h2>"Working under pressure with a flexible, positive
                        attitude are key strong points for me."</h2>
                    <div className='resume'>
                        <a href={resume} download className="btn button">Download Resume <i className="fa-solid fa-download"></i></a>
                    </div>
                </div>
            </div>
        </>
    )
}