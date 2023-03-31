import React, { Fragment } from 'react'
import HeaderBotton from '../../../components/HeaderBottom'
import HeaderTop from '../../../components/HeaderTop'
import Breadcumb from '../../../components/Breadcumb'
import NewsLetter from '../../../components/Newsletter'
import CetagorySidebar from '../../../components/CetagorySidebar'
import FooterArea from '../../../components/FooterArea'
import BannerSidebar from '../../../components/BannerSidebar'
import SingleContentArea from '../../../components/SingleContentArea'

// images
import breadcumb from '../../../images/breadcumb/1.jpg'
import banner from '../../../images/practice/2.jpg'
import single from '../../../images/practice/3.jpg'

import './style.css'


const breadcumbMenu = [
    { name: 'Home', route: '/' },
    { name: 'Políticas y Protocolos' }
]



const PracticeSinglePage = () => {
    return (
        <Fragment>
            <header className="headerArea">
                <HeaderTop className="headerTop" />
                <HeaderBotton className="headerBottomArea headerBottomAreaStyelTwo" />
            </header>
            <Breadcumb
                className="breadcumbArea"
                title="Políticas y Protocolos en Rodriguez & Correa Abogados"
                breadcumbMenu={breadcumbMenu}
                background={breadcumb}
            />
            <div className="singleArea">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <SingleContentArea
                                className="singleContentArea"
                                image={single}
                                avatar={true}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <FooterArea />
        </Fragment>
    )
}
export default PracticeSinglePage