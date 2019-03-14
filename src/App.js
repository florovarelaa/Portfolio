import React, { Component } from 'react';

import './App.css';
import Main from './components/Main'
import { Layout, Header, Navigation, Content } from 'react-mdl';
import { Link } from 'react-router-dom';
import Particles from 'react-particles-js';
import Blur from 'react-css-blur'

class App extends Component {

  state = {
    blurOn: false,
    blurTime: 800,
  };

  particlesOptions = {
    particles: {
      number: {
        value: 25,
        density: {
          enable: true, 
          value_area: 200,
        },
      }
    }
  }

  blurOn = () => {
    this.setState({ blurOn: true });
    setTimeout(() => {
      this.setState({ blurOn: false })
    }, this.state.blurTime);
  }

  render() {
    return (
      <div className="demo-big-content">
        <div>
        <Particles className="particles" params={this.particlesOptions} />
        </div>
        <Blur radius={ this.state.blurOn ? '3px' : '0' } transition={`${this.state.blurTime}ms`}>
        <Layout>
            <Header className="header-color" title=" " scroll>
                <Navigation className="header-navigation" onClick={this.blurOn}>
                        <Link className='navigation-link' to="/home" >Home</Link>
                        <Link className='navigation-link' to="/about">About</Link>
                        <Link className='navigation-link' to="/projects">Projects</Link>
                        <Link className='navigation-link' to="/contact">Contact</Link>
                </Navigation>
            </Header>
            <Content>
                <div className="page-content" />
                <Main />
            </Content>
        </Layout>
        </Blur>
      </div>
    );
  }
}

export default App;
