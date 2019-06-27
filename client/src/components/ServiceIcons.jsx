import React from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router-dom';


const Scroll = require('react-scroll');
const scroll = Scroll.animateScroll;
import scrollToComponent from 'react-scroll-to-component';
import animateScrollTo from 'animated-scroll-to';

class ServiceIcons extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.icon.title,
    }
    this.scrollview = this.scrollview.bind(this);
  }
  componentDidMount() {
    console.log('hi', this.props.icon.key)
    // scrollToComponent('market', { offset: 0, align: 'middle', duration: 500, ease:'inCirc'});
  }
  scrollview(){
    if(this.props.icon.ref === 'brokerage'){
    animateScrollTo(400);
    } else if (this.props.icon.ref === 'investment'){
      animateScrollTo(700);
    } else if (this.props.icon.ref === 'construction'){
      animateScrollTo(1100);
    } else {
      animateScrollTo(2000);
    }

    // const tesNode = ReactDOM.findDOMNode(this.refs.market);
    // tesNode.scrollIntoView();
    // console.log(this.props.icon.ref)
    // scrollToComponent(this.props.icon.ref);

    // console.log('scrolling');
    // window.scrollTo({ behavior: 'smooth', top: myRef.current.offsetTop })
    // scroller.scrollTo('myScrollToElement', {
    //   duration: 1500,
    //   delay: 100,
    //   smooth: "easeInOutQuint",
    //   containerId: 'ContainerElementID',
    // });
    // location.href = `#${this.props.icon.ref}`
    // this.refs.market.scrollIntoView();
  }
  render () {
    return (
      <div
      className={this.props.icon.key <= 2 ? "serviceicon-test" : "serviceicon-two"}
      onClick={this.scrollview}
      style={{maxWidth:'300px', margin:'auto'}}>
        <img src={this.props.icon.image} style={{cursor:'pointer', height:'128px', width:'128px'}}/> 
        {this.props.icon.title}
      </div>
)
}
};

export default ServiceIcons;