import resume from './assets/devorah_kogan.pdf';

export default function Skills() {

    return (
        <>
            <div id="resume">
                <h1>Resume</h1>
                <div>
                    <a href={resume} download className="btn button">Download Resume <i class="fa-solid fa-download"></i></a>
                </div>
            </div>
        </>
    )
}
