import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const HelpLayout = () => {
    return (
        <div className="help-layout">
            <h2>website help .</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, tempora.</p>
            <nav>
                <NavLink to="faq">View The Faq</NavLink>
                <NavLink to="contact">Contact Us</NavLink>
            </nav>
            <Outlet></Outlet>

        </div>
    );
};

export default HelpLayout;