import React, { Component } from 'react';
import './App.css';
import MainRouter from './components/MainRouter'
import { Layout, Header, Navigation, Content } from 'react-mdl';
import { Link } from 'react-router-dom';
import Blur from 'react-css-blur';
import { connect } from 'react-redux';
import { blurOn, blurOff } from './actions/blurActions';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.onBlurOn = this.onBlurOn.bind(this);
    this.onBlurOff = this.onBlurOff.bind(this);
    this.state = {
      blurRadius: 15, //px added on function call
      blurTime: 700,
      items: ['Home', 'About', 'Projects', 'Contact'],
      activeItem: 0,
    }
  }
  
  handleItemClick(index) {
    this.setState({
      activeItem: index,
    })
  }

  blurEffect = (miliseconds) => {
    this.onBlurOn()
    setTimeout(() => {
      this.onBlurOff()
    }, miliseconds);
  }


  onBlurOn() {
    this.props.onBlurOn();
  }
  
  onBlurOff() {
    this.props.onBlurOff();
  }
  
  render() {
    return (
      <div className="content">
        <Layout>
          <Header className="header-color header-position" scroll>
            <div className="header-navigation-position">
                <Navigation className="header-navigation" 
                    onClick={ () => {
                      this.blurEffect(this.state.blurTime);
                        }
                      }
                >
                  { this.state.items.map((item, index) => 
                    <Link 
                      key={index}
                      className={`navigation-link ${this.state.activeItem === index ? 'navigation-link-selected' : ''}`}
                      to={`${item.toLowerCase()}`}
                      onClick={this.handleItemClick.bind(this, index)}
                  >{item}
                    </Link>
                  )}
                </Navigation>
            </div>
          </Header>
          <Blur radius={ this.props.blur ? `${this.state.blurRadius}px` : '0' } transition={`${this.state.blurTime}ms`}>
          <Content>
              <MainRouter className="main"/>
          </Content>
          </Blur>
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  blur: state.blur,
});

const mapActionsToProps = {
  onBlurOn: blurOn,
  onBlurOff: blurOff,
}

export default connect(mapStateToProps, mapActionsToProps)(App);