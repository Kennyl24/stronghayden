import React from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router-dom';
// import React, {Component} from 'react';
import StripeCheckout from 'react-stripe-checkout';
import {CardElement, injectStripe} from 'react-stripe-elements';
import Button from '@material-ui/core/Button';
import axios from 'axios';

class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {complete: false};
    this.submit = this.submit.bind(this);
  }

  // async submit(ev) {
  //   // User clicked submit
  //   let token = this.props.stripe.createToken({name: "Name"});
  //   let response =  fetch("/charge", {
  //     method: "POST",
  //     headers: {"Content-Type": "text/plain"},
  //     body: token.id
  //   }, () => {
  //     console.log('tryigg')
  //     if (response.ok) console.log("Purchase Complete!")
  //   });
  
  // }
  async submit(ev) {
    let {token} = await this.props.stripe.createToken({name: "Name"});
    let response = await axios.post('/charge', {
      // method: "POST",
      headers: {"Content-Type": "text/plain"},
      body: token.id
    });
  
    if (response.ok) console.log("Purchase Complete!")
  }
  // submit(event){
  //   console.log('submitting)')
  //   let token = this.props.stripe.createToken({name: "Name"});
  //   console.log(token);
  //   axios.post('/charge', {
  //     token: token, 
  //     amount:'20',
  //   })
  //   .then( (response) =>  {
  //     setTimeout(() => {
  //     }, 500);
  //   })
  //   .catch( (error) => {
  //     return ('There seems to have been an error');
  //   });
  //   this.setState({
  //   });
  // }
  render() {
    return (
      
      <div style={{textAlign:'center'}}>
          <h1 style={{color:'black', marginTop:"20px", fontSize:'24px'}}> 
          Charge Details:</h1>
          <br/>
          <br/>

          <h1 style={{color:'black', fontSize:'18px'}}> 
          Commision Amount: $XXXXX.XX
          <br/>
          <br/>
          Credit Card Charge(2.25%): $XXXXX.XX
          <br/>
          <br/>
          Total Amount: $XXXXX.XX
          </h1>
        <div>
        <StripeCheckout
        stripeKey="pk_test_XeY7d5CmID2TcMMFPhKxSbD90028ypuX7W"
        token={this.onToken}
        panelLabel="Pay {{amount}}"
      />
          </div>
          {/* render() { */}
  {this.state.complete ?  <h1>Purchase Complete</h1> :
      <div className="checkout" style={{marginTop:'50px', width:'30%', marginLeft:'35%'}}>
        <h1 style={{color:'black', fontSize:'18px'}}>Would you like to complete the purchase?</h1>
        <CardElement />
        <Button variant="contained" style={{marginTop:'30px', marginBottom:'30px'}}onClick={this.submit}>Send</Button>
      </div>}
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);