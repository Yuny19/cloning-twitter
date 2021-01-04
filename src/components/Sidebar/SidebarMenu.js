import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './sidebarMenu.css';

const SidebarMenu = ({ onClickHandler, text, icon }) => {
    return (
        <div className="sidebarMenu" onClick={onClickHandler && onClickHandler}>
            <FontAwesomeIcon className="icon" icon={icon} />
            <h2>{text}</h2>
        </div>
    )
}

export default SidebarMenu
