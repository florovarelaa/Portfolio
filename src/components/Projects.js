import React, { Component } from 'react';
import { Tabs, Tab, Grid } from 'react-mdl';
import Project from './Project';
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
            case 0:
                return(
                    <div className="projects-grid">
                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />
                    </div>
                );
            case 1:
                return(
                    <div className="projects-grid">
                        <Project 
                            title={'RoboFriends'} 
                            description={'A React app for filtering Card Components'}
                            github={'https://github.com/florovarelaa/RoboFriends'}
                            />
                    </div>
                );
            case 2:
                return(
                    <div className="projects-grid">
                        <Project 
                            title={'RoboFriends'} 
                            description={'A React app for filtering Card Components'}
                            github={'https://github.com/florovarelaa/RoboFriends'}
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
                                    <Tab className="category-tab">Javascript</Tab>
                                    <Tab className="category-tab">React</Tab>
                                    <Tab className="category-tab">Unity</Tab>
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