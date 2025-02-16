import React from 'react';
import iconGrid from "../../assets/icons/iconGrid.svg";
import userIcon from "../../assets/icons/userIcon.svg";
import codeIcon from "../../assets/icons/codeIcon.svg";
import monitorIcon from "../../assets/icons/monitorIcon.svg";
import editIcon from "../../assets/icons/editIcon.svg";
import mailWhiteIcon from "../../assets/icons/mailWhiteIcon.svg";
import "./index.scss";

const NavigationComponent = () => {
  return (
    <div className='navigation-container'>
        <div className='navigation-icon icon-grid'>
            <img src={iconGrid} alt="Icon grid icon" className="icon"/>
        </div>
        <div className='navigation-icon'>
            <img src={userIcon} alt="User icon" className="icon"/>
        </div>
        <div className='navigation-icon'>
            <img src={codeIcon} alt="Code icon" className="icon"/>
        </div>
        <div className='navigation-icon'>
            <img src={monitorIcon} alt="Monitor icon" className="icon"/>
        </div>
        <div className='navigation-icon'>
            <img src={editIcon} alt="Edit icon" className="icon"/>
        </div>
        <div className='navigation-icon'>
            <img src={mailWhiteIcon} alt="Mail icon" className="icon"/>
        </div>
    </div>
  )
}

export default NavigationComponent