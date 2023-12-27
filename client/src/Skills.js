import Express from './assets/express.png';

export default function Skills() {

    return (
        <>
            <div id="skills">
                <h1>Skills</h1>
                <div className="flex">
                    <div className="box">
                        <i className="fa fa-brands fa-html5"></i>
                        <h2 className="title">
                            HMTL
                        </h2>

                    </div>
                    <div className="box">
                        <i className="fa fa-brands fa-css3"></i>
                        <h2 className="title">
                            CSS   </h2>

                    </div>

                    <div className="box">
                        <i className="fa fa-brands fa-js"></i>
                        <h2 className="title">
                            JavaScript
                        </h2>
                    </div> 
                    
                    <div className="box">
                        <i className="fa fa-solid fa-leaf"></i>
                        <h2 className="title">
                            Mongo DB
                        </h2>

                    </div>
                    <div className="box express">
                        <img src={Express} alt="Express JS"   width="90%" />
                        <h2 className="title">
                            Express
                        </h2>

                    </div>

                    <div className="box">
                        <i className="fa fa-brands fa-react"></i>
                        <h2 className="title">
                            React.JS
                        </h2>

                    </div>

                    <div className="box">
                        <i className="fa fa-brands fa-node-js"></i>
                        <h2 className="title">
                            Node.JS
                        </h2>

                    </div>

                    <div className="box"><i className="fa fa-brands fa-java"></i>
                        <h2 className="title">
                            Java
                        </h2>

                    </div>

                    <div className="box">
                        <i className="fa fa-brands fa-python"></i>
                        <h2 className="title">
                            Python
                        </h2>

                    </div>

                    <div className="box">
                        <i className="fa fa-brands fa-php"></i>
                        <h2 className="title">
                            PHP
                        </h2>

                    </div>

                    <div className="box">
                        <i className="fa fa-solid fa-database"></i>
                        <h2 className="title">
                            SQL
                        </h2>

                    </div>

                </div>
            </div>

        </>
    )
}