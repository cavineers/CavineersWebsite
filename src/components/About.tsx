import React from 'react';
import './styles/About.css';
import './styles/Video.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Main } from '../scripts/main';
import Footer from './Footer';

class About extends React.Component {
    componentDidMount() {
        Main.animations(this.props);
        AOS.init({
            duration: 2000,
            offset: 0,
        });
    }

    render() {
        return (
            <>
                <div className="page" id="page">
                    <div className="introSec animate">
                        <div className="texts">
                            <p data-aos="fade-in" className="line colored" id="num">
                                4541
                            </p>
                            <p data-aos="fade-in" data-aos-delay="750" className="line colored" id="name">
                                {' '}
                                Cavineers
                            </p>
                            <p data-aos="fade-in" data-aos-delay="1300">
                                <span
                                    id="introTextCont"
                                    style={{
                                        background: 'linear-gradient(to bottom, rgb(255, 136, 0), rgb(255, 230, 0))',
                                        color: 'transparent',
                                        backgroundClip: 'text',
                                        WebkitBackgroundClip: 'text',
                                    }}
                                >
                                    Inspiration. Leads to Innovation.
                                </span>
                            </p>
                        </div>
                    </div>
                    <br />
                    <div className="secondSec animate" style={{ overflow: 'hidden' }}>
                        <div>
                            <div className="texts textBlockRight">
                                <p data-aos="fade-down" style={{ padding: '10px', borderBottom: '2px solid grey' }}>
                                    Who We Are. <br />
                                    <span style={{ fontSize: '25px', fontWeight: 300 }}>
                                        Inspired and Ready To Change the World.
                                    </span>
                                </p>
                                <p data-aos="fade-up" data-aos-delay="700" className="infoTexts">
                                    The 4541 Cavineers are a dedicated team of passionate high schoolers who strive to
                                    not only compete in the FIRST Robotics Competition but spread their love of STEM
                                    with their community.
                                    <em>
                                        It is our mission to spread innovation across our community and create an
                                        environment where innovation not only takes place, but is encouraged in every
                                        sense of the word.
                                    </em>{' '}
                                    We are based out of Archbishop Spalding High School in Severn Maryland and are led
                                    by two amazing coaches who push and inspire us to innovate.
                                </p>
                            </div>
                            <br />
                            <br />
                            <div className="texts2 textBlockLeft">
                                <p
                                    data-aos="fade-left"
                                    style={{ padding: '10px', borderBottom: '2px solid grey', textAlign: 'right' }}
                                >
                                    Mental Health Initiative. <br />
                                    <span style={{ fontSize: '25px', fontWeight: 300 }}>
                                        Helping Us to Live Better, Happier Lives.
                                    </span>
                                </p>
                                <p data-aos="fade-right" data-aos-delay="700" className="infoTexts">
                                    Team 4541 is committed to all forms of safety and health, including mental health.
                                    Stress balls open up a conversation about mental health and its importance. They
                                    also provide a physical way to relieve stress at a time when it is at its peak. It
                                    is a method of raising awareness of mental health. We&apos;re all in this together
                                    and we should look out for each other. In order to support this initiative and raise
                                    awareness, we designed a stress ball which is also a link to important information
                                    about stress and time management. <br />
                                    <a href="mentalHealth.html" style={{ color: 'white' }}>
                                        Click here to learn more about mental health
                                    </a>
                                </p>
                            </div>
                            <br />
                            <br />
                            <div className="texts textBlockRight">
                                <p
                                    data-aos="fade-in"
                                    data-aos-delay="700"
                                    style={{ padding: '10px', borderBottom: '2px solid grey', textAlign: 'left' }}
                                >
                                    Summer Engineering Camp. <br />
                                    <span style={{ fontSize: '25px', fontWeight: 300 }}>
                                        Inspire the Next Generation of Engineers.
                                    </span>
                                </p>
                                <p data-aos="fade-left" data-aos-delay="700" className="infoTexts">
                                    <em>
                                        How can you launch a rocket with a chemical reaction? How can you build, and
                                        program, a robot to follow instructions? How does your hand provide valuable
                                        security information?
                                    </em>{' '}
                                    All these questions and more will be answered at Archbishop Spalding&apos;s Cavalier
                                    Engineering Camp. Designed for rising 6th, 7th, and 8th grade students, the Cavalier
                                    Engineering Camp explores a variety of engineering concepts and careers through
                                    hands-on projects and experiential learning. The camp introduces participants to
                                    engineering in a fun and exciting environment. Participation takes place under the
                                    guidance of engineering and robotics students, serving as camp counselors.
                                </p>
                            </div>
                            <div className="texts textBlockLeft">
                                <p
                                    data-aos="fade-up"
                                    style={{ padding: '10px', borderBottom: '2px solid grey', textAlign: 'right' }}
                                >
                                    Safety Initiative. <br />
                                    <span style={{ fontSize: '25px', fontWeight: 300 }}>
                                        Because Safety Is Simply Important.
                                    </span>
                                </p>
                                <p data-aos="fade-down" data-aos-delay="700" className="infoTexts">
                                    Our teams top priority always is safety! As a team we take safety seriously and take
                                    many steps to ensure safety on the field, in the class room, and when building is
                                    always being maintained to the highest standard. Some of these steps include, ensure
                                    a mentor or coach is present when machinery is being used, always cleaning up after
                                    we finish a project, being careful with tools and making sure to keep proper space
                                    and follow all safety protocols given by manufactures, and much more. All these
                                    measures help to keep us safe and we encourage everyone to follow these procedures
                                    as well when working in the engineering lab.
                                </p>
                            </div>
                            <br />
                            <br />
                            <div className="texts textBlockRight" id="Covid">
                                <p
                                    data-aos="fade-down-right"
                                    style={{ padding: '10px', borderBottom: '2px solid grey', textAlign: 'left' }}
                                >
                                    Our Covid-19 Response. <br />
                                    <span style={{ fontSize: '25px', fontWeight: 300 }}>
                                        Keeping Us Safe. While Helping To Keep Others Safe.
                                    </span>
                                </p>
                                <p data-aos="fade-up-left" data-aos-delay="700" className="infoTexts">
                                    Through these difficult times our team is working hard to ensure that everyone is
                                    staying safe and healthy. Safety is our top priority always! Due to the pandemic,
                                    all of our competitions have been cancelled and we have cancelled all of our in
                                    person meetings to help with social distancing. We are continuing meetings online to
                                    keep innovation moving. Our team members have also formed a task force to help 3D
                                    print face shields and masks for our community to help the brave workers risking
                                    their lives for us. We are teaching coding and CADing lessons online so we can keep
                                    learning. We are providing materials to all our members to help promote mental
                                    health through the quarantine. Likewise, we have decided to cancel our engineering
                                    summer camp this year for safety concerns. We apologize for any inconvenience and
                                    wish everyone well.
                                </p>
                                <p data-aos="fade-up-right" data-aos-delay="700" className="infoTexts">
                                    <span style={{ fontSize: '25px', fontWeight: 300, borderBottom: '2px solid grey' }}>
                                        Our Approach to Reopening Our Team.
                                    </span>{' '}
                                    While we have continued to teach, learn, and help our community online, some things
                                    just are not the same. We have recently submitted a plan to reopen our workshop to
                                    students. Due to the pandemic, we are taking extreme precautions to ensure the
                                    safety of everyone! While in the workshop, masks are required at all times (along
                                    with safety goggles). We have assigned seating and working areas to ensure proper
                                    distancing and contract tracing can happen. We have divided our team into 3 groups
                                    who alternate through the workshop (with full online being an option) to limit the
                                    number of people in person. Temperature checks are conducted to each person who
                                    enters the workspace. CDC approved cleaning occurs before and after each meeting
                                    with a deep cleaning day in between meetings. All students and staff are remaining
                                    distant and we are prepared to return to full online at any time! All mentors are
                                    being asked to visit and assist online until further notice. We know these
                                    procedures will help to ensure safety and hope to see everyone back in the workshop
                                    really soon.
                                </p>
                            </div>
                            <br />
                            <br />
                            <div className="texts textBlockLeft">
                                <p
                                    data-aos="fade-up"
                                    style={{ padding: '10px', borderBottom: '2px solid grey', textAlign: 'right' }}
                                >
                                    The Catholic Robotics League. <br />
                                    <span style={{ fontSize: '25px', fontWeight: 300 }}>
                                        Bringing Schools Together. So We Can Work Together.
                                    </span>
                                </p>
                                <p data-aos="fade-down" data-aos-delay="700" className="infoTexts">
                                    The Catholic Robotics League or CRL is a community of robotics teams who&apos;
                                    inspire innovation within a group of students. Check out the CRL website to learn
                                    more about their mission{' '}
                                    <a
                                        target="__blank"
                                        style={{ color: 'white' }}
                                        href="https://biancagiudici.wixsite.com/crlbaltimore"
                                    >
                                        Catholic Robotics League Website
                                    </a>
                                </p>
                            </div>
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                        </div>
                    </div>
                </div>
                <section>
                    <div className="allCont" style={{ width: '100%' }}>
                        <div className="mainDiv">
                            <h1 className="message">
                                The Cavineers are{' '}
                                <span
                                    className="txt-rotate"
                                    data-period="1500"
                                    data-rotate='[ "Innovative.", "Inspired.", "Changing the World.", "Igniting the Spark."]'
                                />
                            </h1>
                            <div className="infoBox1" id="mainTag" data-aos="fade-down">
                                <div className="content">
                                    <p style={{ color: 'rgb(83, 83, 83)', fontSize: '24px', lineHeight: 1.6 }}>
                                        <span className="headTxt">
                                            <b>About Us:</b>
                                        </span>
                                        <br />
                                        <br /> The 4541 Cavineers are a dedicated team of passionate high schoolers who
                                        strive to not only compete in the FIRST Robotics Competition but spread their
                                        love of STEM with their community.
                                        <em>
                                            It is our mission to spread innovation accross our community and create an
                                            environment where innovation not only takes place, but is encouraged in
                                            every sense of the word.
                                        </em>{' '}
                                        We are based out of Archbishop Spalding High School in Severn Maryland and are
                                        led by two amazing coaches who push and inspire us to innovate.
                                    </p>
                                </div>
                                <Footer />
                            </div>
                            <br />
                            <br />
                            <div className="infoBox1" id="mainTag">
                                <div className="content">
                                    <p style={{ color: 'rgb(83, 83, 83)', fontSize: '24px', lineHeight: 1.6 }}>
                                        <span className="headTxt">
                                            <b>Summer Engineering Camp:</b>
                                        </span>
                                        <br />
                                        <br />{' '}
                                        <em>
                                            How can you launch a rocket with a chemical reaction? How can you build, and
                                            program, a robot to follow instructions? How does your hand provide valuable
                                            security information?
                                        </em>{' '}
                                        All these questions and more will be answered at Archbishop Spalding’s Cavalier
                                        Engineering Camp. Designed for rising 6th, 7th, and 8th grade students, the
                                        Cavalier Engineering Camp explores a variety of engineering concepts and careers
                                        through hands-on projects and experiential learning. The camp introduces
                                        participants to engineering in a fun and exciting environment. Participation
                                        takes place under the guidance of engineering and robotics students, serving as
                                        camp counselors.
                                    </p>
                                </div>
                                <Footer />
                            </div>
                            <br />
                            <br />
                            <div className="infoBox1" id="mainTag">
                                <div className="content">
                                    <p style={{ color: 'rgb(83, 83, 83)', fontSize: '24px', lineHeight: 1.6 }}>
                                        <span className="headTxt">
                                            <b>Mental Health Initiative:</b>
                                        </span>
                                        <br />
                                        <br /> Team 4541 is committed to all forms of safety and health, including
                                        mental health. Stress balls open up a conversation about mental health and its
                                        importance. They also provide a physical way to relieve stress at a time when it
                                        is at its peak. It is a method of raising awareness of mental health. We&apos;re
                                        all in this together and we should look out for each other. In order to support
                                        this initiative and raise awareness, we designed a stress ball which is also a
                                        link to important information about stress and time management. <br />
                                        <a href="mentalHealth.html">Click here to learn more about mental health</a>
                                    </p>
                                </div>
                                <Footer />
                            </div>
                            <br />
                            <br />
                            <div className="infoBox1" id="mainTag">
                                <div className="content">
                                    <p style={{ color: 'rgb(83, 83, 83)', fontSize: '24px', lineHeight: 1.6 }}>
                                        <span className="headTxt">
                                            <b>Safety Initiative:</b>
                                        </span>
                                        <br />
                                        <br /> Our teams top priority always is safety! As a team we take safety
                                        seriously and take many steps to ensure safety on the field, in the class room,
                                        and when building is always being maintained to the highest standard. Some of
                                        these steps include, ensure a mentor or coach is present when machinery is being
                                        used, always cleaning up after we finish a project, being careful with tools and
                                        making sure to keep proper space and follow all safety protocols given by
                                        manufactures, and much more. All these measures help to keep us safe and we
                                        encourage everyone to follow these procedures as well when working in the
                                        engineering lab.
                                    </p>
                                </div>
                                <Footer />
                            </div>
                            <br />
                            <br />
                            <div className="infoBox1" id="mainTag">
                                <div className="content">
                                    <p style={{ color: 'rgb(83, 83, 83)', fontSize: '24px', lineHeight: 1.6 }}>
                                        <span className="headTxt">
                                            <b>Catholic Robotics League:</b>
                                        </span>
                                        <br />
                                        <br /> The Catholic Robotics League or CRL is a community of robotics teams
                                        who&apos;s mission is to inspire innovation within a group of students. Check
                                        out the CRL website to learn more about their mission{' '}
                                        <a target="__blank" href="https://biancagiudici.wixsite.com/crlbaltimore">
                                            Catholic Robotics League
                                        </a>
                                    </p>
                                </div>
                                <Footer />
                            </div>
                            <br />
                            <br />
                            <div className="infoBox1" id="Covid">
                                <div className="content">
                                    <p style={{ color: 'rgb(83, 83, 83)', fontSize: '24px', lineHeight: 1.6 }}>
                                        <span className="headTxt">
                                            <b>Covid-19 Response:</b>
                                        </span>
                                        <br />
                                        <br /> Through these difficult times our team is working hard to ensure that
                                        everyone is staying safe and healthy. Safety is our top priority always! Due to
                                        the pandemic, all of our competitions have been cancelled and we have cancelled
                                        all of our in person meetings to help with social distancing. We are continuing
                                        meetings online to keep innovation moving. Our team members have also formed a
                                        task force to help 3D print face shields and masks for our community to help the
                                        brave workers risking their lives for us. We are teaching coding and CADing
                                        lessons online so we can keep learning. We are providing materials to all our
                                        members to help promote mental health through the quarantine. Likewise, we have
                                        decided to cancel our engineering summer camp this year for safety concerns. We
                                        apologize for any inconvenience and wish everyone well.
                                    </p>
                                </div>
                                <Footer />
                            </div>
                        </div>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                    </div>
                </section>
            </>
        );
    }
}

export default About;
