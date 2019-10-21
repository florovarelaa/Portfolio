import React, { Component } from 'react';
import './About.css'
import Banner from '../components/Banner/Banner.js'

class About extends Component {
    render () {
        return(
            // <div className="about-banner-text">
            <Banner>
                    <p className="about-banner-text">Hello, my name is <span className="about-name">Florencio Varela</span>.</p>
                    <p className="about-banner-text">I'm a <span>Full Stack Developer</span> and <span> Informatic Engineer</span> from Argentina.</p>
                    <p className="about-banner-text">I'm quietly confident, naturally curious, and perpetually improving my skills. I design and code beautiful simple things, and I <span>love what I do</span>.</p>
                    <p className="about-banner-text">I have managed different projects. This role allowed me to develop <span>Management Knowledge</span>, experience and skills to bring projects to successful completion.</p>
                    <p className="about-banner-text">As a developer I enjoy building <span>Fast & Responsive</span> applications.</p>
                    <p className="about-banner-text">I started my career as a QA tester. 
                    This brought me the possibility to develop different <span>skills</span> such as:</p>
                    <ul className="about-banner-text">
                        <li>Problem-Solving Skills</li>
                        <li>Analytical Thinking</li>
                        <li>Attention to Detail</li>
                        <li>Experience with Agile Development Process</li>
                    </ul>
                    <p className="about-banner-text">After obtaining <span>Knowledge & Experience</span> as a member of the QA team I migrated to building things!</p>
                    <p className="about-banner-text">Later on, I began to <span>Manage</span> different <span>Team</span> which included <span>Members</span> with different skills.</p>
                    <p className="about-banner-text">If I had to describe myself with one sentence it would be:</p>
                    <p className="about-banner-text"><span>Learn to Love to Learn</span> Learn2♥2Learn</p>
                    <p className="about-banner-text">My <span>Interests</span> are: Javascript, VR/AR, Machine Learning, IA</p>
            {/* </div> */}
            </Banner>
        )
    }
}

export default About;