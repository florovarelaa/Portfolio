import React, { Component } from 'react';
import './App.css';
import MainRouter from './components/MainRouter'
import { Layout, Header, Navigation, Content } from 'react-mdl';
import { Link } from 'react-router-dom';
import Blur from 'react-css-blur';
import { connect } from 'react-redux';
import { actionActiveItem } from './actions/itemActions';
import { blurOn, blurOff } from './actions/blurActions';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.onBlurOn = this.onBlurOn.bind(this);
    this.onBlurOff = this.onBlurOff.bind(this);
    // this.onActiveItem = this.onActiveItem.bind(this);
    this.blurRadius = 15; //px added on function call
    this.blurTime = 700;
    this.items = ['Home', 'About', 'Projects', 'Contact'];
  }
  
  handleItemClick(index) {
    this.props.onActiveItem(index);
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
                      this.blurEffect(this.blurTime);
                        }
                      }
                >
                  { this.items.map((item, index) => 
                    <Link 
                      key={index}
                      className={`navigation-link ${this.props.activeItem === index ? 'navigation-link-selected' : ''}`}
                      to={`${item.toLowerCase()}`}
                      onClick={this.handleItemClick.bind(this, index)}
                  >{item}
                    </Link>
                  )}
                </Navigation>
            </div>
          </Header>
          <Blur radius={ this.props.blur ? `${this.blurRadius}px` : '0' } transition={`${this.blurTime}ms`}>
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
  activeItem: state.item,
  floro: state.floro,
});

const mapActionsToProps = {
  onBlurOn: blurOn,
  onBlurOff: blurOff,
  onActiveItem: actionActiveItem,
}

export default connect(mapStateToProps, mapActionsToProps)(App);