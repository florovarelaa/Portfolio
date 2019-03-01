import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell } from 'react-mdl';
import Project from './Project'
import './Projects.css'

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {
        if(this.state.activeTab === 0) {
            return(
                <div className="projects-grid">
                    <Project 
                        title={'First Javascript Project'} 
                        description={'Project Description'}
                        github={'www.google.com'}
                    />
                    <Project 
                        title={'Second Javascript Project'} 
                        description={'Project Description'}
                        github={'www.google.com'}
                    />
                    <Project 
                        title={'Third Javascript Project'} 
                        description={'Project Description'}
                        github={'www.google.com'}
                    />
                </div>
            )
        } else if(this.state.activeTab === 1) {
            return(
                <div className="projects-grid">
                    <Project 
                        title={'First React Project'} 
                        description={'Project Description'}
                        github={'www.google.com'}
                        />
                    <Project 
                        title={'Second React Project'} 
                        description={'Project Description'}
                        github={'www.google.com'}
                        />
                    <Project 
                        title={'Third React Project'} 
                        description={'Project Description'}
                        github={'www.google.com'}
                        />
                </div>
            )      
        }
    }

    render () {
        return(
            <div >
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <div className="projects-tab">
                        <Tab>Javascript</Tab>
                        <Tab>React</Tab>
                    </div>
                </Tabs>

                    <Grid>
                        <Cell col={12}>
                            <div className='content'>
                                {this.toggleCategories()}
                            </div>
                        </Cell>
                    </Grid>
            </div>
        )
    }
}

export default Projects;