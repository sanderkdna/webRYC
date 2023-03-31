import React, { Fragment } from 'react'
import HeaderBotton from '../../../components/HeaderBottom'
import HeaderTop from '../../../components/HeaderTop'
import Breadcumb from '../../../components/Breadcumb'
import TeamGallery from '../../../components/TeamGallery'
import NewsLetter from '../../../components/Newsletter'
import FooterArea from '../../../components/FooterArea'
// images
import breadcumb from '../../../images/breadcumb/1.jpg'

import './style.css'

const breadcumbMenu = [
    { name: 'Home', route: '/' },
    { name: 'Galería de imagenes' }
]

const Gallery = () => {
    return (
        <Fragment>
            <header className="headerArea">
                <HeaderTop className="headerTop" />
                <HeaderBotton className="headerBottomArea headerBottomAreaStyelTwo" />
            </header>
            <Breadcumb
                className="breadcumbArea"
                title="Nuestro Equipo de Trabajo"
                breadcumbMenu={breadcumbMenu}
                background={breadcumb}
            />
            <TeamGallery
                title="Nuestro Equipo de Trabajo"
                subTitle="Conoce nuestro equipo de trabajo"
                className="teamArea teamAreaStyleTwo"
                noGutters={false}
                slider={true}
            />
            <FooterArea />
        </Fragment>
    )
}
export default Gallery