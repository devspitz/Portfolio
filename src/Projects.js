import Slider from 'react-slick';
import areivim from './assets/project-areivim.png';
import ykh from './assets/project-ykh.png';
import ykli from './assets/project-ykli.png';
import scs from './assets/project-scs.png';
import pedistat from './assets/project-pedistat.png';
import shy from './assets/project-shy.png';
import nah from './assets/project-nah.png';
import madraigos from './assets/project-madraigos.png';
import chemed from './assets/project-chemed.png';
import campus from './assets/project-campus.png';

export default function Projects() {


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const data = [
        {
            id: 1,
            image: areivim,
            title: 'Areivim USA',
            link: 'https://www.areivimusa.org'
        }, {
            id: 2,
            image: ykh,
            title: 'Yeshiva Keren Hatorah',
            link: 'https://www.ykhpc.com/'
        }, {
            id: 3,
            image: ykli,
            title: 'Yeshiva Ketanah of Long Island',
            link: 'https://www.ykli.org'
        }, {
            id: 4,
            image: scs,
            title: 'The Specail Childrens Center',
            link: 'https://www.thecenternj.org'
        }, {
            id: 5,
            image: pedistat,
            title: 'Pedistat',
            link: 'https://www.pedistat.com'
        }, {
            id: 6,
            image: shy,
            title: 'Shmiras Halashon Yomi',
            link: 'https://www.pedistat.com'
        }, {
            id: 7,
            image: nah,
            title: 'Nishei Adirei Hatorah',
            link: 'https://www.adirei.com'
        }, {
            id: 8,
            image: campus,
            title: 'Chai Lifeline NJ Capital Campaign',
            link: 'https://www.chailifeline.org/njcenter'
        }, {
            id: 9,
            image: chemed,
            title: 'Chemed Health',
            link: 'https://www.chemedhealth.org'
        }, {
            id: 9,
            image: madraigos,
            title: 'Madraigos',
            link: 'https://www.madraigos.org'
        }
    ]


    return (
        <>
            <div id="projects">

                <h1>Projects</h1>

                Check out my most recent projects:
                <div className='slider-wrapper'{...settings}> 
                        {data.map((item) => (
                            <div key={item.id}>
                                <img src={item.image} alt={item.title} width="100%" />
                                <p className="caption">
                                    {item.title}
                                </p>
                                <a href='{item.link}'>Visit <i class="fa-solid fa-arrow-right"></i></a>
                            </div>
                        ))}
                    </div>
 
                {/*  Slider <div className="box">
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
                    </div>   </div>  */}

            </div>
        </>
    )
}