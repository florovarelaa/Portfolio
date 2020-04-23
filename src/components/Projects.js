import React, { Component } from 'react';
import { Tabs, Tab } from 'react-mdl';
import ProjectCard from './ProjectCard/ProjectCard';
import './Projects.css';
import Blur from 'react-css-blur';
import { connect } from 'react-redux';
import { blurOn, blurOff } from '../actions/blurActions';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0,
                       blurTime: 550,
        };
    }
    
    toggleCategories() {
        switch (this.state.activeTab) {
            case 0: //javascript
            return(
                    <div className="grid">
                        <ProjectCard repository='https://github.com/florovarelaa/JS-costos-calculator'
                                    icon='javascript'
                                    title='Money Division'
                                    description='A javascript application to divide money between different people.'
                                    url='http://florovarelaa.divider.surge.sh/'
                        />
                        <ProjectCard icon='javascript'
                                    title='Jockey Club Buenos Aires'
                                    description='App for members of the Jockey Club, Bs As, Argentina.'
                                    url='https://play.google.com/store/apps/details?id=com.jockeyclub.socios'
                        />
                        <ProjectCard repository='https://github.com/florovarelaa/Hermes-1'
                                    icon='javascript'
                                    title='Hermes Project'
                                    description='Ticket report management app'
                                    url=''
                        />
                    </div>
                );
            case 1: //React
                return(
                    <div className="grid">
                        <ProjectCard repository= 'https://github.com/florovarelaa/React-portfolio'
                                    icon='react'
                                    title='Portfolio'
                                    description='My own personal Portfolio'
                                    url= 'https://florovarelaa.surge.sh'
                        />
                        <ProjectCard repository= 'https://github.com/florovarelaa/React-Css-Filters'
                                    icon='react'
                                    title='CSS Filters'
                                    description='A React app for applying css filters to an image.'
                                    url= 'http://cssfilters.surge.sh/'
                        />
                        <ProjectCard
                                    icon='react'
                                    title='Intercarnes'
                                    description='Web and Mobile app oriented to Cattle Logistic'
                        />
                        <ProjectCard repository='https://github.com/florovarelaa/React-RoboFriends'
                                    icon='react'
                                    title='Robo Friends'
                                    description='App for filtering Card Components'
                                    url= 'http://tremendous-cakes.surge.sh/'
                        />
                    </div>
                );
            case 2: //node
                return(
                    <div className="grid">
                        <ProjectCard repository='https://github.com/florovarelaa/conbaseor'
                                    icon='node'
                                    title='Conbaseor'
                                    description='npm module with algorithms to convert between binary and decimal numbers.'
                                    url= 'https://www.npmjs.com/package/conbaseor'
                        />
                        <ProjectCard repository='https://github.com/florovarelaa/Unity-Hit-The-Targets'
                                    icon='node'
                                    title='Node-MySQL-Api-Bootstrap'
                                    description='Bootstrap Api with Auth and CRUD endpoints among others'
                        />
                    </div>
                );
            case 3: //unity
                return(
                    <div className="grid">
                        <ProjectCard repository='https://github.com/florovarelaa/Unity-Flappy-Bird'
                                     icon='unity'
                                     title='Flappy Bird'
                                     description='A flappy bird clone'
                        />
                        <ProjectCard repository='https://github.com/florovarelaa/Unity-Hit-The-Targets'
                                     icon='unity'
                                     title='Hit the Targets'
                                     description='A top down shooting game'
                        />
                        <ProjectCard repository='https://github.com/florovarelaa/Unity-UnfairPlatformer'
                                     icon='unity'
                                     title='Unfair Platformer'
                                     description='A not simple nor fair platformer game'
                        />
                        <ProjectCard repository='https://github.com/florovarelaa/Unity-Patrol-Animal-Zone'
                                     icon='unity'
                                     title='Patrol Animal Zone'
                                     description='A small game with an abilty system'
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
    
    blurEffect = (miliseconds) => {
        this.props.onBlurOn()
        setTimeout(() => {
          this.props.onBlurOff()
        }, miliseconds);
    }

    render () {
        return(
            <div>
                <div className="tabs-container">
                    <Tabs className="project-tabs" activeTab={this.state.activeTab} 
                            onChange={
                                (tabId) => {
                                    this.setState({ 
                                        activeTab: tabId 
                                    })
                                    this.blurEffect(this.state.blurTime)
                                }
                            }
                        > 
                            <Tab className="category-tab">JS</Tab>
                            <Tab className="category-tab">React</Tab>
                            <Tab className="category-tab">Node</Tab>
                            <Tab className="category-tab">Unity</Tab>
                    </Tabs>
                </div>
                <Blur radius={ this.props.blur.active ? `${this.props.blur.blurRadius}px` : '0' } transition = {`${this.state.blurTime}ms`}>
                        {this.toggleCategories()}                               
                </Blur>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    blur: state.blur,
});

const mapActionsToProps = {
    onBlurOn: blurOn,
    onBlurOff: blurOff,
};

export default connect(mapStateToProps, mapActionsToProps)(Projects);