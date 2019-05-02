import React from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Modal from 'react-responsive-modal';

class Agent extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      open :false,
    }
    this.onCloseModal = this.onCloseModal.bind(this);
    this.onOpenModal = this.onOpenModal.bind(this);
  }
  onOpenModal (){
    this.setState({ open: true });
  };

  onCloseModal(){
    this.setState({ open: false });
  };
  render () {
    return (
      <div className="agent-card">
      <img style={{width:'100%', height:'200px'}}src={this.props.agent.image}/>
      <h1 className='agent-header'>{this.props.agent.name}</h1>
      <div style={{display:'flex', flexDirection:'column'}}>
      <h1 className='agent-title'>{this.props.agent.title}</h1>
      {/* <a href = "mailto:${this.props.agent.email}">
      {this.props.agent.email}
      </a> */}
      {/* <a href = {this.props.agent.phone}>{this.props.agent.phone}</a> */}
      <Button onClick={this.onOpenModal} style={{borderColor:'#006f37', width:'150px',marginTop:'20px',  marginBottom:'20px'}}variant="outlined">
        Learn More
        </Button>
        <div className="example">
        <Modal
          open={this.state.open}
          onClose={this.onCloseModal}
          center
          classNames={{
            transitionEnter: 'transitionEnter',
            transitionEnterActive: 'transitionEnterActive',
            transitionExit: 'transitionExitActive',
            transitionExitActive: 'transitionExitActive',
          }}
          animationDuration={1000}
        >
          <p>
          Gary Van Dam is a licensed real estate Broker who brings with him extensive business development, marketing and sales experience, and specializes in investment and development properties.
          <br/>
          Gary came to Napa because of the valley’s beauty and his belief in its future. Originally from Los Angeles, he attended the University of Southern California (USC) – School of Business. He is heavily involved with classic automobiles and vintage racing.
          <br/>
         
          <ul>
          <h4> SPECIALIZATION</h4>
            <li>Commercial and Investment Sales</li>
            <li> Leasing of Retail and Office Properties</li>
            <li>Property Consulting and Analysis</li>
            </ul>
            <ul>
            <h4>PROFESSIONAL AFFILIATIONS</h4>
            <li>CCIM Institute</li>
            <li>International Council of Shopping Centers, (ICSC)</li>
            <li>Northern California Commercial Association of Realtors, (NCCAR)</li>
          </ul>
          <h4>DRE # 01321102</h4>
          <h4>Email: {this.props.agent.email}</h4>
          <h4>Office: (707) 226-2661</h4>
          <h4>Mobile: (707) 342-1538</h4>
          <h4>Fax: (707) 226-2339</h4>
          </p>
        </Modal>
      </div>
      </div>
      </div>
)
}
};

export default Agent;