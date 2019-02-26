import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell } from 'react-mdl';
import Project from './Project'

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {
        if(this.state.activeTab === 0) {
            return(
                <div>
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
                        title={'Third React Project'} 
                        description={'Project Description'}
                        github={'www.google.com'}
                    />
                </div>
            )
        } else if(this.state.activeTab === 1) {
            return(
                <div>
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
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>Javascript</Tab>
                    <Tab>React</Tab>
                </Tabs>

                <section>
                    <Grid >
                        <Cell col={12}>
                            <div>
                                {this.toggleCategories()}
                            </div>
                        </Cell>
                    </Grid>
                </section>
            </div>
        )
    }
}

export default Projects;