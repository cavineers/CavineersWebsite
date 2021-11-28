// Global Imports
import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './styles/css/Sponsors.css';

// Image Imports
import ASHSLogo from './styles/img/sponsors/ASHS.png';
import ClearEdgeLogo from './styles/img/sponsors/ClearEdgeIT.png';
import RaskobLogo from './styles/img/sponsors/raskobFoundation.jpg';
import BoozAllen from './styles/img/sponsors/boozAllen.png';
import Ciena from './styles/img/sponsors/Ciena.png';
import DeGrange from './styles/img/sponsors/degrange.png';
import LGTek from './styles/img/sponsors/LG-Tek.jpg';
import OPS from './styles/img/sponsors/OPSConsulting.jpg';
import DOD from './styles/img/sponsors/US_DOD.png';
import WeatherGage from './styles/img/sponsors/weathergage.png';

class Sponsors extends React.Component {
    componentDidMount() {
        AOS.init({
            offset: 50,
            duration: 1500,
        });
    }

    render() {
        return (
            <div className="Sponsors">
                <br />
                <br />
                <br />
                <h1 style={{ textAlign: 'center' }}>Our Sponsors</h1>
                <h3 style={{ textAlign: 'center' }}>
                    Thank you to all of our sponsors for their incredible support!
                    <br />
                    <a
                        className="cons"
                        style={{ fontSize: '17px' }}
                        target="_blank"
                        href="https://05592312-dc86-4140-acf3-b153752ef285.filesusr.com/ugd/fdf981_fc86978c525c4ebeac281e2738c66cbe.pdf"
                        rel="noreferrer"
                    >
                        Please Consider Sponsoring us!
                    </a>
                </h3>
                <br />
                <h2 style={{ color: 'rgb(223, 14, 14)', fontSize: '35px' }}>
                    <em>Title Sponsors:</em>
                </h2>
                <br />
                <img alt="ClearEdge IT" src={ClearEdgeLogo} height="145px" width="60%" />
                <br />
                <br />
                <br />
                <table>
                    <tr>
                        <td>
                            <img alt="Raskob Foundation" src={RaskobLogo} style={{ width: '810px', height: 'auto' }} />
                        </td>
                        <td>
                            <img alt="Archbishop Spalding High School" src={ASHSLogo} height="40%" width="75%" />
                        </td>
                    </tr>
                </table>
                <br />
                <h2 style={{ color: 'rgb(223, 14, 14)', fontSize: '35px' }}>
                    <em>Platinum Sponsors:</em>
                </h2>
                <br />
                <img alt="OPS Consulting" src={OPS} height="135px" width="50%" />
                <br />
                <br />
                <table>
                    <tr>
                        <div style={{ display: 'flex' }}>
                            <td style={{ width: '40%' }}>
                                <img alt="United States Department of Defense" src={DOD} height="135px" width="42%" />
                            </td>
                            <td style={{ width: '60%' }}>
                                <p style={{ fontWeight: 700, fontSize: '5vw' }}>The Gardiner Family</p>
                            </td>
                        </div>
                    </tr>
                </table>
                <br />
                <h2 style={{ color: 'rgb(223, 14, 14)', fontSize: '35px' }}>
                    <em>Gold Sponsors:</em>
                </h2>
                <br />
                <table>
                    <tr>
                        <div style={{ display: 'flex' }}>
                            <td style={{ width: '40%' }}>
                                <img alt="Booz Allen Hamilton" src={BoozAllen} height="40%" width="100%" />
                            </td>
                            <td>
                                <img alt="Ciena" src={Ciena} height="40%" width="75%" />
                            </td>
                        </div>
                    </tr>
                </table>
                <br />
                <br />
                <table>
                    <tr>
                        <div style={{ display: 'flex' }}>
                            <td style={{ width: '40%' }}>
                                <img alt="LG-TEK" src={LGTek} height="135px" width="75%" />
                            </td>
                            <td>
                                <img alt="Weather Gage Technologies" src={WeatherGage} height="100px" width="75%" />
                            </td>
                        </div>
                    </tr>
                </table>
                <h2 style={{ color: 'rgb(223, 14, 14)', fontSize: '35px' }}>
                    <em>Silver Sponsors:</em>
                </h2>
                <br />
                <table>
                    <tr>
                        <div style={{ display: 'flex' }}>
                            <td style={{ width: '40%' }}>
                                <img alt="The DeGrange Family" src={DeGrange} height="40%" width="100%" />
                            </td>
                            <td style={{ width: '60%' }}>
                                <p style={{ fontWeight: 700, fontSize: '5vw' }}>The Ugiansky Family</p>
                            </td>
                        </div>
                    </tr>
                </table>
                <br />
                <br />
                <table>
                    <tr>
                        <div style={{ display: 'flex' }}>
                            <td style={{ width: '60%' }}>
                                <p style={{ fontWeight: 700, fontSize: '5vw' }}>The Tracy Family</p>
                            </td>
                            <td style={{ width: '60%' }}>
                                <p style={{ fontWeight: 700, fontSize: '5vw' }}>The Farrel Family</p>
                            </td>
                        </div>
                    </tr>
                </table>
                <h2 style={{ color: 'rgb(223, 14, 14)', fontSize: '35px' }}>
                    <em>Bronze Sponsors:</em>
                </h2>
                <br />
                <p style={{ fontWeight: 700, fontSize: '5vw', margin: 0 }}>The Greenhill Family</p>
            </div>
        );
    }
}

export default Sponsors;
