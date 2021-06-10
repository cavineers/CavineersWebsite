import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from './Footer';

class Outreach extends React.Component {
    componentDidMount() {
        AOS.init({
            duration: 2000,
            offset: 0,
        });
    }

    render() {
        return (
            <>
                <h1 style={{ textAlign: 'center', fontSize: '50px', textShadow: '1px 1px 3px red' }}>Outreach Events</h1>
                <div className="AOSPac" data-aos="fade-in">
                    <h1>
                        OUR TEAM HAS COMPLETED OVER 2,500 SERVICE <br /> HOURS IN THE PAST 2 YEARS!
                    </h1>
                </div>
            </>
        );
    }
}

export default Outreach;
