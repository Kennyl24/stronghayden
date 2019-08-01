import React from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router-dom';
// import React, {Component} from 'react';
import StripeCheckout from 'react-stripe-checkout';
import {CardElement, injectStripe} from 'react-stripe-elements';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import {isMobile} from 'react-device-detect';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
// import axios from 'axios';
const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },

  cssLabel: {
    color : 'black'
  },
  '& label.Mui-focused': {
    color: 'green',
  },
  cssLabelFocused: {
    color:'purple'
  },
  cssOutlinedInput: {
    '&$cssFocused $notchedOutline': {
      borderColor: `green !important`,
      color: 'black'
    }
  },

  cssFocused: {
    borderColor: `${theme.palette.primary.main} !important`,
    color: 'black'
  },

  notchedOutline: {
    borderWidth: '1px',
    borderColor: 'grey !important',
    color: 'black'
  },

});
class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      complete: false,
      commission: 0,
      charge: 0,
      total: 0,
    };
    this.calculate = this.calculate.bind(this);
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
  calculate(){
   let charge = this.state.commission * .0299;
   let total = Number(this.state.commission) + Number(charge)
   this.setState({
    charge: charge,
    total: total,
   })
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
    const { classes } = this.props;

    return (
      <div style={{textAlign:'center'}}>
          <h1 style={{color:'black', marginTop:"20px", fontSize:'24px'}}> 
          Charge Details:</h1>
          <br/>
          <br/>

          <h1 style={{color:'black', fontSize:'18px'}}> 
          Commision Amount: 
          <TextField
              InputLabelProps={{
                classes: {
                  root: classes.cssLabel,
                  focused: classes.cssFocused,
                },
              }}
              InputProps={{
                classes: {
                  root: classes.cssOutlinedInput,
                  focused: classes.cssFocused,
                  notchedOutline: classes.notchedOutline,
                },
                inputMode: "numeric"
              }}
          style={{width: isMobile? '200px': '200px',height: '50px' , marginRight: '15px'}}
          id="outlined-email-input"
          label=" $ Amount"
          type="number"
          name="amount"
          // autoComplete="phone"
          margin="normal"
          variant="outlined"
          value={this.state.phone}
          onChange={(event) => {
            this.setState({
              commission: event.target.value,
            });
          }}
        />
        <Button onClick={this.calculate}>Submit</Button>
          <br/>
          <br/>
          Credit Card Charge(2.25%): {this.state.charge}
          <br/>
          <br/>
          Total Amount:  {this.state.total}
          </h1>
        <div>
        <StripeCheckout
        stripeKey="pk_test_XeY7d5CmID2TcMMFPhKxSbD90028ypuX7W"
        token={this.onToken}
        panelLabel="Pay {{amount}}"
      />
          </div>
          {/* render() { */}
  {/* {this.state.complete ?  <h1>Purchase Complete</h1> :
      <div className="checkout" style={{marginTop:'50px', width:'30%', marginLeft:'35%'}}>
        <h1 style={{color:'black', fontSize:'18px'}}>Would you like to complete the purchase?</h1>
        <CardElement />
        <Button variant="contained" style={{marginTop:'30px', marginBottom:'30px'}}onClick={this.submit}>Send</Button>
      </div>} */}
      </div>
    );
  }
}
export default injectStripe(withStyles(styles)(CheckoutForm));
// export default injectStripe(CheckoutForm);