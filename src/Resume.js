import resume from './assets/devorah_kogan.pdf';

export default function Skills() {

    return (
        <>
            <div id="resume">
                <h1>Resume</h1>
                <a href={resume} download className="btn button">Download Resume</a> 
            </div>
        </>
    )
}
