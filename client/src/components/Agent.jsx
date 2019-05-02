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
        <h4 style={{fontSize:'42px'}}>{this.props.agent.name}</h4>
        {this.props.agent.about}
          <p>
          <h4>DRE: #{this.props.agent.bre}</h4>
          <h4>Email: {this.props.agent.email}</h4>
          <h4>Mobile: {this.props.agent.phone}</h4>
          <h4>Office: (707) 226-2661</h4>
          
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