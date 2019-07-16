import React from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router-dom';


class AmortSchedule extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render () {
    return (
      <div style={{display:'flex', flexDirection:'row'}}>
      <span style={{width:'60px', minWidth:'60px', padding:'10px', marginRight:'10px'}}>{this.props.month.count}.</span>
         <span style={{width:'60px', minWidth:'60px', padding:'10px', marginRight:'10px'}}>${this.props.month.principalPayment.toFixed(2)}</span>
         <span style={{width:'60px', minWidth:'60px', padding:'10px', marginRight:'10px'}}>${this.props.month.interestPayment.toFixed(2)}</span>
         <span style={{width:'60px', minWidth:'60px', padding:'10px', marginRight:'10px'}}>${this.props.month.balance.toFixed(2)}</span>
       </div>
)
}
};

export default AmortSchedule;