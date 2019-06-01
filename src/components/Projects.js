import React, { Component } from 'react';
import { Tabs, Tab } from 'react-mdl';
import { Link } from 'react-router-dom';
import ProjectsRouter from './ProjectsRouter/ProjectsRouter'
import ProjectCard from './ProjectCard/ProjectCard';
import './Projects.css';
import Blur from 'react-css-blur';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0,
                       blurOn: false,
                       blurTime: 500,
                       transitionTime: 300,
        };
    }

    
    toggleCategories() {
        switch (this.state.activeTab) {
            case 0: //javascript
                return(
                    <div className="projects-grid">
                        <ProjectCard url='https://github.com/florovarelaa/JS-GasStations'
                                     icon='javascript'
                                     title='Map Gas Stations'
                                     description='An application that shows the gas stations of a region in a map.'
                        />
                    </div>
                );
            case 1: //react
                return(
                    <div className="projects-grid">
                        <ProjectCard url= 'https://github.com/florovarelaa/React-portfolio'
                                     icon='react'
                                     description='My own personal Portfolio'
                        />
                        <ProjectCard url='https://github.com/florovarelaa/React-RoboFriends'
                                     icon='react'
                                     description='App for filtering Card Components'
                        />
                    </div>
                );
            case 2: //unity
                return(
                    <div className="projects-grid">
                        <ProjectCard url='https://github.com/florovarelaa/Unity-Hit-The-Targets'
                                     icon='unity'
                                     description='A top down shooting game'
                        />
                        <ProjectCard url='https://github.com/florovarelaa/Unity-UnfairPlatformer'
                                     icon='unity'
                                     description='A not simple nor fair platformer game'
                        />
                        <ProjectCard url='https://github.com/florovarelaa/Unity-Patrol-Animal-Zone'
                                     icon='unity'
                                     description='A small game with an abilty sistem'
                        />
                        <ProjectCard url='https://github.com/florovarelaa/Unity-Flappy-Bird'
                                     icon='unity'
                                     description='A flappy bird clone'
                        />
                    </div>
                );   
            default: break;   
        }
    }

    setActiveTab (tabId) {
        this.setState({
            activeTab: tabId
        })
    }
    
    blurOn = () => {
        this.setState({ blurOn: true });
        setTimeout(() => {
            this.setState({ blurOn: false })
        }, this.state.blurTime);
    }

    // componentDidMount to fetch from api


    render () {
        return(
            <div>
                    <div className="tabs-container">
                        <Tabs className="category-tabs" activeTab={this.state.activeTab} 
                                onChange={
                                    (tabId) => {
                                        this.setState({ 
                                            activeTab: tabId 
                                                })
                                                this.blurOn();
                                        }
                                    }
                            ripple> 
                            {/* <Link
                                to={`/projects/javascript`}
                            > */}
                                <Tab className="category-tab">Javascript</Tab>
                            {/* </Link>
                            <Link
                                to={`/projects/react`}
                            > */}
                                <Tab className="category-tab">React</Tab>
                            {/* </Link>
                            <Link
                                to={`projects/unity`}
                            > */}
                                <Tab className="category-tab">Unity</Tab>
                            {/* </Link> */}
                        </Tabs>
                    </div>
                    <Blur radius={ this.state.blurOn ? '10px' : '0' } transition={`${this.state.transitionTime}ms`}>
                            {this.toggleCategories()}                               
                    </Blur>
            </div>
        )
    }
}

export default Projects;