import React from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router-dom';


class AboutUs extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render () {
    return (
      <div style={{marginTop:'30px'}}>
      {/* <h1 style={{color:'rgb(62, 98, 58)', textAlign:'center', marginTop:'20px'}}>Our Broker's Offer</h1> */}
      <div style={{display:'flex', flexDirection:'row', flexWrap:'wrap', alignItems:'center', marginLeft:'10%', marginRight:'10%'}}>
      <div className="about-square">
      <h1 className="offer-header"> Local Expertiese</h1>
      <p>  A staff of professional brokers and clerical support personnel, dealing exclusively with commercial properties </p>
      </div>
        <div className="about-square">
        <h1 className="offer-header"> Team Concept</h1>
        <p>  The synergy of qualified brokers working cooperatively in the development and implementation of your marketing plan, and to work with the local and state government agencies </p>
        </div>
        <div className="about-square">
        <h1 className="offer-header"> Advantage To You</h1>
       <p> We know the market! Our database of leasing and sales information helps us provide you with comprehensive knowledge of the market. </p>
        </div>
        <div className="about-square">
        <h1 className="offer-header"> Results Driven</h1>
        <p>We can offer savings in both time and money. We can provide an increased number of prospective tenants. We can also give you maximum exposure of your property if you list with us. </p>
        </div>
      </div>
      </div>
)
}
};

export default AboutUs;