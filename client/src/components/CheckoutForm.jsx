import React from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router-dom';
// import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';
import Button from '@material-ui/core/Button';

class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {complete: false};
    this.submit = this.submit.bind(this);
  }

  async submit(ev) {
    // User clicked submit
    let {token} = await this.props.stripe.createToken({name: "Name"});
    let response = await fetch("/charge", {
      method: "POST",
      headers: {"Content-Type": "text/plain"},
      body: token.id
    });
  
    if (response.ok) console.log("Purchase Complete!")
  }

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

          </div>
      <div className="checkout" style={{marginTop:'50px', width:'30%', marginLeft:'35%'}}>
        <h1 style={{color:'black', fontSize:'18px'}}>Would you like to complete the purchase?</h1>
        <CardElement />
        <Button variant="contained" style={{marginTop:'30px', marginBottom:'30px'}}onClick={this.submit}>Send</Button>
      </div>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);