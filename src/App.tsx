// Standard Imports
import React from 'react';
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import Sidemenu from './components/Sidemenu';
import About from './components/About';
import Homepage from './components/Main';
import Outreach from './components/Outreach';
import Sponsors from './components/Sponsors';
import Robots from './components/Robots';
import Footer from './components/Footer';

// Robot Image Src
import Kronk from './components/styles/img/robots/Kronk.png';
import Geoff from './components/styles/img/robots/Geoff.jpg';
import Fahrenheit from './components/styles/img/robots/Fahrenheit.jpg';
import Bruce from './components/styles/img/robots/Bruce.jpg';
import Finnegan from './components/styles/img/robots/Finnegan.jpg';
import KingCharles from './components/styles/img/robots/KingCharles.jpg';
import Kevin from './components/styles/img/robots/Kevin.jpg';
import Horton from './components/styles/img/robots/Horton.jpg';

// Main application window.
// eslint-disable-next-line
function App() {
    return (
        <Router basename={`/${process.env.PUBLIC_URL}`}>
            <>
                <Navbar />
                <Sidemenu />

                <Routes>
                    <Route path="/about" element={<About />} />
                    <Route path="/" element={<Homepage />} />
                    <Route path="/outreach" element={<Outreach />} />
                    <Route path="/sponsors" element={<Sponsors />} />

                    {/* Team Robot Paths */}
                    <Route
                        path="/bots/2020"
                        element={
                            <Robots
                                title="2020 Infinite Recharge"
                                src={Kronk}
                                nickname="Kronk"
                                information="Kronk was our early 2020 robot. Having never been to competition due to COVID-19, we never were able to fully test the might of this amazing bot, however it is an engineering masterpiece. With it's immensely small and compact design, Kronk is agile, speedy, and able to fit in small spaces. The Tank drivetrain allows this fast movement. With a dual gear system and color sensors this bot also powerful for defensive purposes just as much as offensive purposes."
                            />
                        }
                    />
                    <Route
                        path="/bots/2019"
                        element={
                            <Robots
                                title="2019 Destination Deep Space"
                                src={Geoff}
                                nickname="Geoff"
                                information="Geoff is the Cavineer's 2019 award winning robot. Geoff (gee-off), is designed with a grabber made of shape-optimized polycarbonate and holds both cargo and hatches with a pneumatic claw so that the robot performs exceptionally well without losing any style points. Geoff has a West Coast drivetrain, with a drop-center and Omni wheels in the back to assist with pivoting. Shifting gearboxes allow Geoff to play a mean defense. The elevator is a step-up from its sibling, Fahrenheit, allowing for the grabber to flip back and forth through the middle. Geoff's elevator is also capable of lifting both hatches and cargo to all levels of the rocket. Winning Chairman's and playing in the finals at the Oxon Hill district event, Geoff was a force to be reckoned with. Geoff won the Chesapeake District Championship and made it to the semi-finals of the Daly field at the World Championships."
                            />
                        }
                    />
                    <Route
                        path="/bots/2018"
                        element={
                            <Robots
                                title="2018 FIRST Power Up"
                                src={Fahrenheit}
                                nickname="Fahrenheit"
                                information="Fahrenheit, the Cavineers' first award-winning robot, is the pride and joy of the team. Thanks to its cascading elevator, coded with cascading PIDs; carbon fiber grabber; West Coast drivetrain, complete with shifting gearboxes; and the last minute addition of a climber, this robot brought us our best season yet. With a robust design, combined with its 10 different autonomous paths to choose from, we were not only chosen for an alliance at the World Championships, but also won the Archimedes sub-division in Detroit, Michigan. Click below to watch Fahrenheit at competition!"
                            />
                        }
                    />
                    <Route
                        path="/bots/2017"
                        element={
                            <Robots
                                title="2017 FIRST SteamWorks"
                                src={Bruce}
                                nickname="Bruce"
                                information="With its legendary 2.1 second climber, Cheesecake; robust design; and colorful LEDs, Bruce really had it all. Our robot was specifically a gear robot and used an active gear placement that never failed to place the gear on its peg. Our climber, although it screamed like a banshee, was so fast that we were able to continue placing gears all the way until the last seconds of the match, making us a great addition to any team. Our rope and climber each had different sides of velcro to allow for a strong grip on the rope and contributed to our rapid climb."
                            />
                        }
                    />
                    <Route
                        path="/bots/2016"
                        element={
                            <Robots
                                title="2016 FIRST Stronghold"
                                src={Finnegan}
                                nickname="Finnegan"
                                information="Finnegan, the name of the dragon which appears on our robot and pit, has wholeheartedly been chosen as the front-runner for Team 4541. Finnegan's strategy was to traverse category A, B, and D defenses as well as shooting for both the high and low goals. Finnegan utilizes a dual motor intake and shooting system."
                            />
                        }
                    />
                    <Route
                        path="/bots/2015"
                        element={
                            <Robots
                                title="2015 FIRST Recycle Rush"
                                src={KingCharles}
                                nickname="King Charles"
                                information="Recycle Rush was the 2015 challenge! Watch the video for the challenge details. The objective was to gather and stack recycling bins and place them in stacks and then place a trashcan on top of the stacks. During this season, our team traveled to St. Louis and competed in the FIRST World Championships!"
                            />
                        }
                    />
                    <Route
                        path="/bots/2014"
                        element={
                            <Robots
                                title="2014 FIRST Aerial Assist"
                                src={Kevin}
                                nickname="Kevin"
                                information="Aerial Assist was the 2014 challenge! Watch the video for the challenge details. The objective was to pass 2ft diameter yoga balls between robots and then launch them into wall goals. Kevin had two main components to pick up pass or shoot the large ball. The Intake mechanism was a direct motor mount to axle system that allowed a lot of torque to pick up the ball from the ground. This loaded the ball into a aluminum loop that is connected to a 12 inch bore pneumatic."
                            />
                        }
                    />
                    <Route
                        path="/bots/2013"
                        element={
                            <Robots
                                title="2013 FIRST Ultimate Ascent"
                                src={Horton}
                                nickname="Horton"
                                information="Ultimate Ascent was the 2013 challenge! Watch the video for the challenge details. The objective was to throw Frisbees into wall goals. The game ends with a pyramid climb challenge. Horton used a single active arm to lift its 110lb frame up the pyramid. It had two passive hooks to rest to the robot on a rung as a winch and spring system extended the nearly 3 foot arm out."
                            />
                        }
                    />
                    <Route path="*" element={<Navigate replace to="/" />} />
                </Routes>

                <Footer />
            </>
        </Router>
    );
}

export default App;
