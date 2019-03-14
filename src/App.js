import React, { Component } from 'react';

import './App.css';
import Main from './components/Main'
import { Layout, Header, Navigation, Content } from 'react-mdl';
import { Link } from 'react-router-dom';
import Particles from 'react-particles-js';

class App extends Component {

  particlesOptions = {
    particles: {
      number: {
        value: 25,
        density: {
          enable: true, 
          value_area: 200,
        },
      },
    }
  }

  render() {
    return (
      <div className="demo-big-content">
        <Layout>
            <Particles className="particles" params={this.particlesOptions} />
            <Header className="header-color" title=" " scroll>
                <Navigation className="header-navbar">
                    <Link to="/home">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/contact">Contact</Link>
                </Navigation>
            </Header>

            <Content>
                <div className="page-content" />
                <Main />
            </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
