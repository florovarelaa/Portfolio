import React, { Component } from 'react';
import './About.css'
import Banner from '../components/Banner/Banner.js'

class About extends Component {
    render () {
        return(
            <Banner>
                    <p className="about-banner-text">Hello, my name is <span className="about-name">Florencio Varela</span></p>
                    <p className="about-banner-text">I'm a <span>Full Stack Developer</span> and <span> Informatic Engineer</span> from Argentina</p>
                    <p className="about-banner-text">I'm quietly confident, naturally curious, and perpetually improving my skills. I design and code beautiful simple things, and I <span>love what I do</span></p>
                    <p className="about-banner-text">My personal goal is to participate in teams where I can <span>share my knowledge</span> and improve my skills</p>
                    <p className="about-banner-text">As a developer I enjoy building <span>Fast & Responsive</span> applications</p>
                    <p className="about-banner-text">In the course of my career I developed different <span>skills</span> such as:</p>
                    <ul className="about-banner-text">
                        <li>Complete Software Development Life Cycle</li>
                        <li>Experience with Agile Development Process</li>
                        <li>Problem-Solving Skills</li>
                        <li>Analytical Thinking</li>
                        <li>Producing clean, efficient code based on specifications</li>
                        <li>Testing and deploying programs and systems</li>
                    </ul>
                    <p className="about-banner-text">In the past, I was able to <span>Manage</span> different <span>Teams</span> composed with 2-5 <span>Members</span> with different skills and abilities</p>
                    <p className="about-banner-text">If I had to describe myself with one sentence it would be:</p>
                    <p className="about-banner-text"><span>Learn to Love to Learn</span> Learn2♥2Learn</p>
                    <p className="about-banner-text">I also enjoy designing and <span>building games</span> on my <span>free time</span></p>
            </Banner>
        )
    }
}

export default About;