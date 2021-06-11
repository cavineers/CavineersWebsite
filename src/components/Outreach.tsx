import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './styles/Outreach.css';

// Image Imports
import CRL from './styles/img/outreach/CRL.jpg';
import ESS from './styles/img/outreach/ESS.jpg';
import InnovationChallenge from './styles/img/outreach/InnovationChallenge.jpg';
import Kennedy from './styles/img/outreach/kennedy.jpg';
import RobotDemo from './styles/img/outreach/RD.jpg';
import RobotMentoring from './styles/img/outreach/RMP.jpg';
import StJohns from './styles/img/outreach/StJohn.jpg';
import GIM from './styles/img/outreach/GIM.png';
import BGClub from './styles/img/outreach/BGClub.jpg';
import FaceMasks from './styles/img/outreach/FaceMasks.jpg';

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
                <div className="lists">
                    <div className="middle">
                        <h2 style={{ fontSize: '38px' }}>
                            <em>Events Within FIRST&copy;</em>
                        </h2>
                        <div className="text">
                            <h3 className="heading">
                                <em>Catholic Robotics League (CRL):</em>
                            </h3>
                            <p>
                                The Catholic Robotics League (or CRL for short) is a unification of the schools in the Catholic
                                Archdiocese of Baltimore through robotics/STEM. CRL was founded in 2017 through the efforts of
                                4541 and has helped expand both STEM and FIRST in our community. The goal of CRL is to inspire,
                                develop, support, and engage competitive robotics teams within the Catholic school system. We do
                                this by providing financial assistance and networking opportunities for students, teachers,
                                coaches, and mentors to foster camaraderie, competition, and compassion within our community.
                                Within the Catholic Robotics League, we host scrimmages, workshops, STEM nights, robot
                                demonstrations, expositions, and community service events.
                            </p>
                            <img alt="Catholic Robotics League" src={CRL} />
                        </div>
                        <div className="text">
                            <h3 className="heading">
                                <em>Robotics Mentoring Program</em>
                            </h3>
                            <p>
                                A responsibility we are taking as a team is the mentoring of FIRST teams in the Catholic Robotics
                                League. Within our program, we send small groups of our members to middle/elementary schools in
                                the Archdiocese of Baltimore to guide teams and new coaches in their build and competition
                                seasons. Mentorship in the CRL makes FIRST more accessible to schools that don’t have robotics
                                because it allows STEM teachers and school administrators to feel that there’s no risk in starting
                                a FIRST team. Through this program, we can directly interact with the schools we serve and this
                                allows us to provide resources like technology, information, and experience to member schools.
                            </p>
                            <img alt="Robotics Mentoring" src={RobotMentoring} />
                        </div>
                        <div className="text">
                            <h3 className="heading">
                                <em>Robot Demonstrations</em>
                            </h3>
                            <p>
                                We demonstrate our robots throughout the year whether it be a competition bot at an Elementary
                                School STEM night or our T-shirt cannon bot at our football games. We try to present our robots as
                                much as possible to raise awareness of the possibilities that technology offers. We often are
                                invited to schools in the Catholic Robotics League to explain how our robots work and to let the
                                kids interact with our bots.
                            </p>
                            <img alt="Robot Demonstrations" src={RobotDemo} />
                        </div>
                    </div>
                </div>
                <div className="lists">
                    <div className="middle">
                        <h2 style={{ fontSize: '38px' }}>
                            <em>Events Within Our Community</em>
                        </h2>
                        <div className="text">
                            <h3 className="heading">
                                <em>St. John Neumann Church</em>
                            </h3>
                            <p>
                                Our team often bands together to give back to the community that has already done so much for us.
                                For five years, we have gotten together every Thanksgiving to pack meals for homeless people in
                                the Annapolis area. Through the St. Vincent de Paul Society, we are able to pack and deliver over
                                500 bags containing full dinners for less fortunate families every single year.
                            </p>
                            <img alt="Outreach at local Church's" src={StJohns} />
                        </div>
                        <div className="text">
                            <h3 className="heading">
                                <em>Engineering Service Society (E.S.S)</em>
                            </h3>
                            <p>
                                Engineering Service Society also known as ESS is a club at Archbishop Spalding High School that is
                                sponsored by our team. ESS is made up of members from our team and students at Spalding.
                                Engineering Service Society has the goal of helping kids with disabilities through organizations
                                like E-Nable and Go Baby Go. E-Nable is an organization that allows us to produce 3D printed
                                prosthetics to kids around the world. Go Baby Go is an organization that allows us to modify Power
                                Wheels ride-on cars into therapeutic, motorized wheelchairs for kids that cannot walk or have
                                trouble walking. Another goal is to get more people involved in STEM at our school. ESS is very
                                successful at getting more people involved in engineering because it is a lesser commitment than
                                FIRST, is for a good cause, and allows people to get service hours.
                            </p>
                            <img alt="Engineering Service Society" src={ESS} />
                        </div>
                        <div className="text">
                            <h3 className="heading">
                                <em>Gears In Motion Program</em>
                            </h3>
                            <p>
                                The GIM program (Gears In Motion) is a fun STEM activity geared towards elementary school students
                                in order to teach the importance of working together like gears in a system. It centers around
                                GIM, a gear-based toy that was designed, CADed, and 3D printed by members of 4541. Gears In Motion
                                starts with a short but informative presentation on gears, which leads to the activity. After
                                watching a tutorial video, the students then work together as a team to piece together the steps
                                to the instructional booklet so that they can put together their GIMs as a team and learn to Turn
                                Together... By the end of the program, the students involved will be able to take home their very
                                own GIM.
                            </p>
                            <img alt="Gears In Motion" src={GIM} />
                        </div>
                        <div className="text">
                            <h3 className="heading">
                                <em>Boys and Girls club</em>
                            </h3>
                            <p>
                                Our team partners with the Boys and Girls Club of Annapolis, which stems out of a larger
                                nationwide organization. 15 members of 4541 voluntarily signed up to mentor at our local Boys and
                                Girls Club, committing to volunteer an hour every Thursday to aid in STEM-based activities with
                                the kids.
                            </p>
                            <img alt="Boys and Girls Club of Annapolis" src={BGClub} />
                        </div>
                        <br />
                        <div className="text">
                            <h3 className="heading">
                                <em>Innovation Challenge</em>
                            </h3>
                            <p>
                                Innovation Challenge is a monthly event that our team runs with the goal of getting more Spalding
                                students involved in STEM. It allows students to be in teams of three and compete in a engineering
                                based challenge. This activity is open to all Spalding students, not just engineering students.
                                During an Innovation Challenge we invite one of our sponsors to come and talk about what their
                                organization does and what opportunities they offer. The winning team of the challenge receive
                                gifts cards for each member.
                            </p>
                            <img alt="Innovation Challenges" src={InnovationChallenge} />
                        </div>
                        <div className="text">
                            <h3 className="heading">
                                <em>Kennedy Krieger</em>
                            </h3>
                            <p>
                                Team 4541 started a new tradition participating in the Kennedy Krieger Tree Festival, the largest
                                charity-auction on the east coast. The festival featured over 800 unique trees, all to support the
                                children of the Kennedy Krieger Institute. Designed by 4541 team members, the 2019 Choo-Choo Tree
                                took 3rd place in the Created by Children category.
                            </p>
                            <img alt="Kennedy Krieger Institute" src={Kennedy} />
                        </div>
                        <div className="text">
                            <h3 className="heading">
                                <em>3D Printing Face Masks</em>
                            </h3>
                            <p>
                                In the past year, with the Covid-19 pandemic hitting so many of us deeply, our team continued our
                                outreach by CADing and 3D printing face masks and shields for local heros on the front lines in
                                hospitals. We made it our mission to continue outreaching within our community when they needed it
                                most. Our hope was to help show everyone working on the front lines how much we appreciate their
                                hard work for us everyday and help them get supplies that were so scarce.
                            </p>
                            <img alt="4541 Team Members 3D printing masks" src={FaceMasks} />
                        </div>
                        <br />
                        <br />
                    </div>
                </div>
            </>
        );
    }
}

export default Outreach;
