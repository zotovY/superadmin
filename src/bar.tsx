import React from 'react';
import { Link } from "react-router-dom";
import { appLogo, appLogoType } from "./settings";

import RequestIcon from "./static/requests.svg";


const LogoComp: React.FC = () => {
    if (appLogoType === "svg") {
        return <img src={appLogo} alt="Logo" />
    }

    return <React.Fragment />
}

const Bar: React.FC = () => {
    return <div className="leftside_bar">
        <div className="app-logo">
            <LogoComp />
        </div>
        <div className="divider"></div>
        <Link to="/admin/requests">
            <div className="tab" id="requests">
                <img src={RequestIcon} alt="requests" />
            </div>
        </Link>
    </div>
}

export default Bar;