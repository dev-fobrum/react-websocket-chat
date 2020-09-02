import React from 'react'

import './InfoBar.css'

import onlineIcon from '../../assets/onlineIcon.png'
import closeIcon from '../../assets/closeIcon.png'

const infoBar = ({ room }) => (
    <div className="infoBar">
        <div className="leftInnerContainer">
            <img src={onlineIcon} alt="Online Icon" className="onlineIcon" />
            <h3>{room}</h3>
        </div>

        <div className="rightInnerContainer">
            <a href="/">
                <img src={closeIcon} alt="Close Icon" />
            </a>
        </div>
    </div>
)

export default infoBar