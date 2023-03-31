import React, { Fragment } from 'react'
import {Link} from 'react-router-dom'
import HeaderBotton from '../../../components/HeaderBottom'
import HeaderTop from '../../../components/HeaderTop'
import Breadcumb from '../../../components/Breadcumb'
import NewsLetter from '../../../components/Newsletter'
import FooterArea from '../../../components/FooterArea'
import SearchSidebar from '../../../components/SearchSidebar'
import CetagorySidebar from '../../../components/CetagorySidebar'
import RecentPosts from '../../../components/RecentPosts'
import BlogPost from '../../../components/BlogPost'
import Tags from '../../../components/Tags'
import Instagram from '../../../components/Instagram'
import VirtualLegalComponent from "../../../components/VirtualLegal";
// images
import breadcumb from '../../../images/breadcumb/1.jpg'

import vl1 from '../../../images/VirtualLegal/vl1.png'
import vl2 from '../../../images/VirtualLegal/vl2.jpeg'
import vl3 from '../../../images/VirtualLegal/vl3.jpeg'
import vl4 from '../../../images/VirtualLegal/vl4.jpeg'
import vl5 from '../../../images/VirtualLegal/vl5.jpeg'
import vlcta1 from '../../../images/VirtualLegal/vlcta1.png'
import vlcta2 from '../../../images/VirtualLegal/vlcta2.png'
import vlcta3 from '../../../images/VirtualLegal/vlcta3.png'
import vlcta4 from '../../../images/VirtualLegal/vlcta4.png'
import vlplan1 from '../../../images/VirtualLegal/vlplan1.jpeg'
import vlplan2 from '../../../images/VirtualLegal/vlplan2.jpeg'
import vlpse from '../../../images/VirtualLegal/vlpse.jpeg'

import './style.css'

const breadcumbMenu = [
    { name: 'Home', route: '/' },
    { name: 'Virtual Legal' }
]

const VirtualLegal = () => {
    return (
        <Fragment>
            <header className="headerArea">
                <HeaderTop className="headerTop" />
                <HeaderBotton className="headerBottomArea headerBottomAreaStyelTwo" />
            </header>
            <Breadcumb
                className="breadcumbArea"
                title="Virtual Legal"
                breadcumbMenu={breadcumbMenu}
                background={breadcumb}
            />
            <div className="blogPostArea blogPostLeftArea">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <img src={vl1} alt="Virtual Legal 1" />
                            <img src={vl2} alt="Virtual Legal 2" />
                            <img src={vl3} alt="Virtual Legal 3" />
                            
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4 text-center">
                            <a href="docs/CONDICIONES_PLAN_GOLD_ANUAL_2023.pdf" >
                                <img src={vlplan1} alt="Virtual Legal plan1" />
                            </a>
                        </div>
                        <div class="col-md-4 text-center">
                            <a href="docs/CONDICIONES_PLAN_STANDAR_2023.pdf" >
                                <img src={vlplan2} alt="Virtual Legal plan2" />
                            </a>
                        </div>
                        <div class="col-md-4 text-center">
                            <a href="https://checkout.wompi.co/l/znJdOy" target="_blank">
                                <img src={vlpse} alt="Virtual Legal pse" />
                            </a>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-3 text-center">
                            <img src={vlcta1} alt="Virtual Legal cta1" />
                        </div>
                        <div class="col-md-3 text-center">
                            <img src={vlcta2} alt="Virtual Legal cta2" />
                        </div>
                        <div class="col-md-3 text-center">
                            <img src={vlcta3} alt="Virtual Legal cta3" />
                        </div>
                        <div class="col-md-3 text-center">
                            <img src={vlcta4} alt="Virtual Legal cta4" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12 text-center">
                            <img src={vl4} alt="Virtual Legal 4" />
                            <img src={vl5} alt="Virtual Legal 5" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12 text-center">
                            <VirtualLegalComponent />
                        </div>
                    </div>

                </div>
            </div>
            {/* <NewsLetter
                className="newsLetterArea"
            /> */}
            <FooterArea />
        </Fragment>
    )
}
export default VirtualLegal