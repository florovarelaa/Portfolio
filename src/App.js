import React, { Component } from 'react';

import './App.css';
import Main from './components/Main'
import { Layout, Header, Navigation, Content } from 'react-mdl';
import { Link } from 'react-router-dom';
import Blur from 'react-css-blur'

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {addClass: false,
      blurOn: false,
      blurTime: 500,
    }
  }
  
  blurOn = () => {
    this.setState({ blurOn: true });
    setTimeout(() => {
      this.setState({ blurOn: false })
    }, this.state.blurTime);
  }

  //switches state of addClass between true and false
  toggleClass() {
    this.setState({addClass: !this.state.addClass});
  }
  
  render() {
    let classToAdd = ["navigation-link"];
    if (this.state.addClass) {
      classToAdd.push("selected");
    }
    return (
      <div className="demo-big-content">
        <div>
        </div>
        <Blur radius={ this.state.blurOn ? '5px' : '0' } transition={`${this.state.blurTime}ms`}>
        <Layout>
            <Header className="header-color" title=" " scroll>
                <Navigation className='header-navigation' 
                    onClick={ (event) => {
                      // this.toggleClass();
                      this.blurOn();
                      // classToAdd.join('-');
                      }
                    }
                    >
                        <Link className={`navigation-link ${classToAdd.join('-')}`} to="/home" onClick= {() => {
                          this.toggleClass();
                          classToAdd.join('-');
                        }}>Home</Link>
                        <Link className={`navigation-link ${classToAdd.join('-')}`} to="/home" to="/about">About</Link>
                        <Link className={`navigation-link ${classToAdd.join('-')}`} to="/home" to="/projects">Projects</Link>
                        <Link className={`navigation-link ${classToAdd.join('-')}`} to="/home" to="/contact">Contact</Link>
                </Navigation>
            </Header>
            <Content>
                <div className="page-content" />
                <Main className="main"/>
            </Content>
        </Layout>
        </Blur>
      </div>
    );
  }
}

export default App;