import React from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router-dom';
import Agent from './Agent.jsx';
import {isMobile} from 'react-device-detect';

const agents = [
  {
    name: 'Gary Van Dam',
    title: 'Broker / Owner',
    email: 'gvd100@aol.com',
    phone: '(707) 342-1538',
    bre: '01321102',
    image: 'https://i.ibb.co/g9HTNRG/Van-Dam-Gary-c1-120x150.jpg',
    about: 
    <p>Gary Van Dam is a licensed real estate Broker who brings with him extensive business development, marketing and sales experience, and specializes in investment and development properties.

    Gary came to Napa because of the valley’s beauty and his belief in its future. Originally from Los Angeles, he attended the University of Southern California (USC) – School of Business. He is heavily involved with classic automobiles and vintage racing.
    
    SPECIALIZATION
    Commercial and Investment Sales
    Leasing of Retail and Office Properties
    Property Consulting and Analysis
    PROFESSIONAL AFFILIATIONS
    CCIM Institute
    International Council of Shopping Centers, (ICSC)
    Northern California Commercial Association of Realtors, (NCCAR)'</p>
  },
  {
    name: 'Matt Connolly',
    title: 'Broker',
    email: 'mconnolly@stronghayden.com',
    phone: '(707) 477-6189',
    bre: '01164569',
    image: 'https://i.ibb.co/g9HTNRG/Van-Dam-Gary-c1-120x150.jpg',
    about: 
    <p>Gary Van Dam is a licensed real estate Broker who brings with him extensive business development, marketing and sales experience, and specializes in investment and development properties.

    Gary came to Napa because of the valley’s beauty and his belief in its future. Originally from Los Angeles, he attended the University of Southern California (USC) – School of Business. He is heavily involved with classic automobiles and vintage racing.
    
    SPECIALIZATION
    Commercial and Investment Sales
    Leasing of Retail and Office Properties
    Property Consulting and Analysis
    PROFESSIONAL AFFILIATIONS
    CCIM Institute
    International Council of Shopping Centers, (ICSC)
    Northern California Commercial Association of Realtors, (NCCAR)'</p>
  },
  {
    name: 'Michael Holcomb',
    title: 'Broker',
    email: 'mholcomb@stronghayden.com',
    phone: '(707) 332-2654',
    bre: '01458995',
    image: 'https://i.ibb.co/g9HTNRG/Van-Dam-Gary-c1-120x150.jpg',
    about: 
    <p>Gary Van Dam is a licensed real estate Broker who brings with him extensive business development, marketing and sales experience, and specializes in investment and development properties.

    Gary came to Napa because of the valley’s beauty and his belief in its future. Originally from Los Angeles, he attended the University of Southern California (USC) – School of Business. He is heavily involved with classic automobiles and vintage racing.
    
    SPECIALIZATION
    Commercial and Investment Sales
    Leasing of Retail and Office Properties
    Property Consulting and Analysis
    PROFESSIONAL AFFILIATIONS
    CCIM Institute
    International Council of Shopping Centers, (ICSC)
    Northern California Commercial Association of Realtors, (NCCAR)'</p>
  },
  {
    name: 'Joe Fischer',
    title: 'Sales Agent',
    email: 'jfischer@stronghayden.com',
    phone: '(707) 738-5853',
    bre: '01458995',
    image: 'https://i.ibb.co/g9HTNRG/Van-Dam-Gary-c1-120x150.jpg',
    about: 
    <p>Gary Van Dam is a licensed real estate Broker who brings with him extensive business development, marketing and sales experience, and specializes in investment and development properties.

    Gary came to Napa because of the valley’s beauty and his belief in its future. Originally from Los Angeles, he attended the University of Southern California (USC) – School of Business. He is heavily involved with classic automobiles and vintage racing.
    
    SPECIALIZATION
    Commercial and Investment Sales
    Leasing of Retail and Office Properties
    Property Consulting and Analysis
    PROFESSIONAL AFFILIATIONS
    CCIM Institute
    International Council of Shopping Centers, (ICSC)
    Northern California Commercial Association of Realtors, (NCCAR)'</p>
  },
  {
    name: 'Patrick Gleeson',
    title: 'Sales Agent',
    email: 'pgleeson@stronghayden.com',
    phone: '(707) 235-5766',
    bre: '01212486',
    image: 'https://i.ibb.co/g9HTNRG/Van-Dam-Gary-c1-120x150.jpg',
    about: 
    <p>Gary Van Dam is a licensed real estate Broker who brings with him extensive business development, marketing and sales experience, and specializes in investment and development properties.

    Gary came to Napa because of the valley’s beauty and his belief in its future. Originally from Los Angeles, he attended the University of Southern California (USC) – School of Business. He is heavily involved with classic automobiles and vintage racing.
    
    SPECIALIZATION
    Commercial and Investment Sales
    Leasing of Retail and Office Properties
    Property Consulting and Analysis
    PROFESSIONAL AFFILIATIONS
    CCIM Institute
    International Council of Shopping Centers, (ICSC)
    Northern California Commercial Association of Realtors, (NCCAR)'</p>
  },
  {
    name: 'Lynsey Grayson',
    title: 'Sales Agent',
    email: 'lgrayson@stronghayden.com',
    phone: '(707) 815-1434',
    bre: '02041819',
    image: 'https://i.ibb.co/g9HTNRG/Van-Dam-Gary-c1-120x150.jpg',
    about: 
    <p>Gary Van Dam is a licensed real estate Broker who brings with him extensive business development, marketing and sales experience, and specializes in investment and development properties.

    Gary came to Napa because of the valley’s beauty and his belief in its future. Originally from Los Angeles, he attended the University of Southern California (USC) – School of Business. He is heavily involved with classic automobiles and vintage racing.
    
    SPECIALIZATION
    Commercial and Investment Sales
    Leasing of Retail and Office Properties
    Property Consulting and Analysis
    PROFESSIONAL AFFILIATIONS
    CCIM Institute
    International Council of Shopping Centers, (ICSC)
    Northern California Commercial Association of Realtors, (NCCAR)'</p>
  },
  {
    name: 'Kalah Rowland',
    title: 'Transaction Cordinator',
    email: 'krowland@stronghayden.com',
    phone: '(707) 319-4620',
    bre: '01458995',
    image: 'https://i.ibb.co/g9HTNRG/Van-Dam-Gary-c1-120x150.jpg',
    about: 
    <p>Gary Van Dam is a licensed real estate Broker who brings with him extensive business development, marketing and sales experience, and specializes in investment and development properties.

    Gary came to Napa because of the valley’s beauty and his belief in its future. Originally from Los Angeles, he attended the University of Southern California (USC) – School of Business. He is heavily involved with classic automobiles and vintage racing.
    
    SPECIALIZATION
    Commercial and Investment Sales
    Leasing of Retail and Office Properties
    Property Consulting and Analysis
    PROFESSIONAL AFFILIATIONS
    CCIM Institute
    International Council of Shopping Centers, (ICSC)
    Northern California Commercial Association of Realtors, (NCCAR)'</p>
  },
  {
    name: 'Brian Dodd',
    title: 'Sales Agent',
    email: 'bodd@stronghayden.com',
    phone: '(707) 363-5000',
    bre: '02048098',
    image: 'https://i.ibb.co/g9HTNRG/Van-Dam-Gary-c1-120x150.jpg',
    about: 
    <p>Gary Van Dam is a licensed real estate Broker who brings with him extensive business development, marketing and sales experience, and specializes in investment and development properties.

    Gary came to Napa because of the valley’s beauty and his belief in its future. Originally from Los Angeles, he attended the University of Southern California (USC) – School of Business. He is heavily involved with classic automobiles and vintage racing.
    
    SPECIALIZATION
    Commercial and Investment Sales
    Leasing of Retail and Office Properties
    Property Consulting and Analysis
    PROFESSIONAL AFFILIATIONS
    CCIM Institute
    International Council of Shopping Centers, (ICSC)
    Northern California Commercial Association of Realtors, (NCCAR)'</p>
  },
]
class Agents extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render () {
    return (
      <div style={{paddingTop: isMobile ? '180px' : '120px'}}>
    <h1 style={{color:'#006f37', textAlign:'center'}}> Our Agents </h1>
    <div className="agent-container" style={{marginBottom:'4%'}}>
        {agents.length > 0 ? agents.map((agent, key) => 
        <Agent 
        agent={agent} 
        key={key} 
        onClick={this.clicked}
        />) : null}
    </div>
      </div>
)
}
};

export default Agents;