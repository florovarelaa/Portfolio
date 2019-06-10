import React, { Component } from 'react';
import './About.css'
import Banner from '../components/Banner/Banner.js'

class About extends Component {
    render () {
        return(
            // <div className="about-banner-text">
            <Banner>
                    <p className="about-banner-text">Hello, my name is <span className="about-name">Florencio Varela</span>.</p>
                    <p className="about-banner-text">I'm an <span>Informatic Engineering</span> student and <span> Developer</span> from Argentina.</p>
                    <p className="about-banner-text">I'm quietly confident, naturally curious, and perpetually improving my chops. I design and code beautifully simple things, and I <span>love what I do</span>.</p>
                    <p className="about-banner-text">I started my career as a QA tester.
                    This brought me the possibility to develop different <span>skills</span> such as:</p>
                    <ul className="about-banner-text">
                        <li>Problem-Solving Skills</li>
                        <li>Analytical Thinking</li>
                        <li>Attention to Detail</li>
                        <li>Experience with Agile Development Process</li>
                    </ul>
                    <p className="about-banner-text">After obtaining knowledge and experience as a member of the QA team I migrated to building things!</p>
                    <p className="about-banner-text">As a developer I enjoy building <span>Fast & Responsive</span> applications.</p>
            {/* </div> */}
            </Banner>
        )
    }
}

export default About;