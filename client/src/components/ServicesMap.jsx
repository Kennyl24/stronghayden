import React from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router-dom';
import Service from './Service.jsx';
const services = [
  {
    title: 'BROKERAGE SERVICES',
    text: 'Strong & Hayden provides tenants, owners and investors with a broad range of real estate services in office, retail, industrial, multi-family and land market segments. Our experienced professionals have comprehensive local and regional market data that will help clients make knowledgeable real estate decisions.  Our in-depth local market knowledge ensures that every assignment is executed with superior results.',
    image: 'https://i.ibb.co/k32BmX2/handshake.jpg',
    key: 1,
    ref: 'brokerage',
  },
  {
    title: 'INVESTMENT SERVICES',
    text: 'Strong & Hayden professionals work with buyers and sellers to develop a thorough understanding of the clients’ needs. Our experience with acquisitions, dispositions and 1031 exchanges combined with our national resources allow us to market each asset quickly through numerous local and national sources to maximize the value. We have the resources, knowledge and experience to assist each buyer or seller in making the best investment decisions.',
    image: 'https://i.ibb.co/DpHDQbL/investement.jpg',
    key: 2,
    ref: 'investment',
  },
  {
    title: 'CONSTRUCTION MANAGEMENT & DEVELOPMENT',
    text: 'Whether you are acquiring a new property, updating your current facility or planning a new one, or to coordinate tenant improvements for your tenants, our experienced professionals can manage the due diligence, entitlements, and construction process. Strong & Hayden’s capabilities cover all aspects of construction management and development from site selection, governmental approvals and budget evaluation to contractor selection, bidding and supervision through client move in.  We will work with each client during the development process to ensure the project is completed efficiently and within budget.',
    image: 'https://i.ibb.co/HT14rc6/Adobe-Stock-167160244.jpg',
    key: 3,
    ref: 'construction',

  },
  {
    title: 'MARKET RESEARCH & ANALYSIS',
    text: 'Strong & Hayden professionals have the latest commercial real estate market information and trends that are essential in helping clients make informed decisions.  With such comprehensive data, our professionals can help each client determine various real estate alternatives.  ',
    image: 'https://i.ibb.co/mCcBv8V/Adobe-Stock-131425459.jpg',
    key: 4, 
    ref: 'market',
  }
]

class ServicesMap extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
    }
    this.clicked = this.clicked.bind(this);
  }
  clicked(){
    console.log('clicking', key)
    this.setState({
      clicked: !this.state.clicked
    })
  }
  render () {
    return (
      <div className="about-container" style={{marginBottom:'4%'}}>
        {services.length > 0 ? services.map((service, key) => 
        <Service 
        service={service} 
        key={key} 
        onClick={this.clicked}
        />) : null}
    </div>
)
}
};

export default ServicesMap;