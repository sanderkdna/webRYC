import React, { Fragment } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionTitle from '../Title'
import './style.css'

// images
import teamMember1 from '../../images/gallery/DSC08574-2.jpeg'
import teamMember2 from '../../images/gallery/DSC08646-2.jpeg'
import teamMember3 from '../../images/gallery/DSC08765-2.jpeg'
import teamMember4 from '../../images/gallery/DSC08783-2.jpeg'
import teamMember5 from '../../images/gallery/DSC08824-2.jpeg'
import teamMember6 from '../../images/gallery/DSC08994-2.jpeg'
import teamMember7 from '../../images/gallery/DSC09085-2.jpeg'

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
const TeamGallery = ({ className, title, subTitle, slider, noGutters }) => {
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
                    <div className="col-12">
                        <Slider className="teamSlideArea" {...settings}>
                            {teams.map((team, i) => (
                                <div key={i} className="teamWrapper">
                                    <div className="teamImageGallery">
                                        <img src={team.image} alt="" />
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TeamGallery