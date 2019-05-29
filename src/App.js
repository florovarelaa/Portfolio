import React, { Component } from 'react';

import './App.css';
import MainRouter from './components/MainRouter'
import { Layout, Header, Navigation, Content } from 'react-mdl';
import { Link } from 'react-router-dom';
import Blur from 'react-css-blur';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      blurOn: false,
      blurRadius: 15, //px added on call
      blurTime: 700,
      activeItem: 0,
      items: ['Home', 'About', 'Projects', 'Contact', 'Example', 'Example', 'Example', 'Example']
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
      <div className="content">
        <Layout>
          <Header className="header-color header-position" scroll>
            <div className="header">
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
            </div>
          </Header>
          <Blur radius={ this.state.blurOn ? `${this.state.blurRadius}px` : '0' } transition={`${this.state.blurTime}ms`}>
          <Content>
              <MainRouter className="main"/>
          </Content>
          </Blur>
        </Layout>
      </div>
    );
  }
}

export default App;