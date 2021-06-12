import React from 'react';
import { Main } from '../scripts/main';
import './styles/css/Navbar.css';

const Sidemenu = () => (
    <div className="Navbar">
        <div id="side-menu" className="side-nav">
            <button type="button" className="btn-close" onClick={() => Main.closeSide()}>
                &times;
            </button>
            <a href="/">Home</a>
            <a href="/outreach">Outreach</a>
            <a href="/about">About Us</a>
            <a href="/sponsors">Our Sponsors</a>
            <a href="/bots">Meet Our Bots</a>
            <a href="/bots/2019">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-2019</a>
            <a href="/bots/2018">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-2018</a>
            <a href="/bots/2017">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-2017</a>
            <a href="/bots/2016">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-2016</a>
            <a href="/bots/2015">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-2015</a>
            <a href="/bots/2014">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-2014</a>
            <a href="/bots/2013">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-2013</a>
        </div>
    </div>
);

export default Sidemenu;
