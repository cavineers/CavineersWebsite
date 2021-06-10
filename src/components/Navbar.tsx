import React from 'react';
import { Main } from '../scripts/main';
import './styles/Navbar.css';
import 'font-awesome/css/font-awesome.min.css';

const Navbar = () => (
    <div className="navbar">
        <span className="open-slide">
            <button type="button" onClick={() => Main.openSide()}>
                <svg width="30" height="30">
                    <path d="M0,5 30,5" stroke="#fff" strokeWidth="5" />
                    <path d="M0,14 30,14" stroke="#fff" strokeWidth="5" />
                    <path d="M0,23 30,23" stroke="#fff" strokeWidth="5" />
                </svg>
            </button>
        </span>
        <div className="topnav">
            <div style={{ float: 'left' }}>
                <a href="/">Home</a>
                <a href="/about">About Us</a>
                <a href="/outreach">Outreach</a>
                <a href="/sponsors">Sponsors</a>
                <div className="dropdown">
                    <a href="/bots" className="dropbtn">
                        Meet Our Robots
                        <i style={{ marginLeft: '4px' }} className="fa fa-caret-down" />
                    </a>
                    <div className="dropdown-content">
                        <a href="/bots/2019">2019</a>
                        <a href="/bots/2018">2018</a>
                        <a href="/bots/2017">2017</a>
                        <a href="/bots/2016">2016</a>
                        <a href="/bots/2015">2015</a>
                        <a href="/bots/2014">2014</a>
                        <a href="/bots/2013">2013</a>
                    </div>
                </div>
            </div>
            <div style={{ float: 'right' }}>
                <a target="__blank" className="socialMedia" href="https://github.com/cavineers">
                    <i className="fa fa-github" />
                </a>
                <a target="__blank" href="https://www.instagram.com/4541cavineers/?hl=en" className="socialMedia">
                    <i className="fa fa-instagram" />
                </a>
                <a target="__blank" href="https://twitter.com/4541cavineers" className="socialMedia">
                    <i className="fa fa-twitter" />
                </a>
                <a target="__blank" href="https://www.youtube.com/channel/UCU1wWjfG1Zcf-MTvqTj79Fg" className="socialMedia">
                    <i className="fa fa-youtube" />
                </a>
            </div>
        </div>
    </div>
);

export default Navbar;
