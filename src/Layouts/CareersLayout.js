import React from 'react';
import { Outlet } from 'react-router-dom';

const CareersLayout = () => {
    return (
        <div className="careers-layout">
            <h2>Careers!</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, in cupiditate hic repudiandae saepe voluptatibus facilis commodi earum dolores officiis.</p>
            <Outlet></Outlet>
        </div>
    );
};

export default CareersLayout;