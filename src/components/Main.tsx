// Global Imports
import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
// StyleSheet / Image Imports
import Logo from './styles/img/logo.png';
import Video from './styles/img/homepage.mp4';
import FirstLogo from './styles/img/firstLogo.svg';
import ASHSLogo from './styles/img/sponsors/ASHS.png';
import ClearEdgeLogo from './styles/img/sponsors/ClearEdgeIT.png';
import RaskobLogo from './styles/img/sponsors/raskobFoundation.jpg';

import './styles/Homepage.css';
import './styles/Video.css';

class Homepage extends React.Component {
    componentDidMount() {
        AOS.init({
            offset: 50,
            duration: 1500,
        });
        // @ts-ignore
        document.querySelector('video').playbackRate = 0.8;
    }

    render() {
        return (
            <div className="wholeScreen">
                <header className="v-header container">
                    <div className="fullscreen-video-wrap">
                        <video src={Video} muted autoPlay loop />
                    </div>
                    <div className="header-overlay" />
                    <div className="header-content text-md-center">
                        <div className="alert">
                            <a href="/about#Covid" className="alertCovid">
                                Read about what we are doing under Covid-19
                            </a>
                        </div>
                        <h1>4541 Cavineers</h1>
                        <p>
                            Team 4541’s mission is to instruct and inspire the next generation of engineers. We have ignited a
                            spark of inspiration in our community, and now it is our team’s responsibility to fan the flame.
                        </p>
                        <div className="btnDiv">
                            <a href="/about" className="btn">
                                Find Out More
                            </a>
                        </div>
                    </div>
                </header>
                <br />
                <div className="div-container">
                    <div className="colors">
                        <br />
                        <div
                            style={{
                                display: 'flex',
                                marginLeft: '55px',
                                marginRight: '50px',
                                justifyContent: 'space-between',
                            }}
                        >
                            <div>
                                <p
                                    style={{
                                        fontSize: '7vw',
                                        color: '#258ede',
                                        lineHeight: 1,
                                        letterSpacing: 0,
                                        fontWeight: 500,
                                    }}
                                >
                                    Innovative.
                                    <br />
                                    Collaborative.
                                    <br />
                                    Inspired.
                                </p>
                            </div>
                            <div>
                                <img src={Logo} alt="4541 Logo" style={{ float: 'right' }} width="300" height="auto" />
                            </div>
                        </div>
                        <br />
                        <div style={{ display: 'flex', flexWrap: 'wrap', marginLeft: '55px', marginRight: '30px' }}>
                            <div className="banner">
                                <img src={FirstLogo} alt="FIRST" height="55px" width="60px" />
                                <div className="award-name">
                                    <span>Chairman&apos;s Award</span>
                                </div>
                                <div className="award-event">
                                    <span style={{ fontSize: '17px' }}>2020 CHS DISTRICT</span>
                                </div>
                            </div>
                            <div className="banner" style={{ marginLeft: '20px' }}>
                                <img src={FirstLogo} alt="FIRST" height="55px" width="60px" />
                                <div className="award-name">
                                    <span>Chairman&apos;s Award</span>
                                </div>

                                <div className="award-event" style={{ marginLeft: '20px' }}>
                                    <span style={{ fontSize: '17px' }}>2019 OXON HILL MD DISTRICT</span>
                                </div>
                            </div>
                            <div className="banner" style={{ marginLeft: '20px' }}>
                                <img src={FirstLogo} alt="FIRST" height="55px" width="60px" />
                                <div className="award-name ">
                                    <span>Winner</span>
                                </div>

                                <div className="award-event">
                                    <span style={{ fontSize: '17px' }}>2019 CHESAPEAKE DISTRICT CHAMPIONSHIP</span>
                                </div>
                            </div>
                            <div className="banner" style={{ marginLeft: '20px' }}>
                                <img src={FirstLogo} alt="FIRST" height="55px" width="60px" />
                                <div className="award-name">
                                    <span>Winner</span>
                                </div>

                                <div className="award-event">
                                    <span style={{ fontSize: '17px' }}>2018 ARCHIMEDES DIVISION</span>
                                </div>
                            </div>
                            <br />
                            <br />
                            <br />
                            <br />
                        </div>
                        <br />
                    </div>
                    <div style={{ background: 'rgb(41, 38, 38)' }}>
                        <table className="sponsors" cellSpacing="60">
                            <tr>
                                <th>
                                    <h1
                                        className="sponsorsTags"
                                        style={{ fontSize: '50px', textShadow: '2px 2px 5px red', textAlign: 'center' }}
                                    >
                                        Our Sponsors
                                    </h1>
                                </th>
                                <th>
                                    <a
                                        href="sponsors.html"
                                        style={{ color: '#fff', textAlign: 'center', fontSize: '23px' }}
                                        className="linkSpo"
                                    >
                                        Learn More About All Our Sponsors
                                    </a>
                                    <br />
                                    <a
                                        href="https://05592312-dc86-4140-acf3-b153752ef285.filesusr.com/ugd/fdf981_fc86978c525c4ebeac281e2738c66cbe.pdf"
                                        target="__blank"
                                        style={{ color: '#fff', textAlign: 'center', fontSize: '23px' }}
                                        className="linkSpo"
                                    >
                                        Want to Sponsor Us?
                                    </a>
                                </th>
                            </tr>
                        </table>
                        <div className="grid-container">
                            <div className="grid-item">
                                <img src={ClearEdgeLogo} alt="ClearEdge IT" height="165px" width="65%" />
                            </div>
                            <div className="grid-item">
                                <img src={RaskobLogo} alt="Raskob Foundation" height="25%" width="55%" />
                            </div>
                            <div className="grid-item">
                                <img src={ASHSLogo} alt="Archbishop Spalding" height="40%" width="75%" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Homepage;
