import React, { Component } from 'react';

import './App.css';
import Main from './components/Main'
import { Layout, Header, Navigation, Content } from 'react-mdl';
import { Link } from 'react-router-dom';
import Blur from 'react-css-blur';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      blurOn: false,
      blurTime: 500,
      activeItem: 0,
      items: ['Home', 'About', 'Projects', 'Contact']
    }
  }
  
  blurOn = () => {
    this.setState({ blurOn: true });
    setTimeout(() => {
      this.setState({ blurOn: false })
    }, this.state.blurTime);
  }

  handleItemClick(index) {
    this.setState({
      activeItem: index,
    })
  }
  
  render() {
    return (
      <div className="demo-big-content">
        <div>
        </div>
        <Blur radius={ this.state.blurOn ? '5px' : '0' } transition={`${this.state.blurTime}ms`}>
        <Layout>
            <Header className="header-color" title=" " scroll>
                <Navigation className="header-navigation" 
                    onClick={ () => {
                        this.blurOn();
                        }
                      }
                >
                  { this.state.items.map((item, index) => 
                    <Link 
                      key={index}
                      className={`navigation-link ${this.state.activeItem === index ? 'navigation-link-selected' : ''} `}
                      to={`${item.toLowerCase()}`}
                      onClick={this.handleItemClick.bind(this, index)}
                    >{item}
                    </Link>
                  )}
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