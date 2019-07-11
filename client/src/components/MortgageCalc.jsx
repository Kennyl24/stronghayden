import React from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router-dom';
import mortgageJs from "mortgage-js"
import TextField from '@material-ui/core/TextField';
import {isMobile} from 'react-device-detect';
import axios from 'axios';
import Button from '@material-ui/core/Button';

// let mortgageCalculator = mortgageJs.createMortgageCalculator();
// mortgageCalculator.totalPrice = 800000;
// mortgageCalculator.downPayment = 160000;
// mortgageCalculator.interestRate = 0.045;
// mortgageCalculator.months = 360;
// mortgageCalculator.taxRate = 0.012;
// mortgageCalculator.insuranceRate = 0.0013;
// mortgageCalculator.mortgageInsuranceRate = 0.010;
// mortgageCalculator.mortgageInsuranceEnabled = true;
// mortgageCalculator.mortgageInsuranceThreshold = 0.2;
// mortgageCalculator.additionalPrincipalPayment = 100;
// let payment = mortgageCalculator.calculatePayment();
let mortgageCalculator = mortgageJs.createMortgageCalculator();
class MortgageCalc extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      interestRate: '4.5',
      loanLength: 120,
      taxRate: 1.2, 
      insuranceRate: .13, 
      monthlyPayment: null,
      numbers: false,
      // price: 0,
      // downPayment: '',
    }
    this.submitData = this.submitData.bind(this)
  }
  componentDidMount(){
    // console.log(mortgageCalculator.calculatePayment());
  }
  submitData(){
    console.log(this.state.taxRate / 100)
    mortgageCalculator.totalPrice = this.state.price;
    mortgageCalculator.downPayment = this.state.downPayment;
    mortgageCalculator.interestRate = this.state.interestRate / 100;
    mortgageCalculator.months = this.state.loanLength;
    mortgageCalculator.taxRate = this.state.taxRate / 100;
    mortgageCalculator.insuranceRate = this.state.insuranceRate / 100;
    // mortgageCalculator.mortgageInsuranceRate = 0.010;
    // mortgageCalculator.mortgageInsuranceEnabled = true;
    // mortgageCalculator.mortgageInsuranceThreshold = 0.2;
    // mortgageCalculator.additionalPrincipalPayment = 100;
    let payment = mortgageCalculator.calculatePayment();
    console.log(mortgageCalculator.calculatePayment());

    this.setState({
      numbers: true, 
      payment: payment
    })
  }
  render () {
    return (
      <div>
        <div>
        {/* <Button> Close <Button/> */}
        <h3 className="homepage-header">Mortgage Calculator</h3>
        <TextField
          style={{width: isMobile? '300px': '400px', height: '50px', marginRight: '15px'}}
          id="outlined-email-input"
          label="Price (Purchase Price $)"
          type="number"
          name="price"
          // autoComplete="name"
          margin="normal"
          variant="outlined"
          value={this.state.price}
          onChange={(event) => {
            this.setState({
              price: event.target.value
            }, ()=> {
              console.log(this.state.price)
            });
          }}
        />
        <TextField
          style={{width: isMobile? '300px': '400px', height: '50px', marginRight: '15px'}}
          id="outlined-email-input"
          label="Down Payment ($ Amount)"
          type="number"
          // name="name"
          // autoComplete="name"
          margin="normal"
          variant="outlined"
          value={this.state.downPayment}
          onChange={(event) => {
            this.setState({
              downPayment: event.target.value
            });
          }}
        />
        <TextField
          style={{width: isMobile? '300px': '400px', height: '50px', marginRight: '15px'}}
          id="outlined-email-input"
          label="Interest Rate(%)"
          type="percentage"
          name="Interest Rate"
          // autoComplete="name"
          margin="normal"
          variant="outlined"
          value={this.state.interestRate}
          onChange={(event) => {
            this.setState({
              interestRate: event.target.value
            });
          }}
        />
        <TextField
          style={{width: isMobile? '300px': '400px', height: '50px', marginRight: '15px'}}
          id="outlined-email-input"
          label="Loan Length (months)"
          type="number"
          name="Loan Length"
          // autoComplete="name"
          margin="normal"
          variant="outlined"
          value={this.state.loanLength}
          onChange={(event) => {
            this.setState({
              loanLength: event.target.value
            });
          }}
        />
         <TextField
          style={{width: isMobile? '300px': '400px', height: '50px', marginRight: '15px'}}
          id="outlined-email-input"
          label="Tax Rate (%)"
          type="percentage"
          name="Tax Rate"
          // autoComplete="name"
          margin="normal"
          variant="outlined"
          value={this.state.taxRate}
          onChange={(event) => {
            this.setState({
              taxRate: event.target.value
            });
          }}
        />
                 <TextField
          style={{width: isMobile? '300px': '400px', height: '50px', marginRight: '15px'}}
          id="outlined-email-input"
          label="Insurance Rate(%)"
          type="percentage"
          name="Insurance Rate"
          // autoComplete="name"
          margin="normal"
          variant="outlined"
          value={this.state.insuranceRate}
          onChange={(event) => {
            this.setState({
              insuranceRate: event.target.value
            });
          }}
        />
         {/* <TextField
          style={{width: isMobile? '300px': '400px', height: '50px', marginRight: '15px'}}
          id="outlined-email-input"
          label="Mortgage Insurance Rate "
          // type="name"
          name="Mortgage Insurance Rate"
          // autoComplete="name"
          margin="normal"
          variant="outlined"
          value={this.state.mortgageInsuranceRate}
          onChange={(event) => {
            this.setState({
              mortgageInsuranceRate: event.target.mortgageInsuranceRate
            });
          }} */}
        {/* /> */}
    <Button variant="contained" onClick={this.submitData}>Submit</Button>
    </div>
    {this.state.numbers ? 
    <h1 style={{color:'black', fontSize:'16px'}}>
      Total Loan Amount: ${this.state.payment.loanAmount}
      <br/>
      Total Monthly Payment (Estimated): ${this.state.payment.total}
      <br/>
      Interest Payment (Estimated): ${this.state.payment.paymentSchedule[0].interestPayment}
      <br/>
      Principal Payment (Estimated): ${this.state.payment.paymentSchedule[0].principalPayment}
      <br/>
      Taxes Monthly (Estimated): ${this.state.payment.tax}
      <br/>
      Insurance Monthly (Estimated): ${this.state.payment.insurance}
      <br/>
      {/* Total Monthly Payment(Estimated): ${this.state.payment.total}
      <br/> */}
      {/* Total Monthly Payment(Estimated): ${this.state.monthlyPayment} */}
      {/* Total Monthly Payment(Estimated): ${this.state.monthlyPayment} */}
      {/* Total Monthly Payment(Estimated): ${this.state.monthlyPayment} */}
       </h1>
      : null}
      </div>
)
}
};

export default MortgageCalc;