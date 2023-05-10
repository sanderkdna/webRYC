import React from 'react'
import avatarImg from '../../images/practice/4.jpg'

import './style.css'

const listItem = [
    {title:'Politica y objetivos de SST V4', 'link' : 'docs/O-GD-003_Politica_y_objetivos_de_calidad_V4.pdf'},
    {title:'Politica y objetivos de calidad V4', 'link' : 'docs/O-GD-004_Politica_y_objetivos_de_SST_V4.pdf'},
    {title:'Politica Preventiva de Acoso Laboral V1', 'link' : 'docs/O-GD-009_Politica_no_drogas_alcohol_y_tabaco_V3.pdf'},
    {title:'Politica no drogas, alcohol y tabaco V3', 'link' : 'docs/O-GD-010_Politica_Preventiva_de_Acoso_Laboral_V1.pdf'},
    {title:'Reglamento de Higiene y Seguridad Industrial V4', 'link' : 'docs/O-GD-011_Política_de_desconexión_laboral_V0.pdf'},
    {title:'Política de desconexión laboral V0', 'link' : 'docs/O-HS-003_Reglamento_de_Higiene_y_Seguridad_Industrial_V4.pdf'},
    {title:'Política de Seguridad y Privacidad de la Información', 'link' : 'docs/POLITICAS-DE-SEGURIDAD-Y-PRIVACIDAD-DE-LA-INFORMACION-RODRIGUEZ-CORREA-ABOGADOS-2023.pdf'}

]

const SingleContentArea = ({ className, avatar, image }) => {
    return (
        <div className={className}>
            <div className="singleContentWrap">
                <h3>Conoce nuestras políticas y protocolos internos</h3>
                <p>Contamos con certificacionces ISO, por tanto es importante para nosotros contar con diferentes tipos de políticas y protocolos</p>
                {avatar && (
                    <div className="avatarWra">
                        <div className="row">
                            <div className="col-md-4">
                                <img src={avatarImg} alt="" />
                            </div>
                            <div className="col-md-8">
                                <h4>Políticas y Protocolos</h4>
                                <ul>
                                    {listItem.map(list => (
                                        <li key={list.title}>

                                            <a href={list.link} target="_blank">
                                                {list.title}
                                            </a>
                                        </li>
                                    ))}

                                </ul>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
export default SingleContentArea