import React, { Fragment } from 'react'
import HeaderBotton from '../../../components/HeaderBottom'
import HeaderTop from '../../../components/HeaderTop'
import Breadcumb from '../../../components/Breadcumb'
import TeamMember from '../../../components/TeamMember'
import NewsLetter from '../../../components/Newsletter'
import FooterArea from '../../../components/FooterArea'
// images
import breadcumb from '../../../images/breadcumb/1.jpg'

import './style.css'

const breadcumbMenu = [
    { name: 'Home', route: '/' },
    { name: 'Nuestros Clientes' }
]

const TeamPage = () => {
    return (
        <Fragment>
            <header className="headerArea">
                <HeaderTop className="headerTop" />
                <HeaderBotton className="headerBottomArea headerBottomAreaStyelTwo" />
            </header>
            <Breadcumb
                className="breadcumbArea"
                title="Nuestros Clientes"
                breadcumbMenu={breadcumbMenu}
                background={breadcumb}
            />
            <TeamMember
                title="Contamos con una amplia cartera de clientes, entre ellos se encuentran:"
                subTitle="Algunos de nuestros clientes"
                className="teamArea teamAreaStyleTwo"
                noGutters={true}
                slider={false}
            />
            <NewsLetter
                className="newsLetterArea"
            />
            <FooterArea />
        </Fragment>
    )
}
export default TeamPage