import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const BreadCrumbs = () => {
    const location = useLocation();
    let currentLink = "";
    const crumbs = location.pathname.split("/").filter(crumb => crumb !== "");
    return (
        <div className="breadcrumbs">
            {crumbs.map(crumb => {
                currentLink += `/${crumb}`
                return <div className="crumb" key={crumb}>
                    <Link to={currentLink}>{crumb}</Link>
                </div>
            })}
        </div>
    );
};

export default BreadCrumbs;