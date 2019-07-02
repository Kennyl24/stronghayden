import React from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router-dom';
import LeadingBar from './LeadingBar.jsx';
import BottomNav from './BottomNav.jsx';
import CheckoutForm from './CheckoutForm.jsx';
import {Elements, StripeProvider} from 'react-stripe-elements';


class Payments extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render () {
    return (
      <div>
        <LeadingBar/>
        <StripeProvider apiKey="pk_test_XeY7d5CmID2TcMMFPhKxSbD90028ypuX7W">
        <div className="example">
          <h1>React Stripe Elements Example</h1>
          <Elements>
            <CheckoutForm />
          </Elements>
        </div>
      </StripeProvider>
        <BottomNav/>
      </div>
)
}
};

export default Payments;