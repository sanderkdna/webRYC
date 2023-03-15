import React from "react";
import './style.css'
const SectionTitle = ({ subTitle, title }) => {
    return (
        <div className="sectionTitle">
            <span>{subTitle}</span>
            <h2>{title}</h2>
        </div>
    )
}
export default SectionTitle