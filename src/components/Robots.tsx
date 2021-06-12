/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
/* eslint-disable react/destructuring-assignment */

import React from 'react';
import PropTypes from 'prop-types';
import Footer from './Footer';
import './styles/Robots.css';

const Robots = (props: any) => (
    <div style={{ marginTop: '80px' }}>
        <h1>{props.title}</h1>
        <br />
        <div className="content">
            <table cellSpacing="35">
                <tr>
                    <td>
                        <img alt="Robot" src={props.src} height="500" width="auto" />
                    </td>
                </tr>
            </table>
            <br />
            <div className="infoBox1">
                <div className="content">
                    <p>
                        <span className="headTxt">
                            <b>Nickname: {props.nickname}</b>
                        </span>
                        <br />
                        <br /> {props.information}
                    </p>
                </div>
                <Footer />
            </div>
        </div>
        <br />
        <br />
    </div>
);

Robots.propTypes = {
    title: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    nickname: PropTypes.string.isRequired,
    information: PropTypes.string.isRequired,
};

export default Robots;
