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
      image: this.props.agent.image
    }
    this.onCloseModal = this.onCloseModal.bind(this);
    this.onOpenModal = this.onOpenModal.bind(this);
    this.changeImage = this.changeImage.bind(this);
    this.replaceImage = this.replaceImage.bind(this);
  }
  componentDidMount(){
    // console.log(this.props)
  }
  onOpenModal (){
    // this.setState({ open: true });
  };

  onCloseModal(){
    // this.setState({ open: false });
  };
  changeImage(){
    // console.log('trying to change')
    this.props.agent.secondImage ? this.setState({
      image: this.props.agent.secondImage
    }): null
    // this.setState({ open: false });
  };
  replaceImage(){
    // console.log('trying to change')
    this.props.agent.secondImage ? this.setState({
      image: this.props.agent.image
    }): null
    // this.setState({ open: false });
  };
  render () {
    return (
      <div className="agent-card">
      <Link to={{ pathname: `/agents/${this.props.agent.name.split(' ').join('-')}`, state: { key: this.props.index} }}className="read-more">
      
      <img style={{width:'200px', minWidth:'200px', maxWidth:'200px', paddingBottom:  this.props.agent.name === 'Kim Streblow' ? '25px' :'0px' , height: this.props.agent.name === 'Kim Streblow' ? '250px' :'300px'}} src={`/${this.state.image}`} alt={this.props.agent.name}/>
      <h1 className='agent-header'>{this.props.agent.name}</h1>
      <div style={{display:'flex', flexDirection:'column', minHeight:'200px'}}>
      <h1 className='agent-title' style={{minHeight: this.props.height ? '60px' : null}}>{this.props.agent.title}</h1>
      <h1 className='agent-info'>CalBRE# {this.props.agent.bre}</h1>
      {/* <h1 className='agent-info'>{this.props.agent.email}</h1> */}
      {/* <h1 className='agent-info'>{this.props.agent.phone}</h1> */}
        <div style={{alignItems:'center', textAlign:'center'}}>
        <Button style={{borderColor:'#006f37', width:'150px',marginTop:'20px',  marginBottom:'20px'}}variant="outlined">
        Learn More
        </Button>
        </div>
      </div>
     
      </Link>
      </div>
)
}
};

export default Agent;