import React, { Fragment } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionTitle from '../Title'
import './style.css'

// images
import teamMember1 from '../../images/expert/1.png'
import teamMember2 from '../../images/expert/2.png'
import teamMember3 from '../../images/expert/3.png'
import teamMember4 from '../../images/expert/4.png'
import teamMember5 from '../../images/expert/5.png'
import teamMember6 from '../../images/expert/6.png'
import teamMember7 from '../../images/expert/7.png'
import teamMember8 from '../../images/expert/8.png'
import teamMember9 from '../../images/expert/9.png'
import teamMember10 from '../../images/expert/10.png'
import teamMember11 from '../../images/expert/11.png'
import teamMember12 from '../../images/expert/12.png'
import teamMember13 from '../../images/expert/13.png'
import teamMember14 from '../../images/expert/14.png'
import teamMember15 from '../../images/expert/15.png'
import teamMember16 from '../../images/expert/16.png'
import teamMember17 from '../../images/expert/17.png'
import teamMember18 from '../../images/expert/18.png'
import teamMember19 from '../../images/expert/19.png'
import teamMember20 from '../../images/expert/20.png'


const teams = [
    {
        name: 'Alecgander Harry', level: 'Business Lawyer', image: teamMember1, socialMedia: [
            'facebook', 'twitter', 'linkedin'
        ]
    },
    {
        name: 'Lily Watson', level: 'Family Lawyer', image: teamMember2, socialMedia: [
            'facebook', 'twitter', 'linkedin'
        ]
    },
    {
        name: 'Willam Stephen', level: 'Criminal Lawyer', image: teamMember3, socialMedia: [
            'facebook', 'twitter', 'linkedin'
        ]
    },
    {
        name: 'Eshan Golly', level: 'Business Lawyer', image: teamMember4, socialMedia: [
            'facebook', 'twitter', 'linkedin'
        ]
    },
    {
        name: 'Daniel Dambeldor', level: 'Family Lawyer', image: teamMember5, socialMedia: [
            'facebook', 'twitter', 'linkedin'
        ]
    },
    {
        name: 'Darcy Alec', level: 'Criminal Lawyer', image: teamMember6, socialMedia: [
            'facebook', 'twitter', 'linkedin'
        ]
    },
    {
        name: 'Darcy Alec', level: 'Criminal Lawyer', image: teamMember7, socialMedia: [
            'facebook', 'twitter', 'linkedin'
        ]
    },
    {
        name: 'Darcy Alec', level: 'Criminal Lawyer', image: teamMember8, socialMedia: [
            'facebook', 'twitter', 'linkedin'
        ]
    },
    {
        name: 'Darcy Alec', level: 'Criminal Lawyer', image: teamMember9, socialMedia: [
            'facebook', 'twitter', 'linkedin'
        ]
    },
    {
        name: 'Darcy Alec', level: 'Criminal Lawyer', image: teamMember10, socialMedia: [
            'facebook', 'twitter', 'linkedin'
        ]
    },
    {
        name: 'Darcy Alec', level: 'Criminal Lawyer', image: teamMember11, socialMedia: [
            'facebook', 'twitter', 'linkedin'
        ]
    },
    {
        name: 'Darcy Alec', level: 'Criminal Lawyer', image: teamMember12, socialMedia: [
            'facebook', 'twitter', 'linkedin'
        ]
    },
    {
        name: 'Darcy Alec', level: 'Criminal Lawyer', image: teamMember13, socialMedia: [
            'facebook', 'twitter', 'linkedin'
        ]
    },
    {
        name: 'Darcy Alec', level: 'Criminal Lawyer', image: teamMember14, socialMedia: [
            'facebook', 'twitter', 'linkedin'
        ]
    },
    {
        name: 'Darcy Alec', level: 'Criminal Lawyer', image: teamMember15, socialMedia: [
            'facebook', 'twitter', 'linkedin'
        ]
    },
    {
        name: 'Darcy Alec', level: 'Criminal Lawyer', image: teamMember16, socialMedia: [
            'facebook', 'twitter', 'linkedin'
        ]
    },
    {
        name: 'Darcy Alec', level: 'Criminal Lawyer', image: teamMember17, socialMedia: [
            'facebook', 'twitter', 'linkedin'
        ]
    },
    {
        name: 'Darcy Alec', level: 'Criminal Lawyer', image: teamMember18, socialMedia: [
            'facebook', 'twitter', 'linkedin'
        ]
    },
    {
        name: 'Darcy Alec', level: 'Criminal Lawyer', image: teamMember19, socialMedia: [
            'facebook', 'twitter', 'linkedin'
        ]
    },
    {
        name: 'Darcy Alec', level: 'Criminal Lawyer', image: teamMember20, socialMedia: [
            'facebook', 'twitter', 'linkedin'
        ]
    },
]

const settings = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2
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
const TeamMember = ({ className, title, subTitle, slider, noGutters }) => {
    return (
        <div className={className}>
            <div className="container">
                <div className={!noGutters ? 'row' : 'row no-gutters'}>
                    <div className="col-12">
                        <SectionTitle
                            title={title}
                            subTitle={subTitle}
                        />
                    </div>
                    {slider ? (
                        <div className="col-12">
                            <Slider className="teamSlideArea" {...settings}>
                                {teams.map((team, i) => (
                                    <div key={i} className="teamWrapper">
                                        <div className="teamImage">
                                            <img src={team.image} alt="" />
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    ) : (
                            <Fragment>
                                {teams.map((team, i) => (
                                    <div key={i} className="col-lg-4 col-md-6 col-12">
                                        <div className="teamWrapper">
                                            <div className="teamImageFragment">
                                                <img src={team.image} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Fragment>
                        )}
                </div>
            </div>
        </div>
    )
}
export default TeamMember