
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import React from 'react';
import ReactDOM from 'react-dom';
import TextField from '@material-ui/core/TextField';

import { Link } from 'react-router-dom';
import {isMobile} from 'react-device-detect';
import Button from '@material-ui/core/Button';


class ContactPaper extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      name:'',
      email: '',
      phone: '',
      message: '',
    }
    this.submitData = this.submitData.bind(this)
  }
  submitData(){
    axios.post('/Contact', {
      email: this.state.email,
      name: this.state.name,
      phone: this.state.phone,
      message: this.state.message
    })
    .then( (response) =>  {
      setTimeout(() => {
      }, 500);
    })
    .catch( (error) => {
      return ('There seems to have been an error');
    });
    this.setState({
      name:'',
      email: '',
      phone: '',
      message: '',
    });
  }
  render () {
    return (
      <div>
      <Paper style={{zIndex:"9999999999999", paddingBottom:'10px', paddingRight:'10px', paddingLeft:'10px', position: 'absolute', right:'10px', top:'30%', height:'440px', width:'20%'}}>
        {/* <div style={{height:'40px', backgroundColor:'rgb(12, 110, 57)'}}>
          <h1 style={{textAlign:'center', lineHeight:'30px', fontSize:'20px'}}>Strong & Hayden Team</h1>
          </div> */}
        <Typography style={{textAlign:'center'}}variant="h5" component="h3">
          Contact us Today. 
        </Typography>
        <Typography style={{textAlign:'center'}} component="p">
        Our team will get back to you as soon as possible.
        </Typography>
        <TextField
          // style={{width:isMobile? '300px': '400px',marginRight: '15px'}}
          id="outlined-email-input"
          label="Name"
          type="Name"
          name="name"
          autoComplete="name"
          margin="normal"
          // variant="outlined"
          fullWidth
          value={this.state.name}
          onChange={(event) => {
            this.setState({
              name: event.target.value
            });
          }}
        />
        <TextField
          // style={{width:isMobile? '300px': '400px',marginRight: '15px'}}
          id="outlined-email-input"
          label="Phone"
          type="Phone"
          name="phone"
          autoComplete="phone"
          margin="normal"
          // variant="outlined"
          fullWidth
          value={this.state.email}
          onChange={(event) => {
            this.setState({
              email: event.target.value
            });
          }}
        />
        <TextField
          // style={{width:isMobile? '300px': '400px',marginRight: '15px'}}
          id="outlined-email-input"
          label="Email"
          type="email"
          name="email"
          autoComplete="email"
          margin="normal"
          // variant="outlined"
          fullWidth
          value={this.state.phone}
          onChange={(event) => {
            this.setState({
              phone: event.target.value
            });
          }}
        />
        <TextField
          // style={{width:isMobile? '300px': '400px',marginRight: '15px'}}
          id="outlined-email-input"
          label="Message"
          type="message"
          name="message"
          autoComplete="message"
          margin="normal"
          // variant="outlined"
          fullWidth
          // multiline={true}
          // rows={4}
          // rowsMax={4}
          value={this.state.message}
          onChange={(event) => {
            this.setState({
              message: event.target.value
            });
          }}
        />
        <div style={{textAlign:'center'}}>
          <Button onClick={this.submitData}variant="contained"style={{backgroundColor:"#006f37", color: 'white'}}> 
          Submit
          </Button>
          </div>
      </Paper>
    </div>
)
}
};

export default ContactPaper;
