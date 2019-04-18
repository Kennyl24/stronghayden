import React from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import {isMobile} from 'react-device-detect';

import Button from '@material-ui/core/Button';

class GetInTouch extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email:'',
      phone:'',
      message:'',
    }
    this.submitIt = this.submitIt.bind(this);
  }
  componentDidMount() {
    window.scrollTo(0, 0);
}
submitIt(){
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
      <div style={{width:'50%', minWidth:'50%', maxWidth:'50%', minHeight:'100%', backgroundColor:'#ededed'}}>
      <h1 style={{color:'black',  textAlign:'center', marginLeft:'20%', marginRight:'20%', fontSize:'25px', borderBottom: '2px solid green'}}>
        Our Home Office 
        </h1>
        <div style={{textAlign:'center'}}>
      <p>
      433 Soscol Ave Suite A110
      </p>
      <p>
      Napa CA 94559
      </p>
      <p>
      Phone: (707) 226-2661
      </p>
      <p>
      Email: lgrayson@stronghayden.com
      </p>
      <h1 style={{color:'black', fontSize:'25px', marginLeft:'20%', marginRight:'20%', borderBottom: '2px solid green'}}>
      Message Us Directly
      </h1>
      <div style={{marginLeft:'3%'}}>
      <TextField
          style={{width: isMobile? '300px': '400px', height: '50px', marginRight: '15px', borderColor:'#006f37'}}
          id="outlined-email-input"
          label="Name"
          type="name"
          name="name"
          autoComplete="name"
          margin="normal"
          variant="outlined"
          value={this.state.name}
          onChange={(event) => {
            this.setState({
              name: event.target.value
            });
          }}
        />
        <TextField
          style={{width: isMobile? '300px': '400px', height: '50px', marginRight: '15px'}}
          id="outlined-email-input"
          label="Email"
          type="email"
          name="email"
          autoComplete="email"
          margin="normal"
          variant="outlined"
          value={this.state.email}
          onChange={(event) => {
            this.setState({
              email: event.target.value
            });
          }}
        />
        <TextField
          style={{width: isMobile? '300px': '400px',height: '50px' , marginRight: '15px'}}
          id="outlined-email-input"
          label="Phone"
          type="phone"
          name="phone"
          autoComplete="phone"
          margin="normal"
          variant="outlined"
          value={this.state.phone}
          onChange={(event) => {
            this.setState({
              phone: event.target.value
            });
          }}
        />
        <TextField
          style={{width:isMobile? '300px': '400px',marginRight: '15px'}}
          id="outlined-email-input"
          label="Message"
          type="message"
          name="message"
          autoComplete="message"
          margin="normal"
          variant="outlined"
          fullWidth
          multiline={true}
          rows={4}
          rowsMax={4}
          value={this.state.message}
          onChange={(event) => {
            this.setState({
              message: event.target.value
            });
          }}
        />
        </div>
        <div>
        <Button onClick={this.submitIt} variant="contained"style={{marginLeft: '0%', marginTop:'0%', width: '25%', minWidth:'150px', backgroundColor:"#006f37", color: 'white'}}> 
          Submit
          </Button>
          </div>
      </div>
      </div>
)
}
};

export default GetInTouch;