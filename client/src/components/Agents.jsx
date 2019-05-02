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
    <div>
    <p>
          Gary Van Dam is a licensed real estate Broker who brings with him extensive business development, marketing and sales experience, and specializes in investment and development properties.
          <br/>
          Gary came to Napa because of the valley’s beauty and his belief in its future. Originally from Los Angeles, he attended the University of Southern California (USC) – School of Business. He is heavily involved with classic automobiles and vintage racing.
          <br/>
      </p>   
          <ul>
          <h4> SPECIALIZATION</h4>
            <li>Commercial and Investment Sales</li>
            <li> Leasing of Retail and Office Properties</li>
            <li>Property Consulting and Analysis</li>
            </ul>
            <ul>
            <h4>PROFESSIONAL AFFILIATIONS</h4>
            <li>CCIM Institute</li>
            <li>International Council of Shopping Centers, (ICSC)</li>
            <li>Northern California Commercial Association of Realtors, (NCCAR)</li>
          </ul>
          </div>,
  },
  {
    name: 'Matt Connolly',
    title: 'Broker',
    email: 'mconnolly@stronghayden.com',
    phone: '(707) 477-6189',
    bre: '01164569',
    image: 'https://i.ibb.co/g9HTNRG/Van-Dam-Gary-c1-120x150.jpg',
    about: 
    <div>
    <p>
    Matt Connolly joins Strong & Hayden as a Broker Associate with a focus on Retail, Office, and Industrial leasing, sales, acquisition, and development consulting throughout Napa and Solano Counties. Matt has 28 years in the real estate industry with extensive development and asset management experience working with property owners and developers enhancing value. Matt will be a welcome addition to the services S & H offers its clients.
    <br/> <br/>
    Matt recently managed commercial condominium projects and developing a new 290,000 square foot office complex and retail center located in Nevada. Prior to that, Matt served as Development Director for Channel Properties, where he developed mixed-use, multi-family, mini-storage and commercial projects.
    <br/> <br/>
    Notable local projects accomplished where the Winship Building acquisition, earthquake retrofit, and leasing; the Alexandria Building acquisition and leasing; the Riverfront project management of design, entitlements, financing, and initial start of construction; and the Solano Storage, Fairfield mixed-use mini-storage and retail project and property management and leasing. In addition, Matt worked with the Chelsea Property Group where he was responsible for their West Coast project acquisitions, entitlements, and construction management, locally managing the development of the Napa and Petaluma Premium Outlets.
    <br/> <br/>
    Earlier with Connolly Development, he coordinated the development, leasing, and management of 22 grocery-anchored shopping centers through-out northern California.
    <br/> <br/>
    Matt Connolly is a graduate of St. Mary’s College where he earned a BS in Business Administration and is a licensed California real estate broker. Member ICSC.
      </p>   
          <ul>
          <h4> SPECIALIZATION</h4>
            <li>Commercial and Investment Sales</li>
            <li> Leasing of Retail and Office Properties</li>
            <li>Property Consulting and Analysis</li>
            <li>Development Consulting</li>
            </ul>
            <ul>
            <h4>PROFESSIONAL AFFILIATIONS</h4>
            <li>International Council of Shopping Centers, (ICSC)</li>
          </ul>
          </div>,
  },
  {
    name: 'Brian Dodd',
    title: 'Sales Agent',
    email: 'bdodd@stronghayden.com',
    phone: '(707) 363-5000',
    bre: '02048098',
    image: 'https://i.ibb.co/g9HTNRG/Van-Dam-Gary-c1-120x150.jpg',
    about: 
    <div>
    <p>
    A third generation local from Napa, California, Brian Dodd is a real estate agent at Strong & Hayden. As such, he has a unique perspective on the community, a strong network and knows what works in the area. Brian adds value to every transaction that he’s involved in.
    <br/> <br/>
    Brian graduated from California State University, Chico with a BS in business administration with a marketing focus. He is currently on the Board of Directors for Rotary Club of Napa Sunrise and Leadership Napa Valley, and volunteers for Collabria Care Hospice.
    
      </p>   
          <ul>
          <h4> SPECIALIZATION</h4>
            <li>Commercial and Investment Sales</li>
            <li> Leasing of Commercial Properties</li>
            </ul>
          </div>,
  },
  {
    name: 'Joe Fischer',
    title: 'Sales Agent',
    email: 'jfischer@stronghayden.com',
    phone: '(707) 738-5853',
    bre: '01458995',
    image: 'https://i.ibb.co/g9HTNRG/Van-Dam-Gary-c1-120x150.jpg',
    about: 
    <div>
    <p>
          Gary Van Dam is a licensed real estate Broker who brings with him extensive business development, marketing and sales experience, and specializes in investment and development properties.
          <br/>
          Gary came to Napa because of the valley’s beauty and his belief in its future. Originally from Los Angeles, he attended the University of Southern California (USC) – School of Business. He is heavily involved with classic automobiles and vintage racing.
          <br/>
      </p>   
          <ul>
          <h4> SPECIALIZATION</h4>
            <li>Commercial and Investment Sales</li>
            <li> Leasing of Retail and Office Properties</li>
            <li>Property Consulting and Analysis</li>
            </ul>
            <ul>
            <h4>PROFESSIONAL AFFILIATIONS</h4>
            <li>CCIM Institute</li>
            <li>International Council of Shopping Centers, (ICSC)</li>
            <li>Northern California Commercial Association of Realtors, (NCCAR)</li>
          </ul>
          </div>,
  },
  {
    name: 'Patrick Gleeson',
    title: 'Sales Agent',
    email: 'pgleeson@stronghayden.com',
    phone: '(707) 235-5766',
    bre: '01212486',
    image: 'https://i.ibb.co/g9HTNRG/Van-Dam-Gary-c1-120x150.jpg',
    about: 
    <div>
    <p>
    Patrick moved to Napa, California with his family in 1970.  Patrick is a licensed real estate agent with Strong & Hayden.
    <br/><br/>
    As a teenager, Patrick spent the summers working in the vineyards and wine cellars for Justin Meyer at Silver Oak Cellars.   Justin taught Patrick the wine industry and after graduating from college with a degree in Marketing he joined the Sales/Marketing team at Silver Oak for nearly seven years.  In 1994, he left Silver Oak Cellars to run the American Vineyard Foundation (AVF).   
    <br/><br/>
    At the AVF, Patrick managed and coordinated the research programs for the California wine and wine grape industry.   The AVF was a stepping stone for Patrick as he shifted out of that role to assume the CEO Position at Meyer Family Enterprises MFE.  For over ten years at MFE, Patrick was responsible for running an investment portfolio that exceeded $50 million dollars.  A large portion of the portfolio was real estate projects – including vineyard development and winery management for the family’s winery.    
    <br/><br/>
    In those roles at the AVF and MFE, he worked with over 800 wineries and 4,500 growers up and down the state of California.  Wonderful  friendships were established and those relationships allowing Patrick in his role as a Commercial Real Estate to reach out to winery and grower principals – small, medium or large to pursue vineyard and winery opportunities.
      </p>   
          <ul>
          <h4> SPECIALIZATION</h4>
            <li>Vineyard and Winery Properties</li>
            </ul>
          </div>,
  },
  {
    name: 'Lynsey Grayson',
    title: 'Sales Agent',
    email: 'lgrayson@stronghayden.com',
    phone: '(707) 815-1434',
    bre: '02041819',
    image: 'https://i.ibb.co/g9HTNRG/Van-Dam-Gary-c1-120x150.jpg',
    about: 
    <div>
    <p>
          Gary Van Dam is a licensed real estate Broker who brings with him extensive business development, marketing and sales experience, and specializes in investment and development properties.
          <br/>
          Gary came to Napa because of the valley’s beauty and his belief in its future. Originally from Los Angeles, he attended the University of Southern California (USC) – School of Business. He is heavily involved with classic automobiles and vintage racing.
          <br/>
      </p>   
          <ul>
          <h4> SPECIALIZATION</h4>
            <li>Commercial and Investment Sales</li>
            <li> Leasing of Retail and Office Properties</li>
            <li>Property Consulting and Analysis</li>
            </ul>
            <ul>
            <h4>PROFESSIONAL AFFILIATIONS</h4>
            <li>CCIM Institute</li>
            <li>International Council of Shopping Centers, (ICSC)</li>
            <li>Northern California Commercial Association of Realtors, (NCCAR)</li>
          </ul>
          </div>,
  },
  {
    name: 'Michael Holcomb',
    title: 'Broker',
    email: 'mholcomb@stronghayden.com',
    phone: '(707) 332-2654',
    bre: '01458995',
    image: 'https://i.ibb.co/g9HTNRG/Van-Dam-Gary-c1-120x150.jpg',
    about: 
    <div>
    <p>
    Born and raised in Napa, California, Michael is a licensed real estate broker.
          <br/>
          Michael began his real estate career as a sales associate with Coldwell Banker commercial. After five years, he moved to Strong & Hayden focusing mainly on tenant/buyer representation.
          <br/>
      </p>   
          <ul>
          <h4> SPECIALIZATION</h4>
            <li>Commercial and Investment Sales</li>
            <li> Leasing of Retail and Office Properties</li>
            <li>Property Consulting and Analysis</li>
            </ul>
            <ul>
            <h4>PROFESSIONAL AFFILIATIONS</h4>
            <li>International Council of Shopping Centers, (ICSC)</li>
            <li>Northern California Commercial Association of Realtors, (NCCAR)</li>
          </ul>
          </div>
  },
  {
    name: 'Kamron Jones',
    title: 'Sales Agent',
    email: 'kjones@stronghayden.com',
    phone: '(707) 217-4450',
    bre: '02072519',
    image: 'https://i.ibb.co/g9HTNRG/Van-Dam-Gary-c1-120x150.jpg',
    about: 
    <div>
    <p>
          Gary Van Dam is a licensed real estate Broker who brings with him extensive business development, marketing and sales experience, and specializes in investment and development properties.
          <br/>
          Gary came to Napa because of the valley’s beauty and his belief in its future. Originally from Los Angeles, he attended the University of Southern California (USC) – School of Business. He is heavily involved with classic automobiles and vintage racing.
          <br/>
      </p>   
          <ul>
          <h4> SPECIALIZATION</h4>
            <li>Commercial and Investment Sales</li>
            <li> Leasing of Retail and Office Properties</li>
            <li>Property Consulting and Analysis</li>
            </ul>
            <ul>
            <h4>PROFESSIONAL AFFILIATIONS</h4>
            <li>CCIM Institute</li>
            <li>International Council of Shopping Centers, (ICSC)</li>
            <li>Northern California Commercial Association of Realtors, (NCCAR)</li>
          </ul>
          </div>,
  },
  {
    name: 'Kalah Rowland',
    title: 'Transaction Cordinator',
    email: 'krowland@stronghayden.com',
    phone: '(707) 319-4620',
    bre: '01458995',
    image: 'https://i.ibb.co/g9HTNRG/Van-Dam-Gary-c1-120x150.jpg',
    about: 
    <div>
    <p>
          Gary Van Dam is a licensed real estate Broker who brings with him extensive business development, marketing and sales experience, and specializes in investment and development properties.
          <br/>
          Gary came to Napa because of the valley’s beauty and his belief in its future. Originally from Los Angeles, he attended the University of Southern California (USC) – School of Business. He is heavily involved with classic automobiles and vintage racing.
          <br/>
      </p>   
          <ul>
          <h4> SPECIALIZATION</h4>
            <li>Commercial and Investment Sales</li>
            <li> Leasing of Retail and Office Properties</li>
            <li>Property Consulting and Analysis</li>
            </ul>
            <ul>
            <h4>PROFESSIONAL AFFILIATIONS</h4>
            <li>CCIM Institute</li>
            <li>International Council of Shopping Centers, (ICSC)</li>
            <li>Northern California Commercial Association of Realtors, (NCCAR)</li>
          </ul>
          </div>,
  },
  {
    name: 'Lauren Dodd',
    title: 'Sales Agent',
    email: 'bdodd@stronghayden.com',
    phone: '(707) 363-5000',
    bre: '02048098',
    image: 'https://i.ibb.co/g9HTNRG/Van-Dam-Gary-c1-120x150.jpg',
    about: 
    <div>
    <p>
          Gary Van Dam is a licensed real estate Broker who brings with him extensive business development, marketing and sales experience, and specializes in investment and development properties.
          <br/>
          Gary came to Napa because of the valley’s beauty and his belief in its future. Originally from Los Angeles, he attended the University of Southern California (USC) – School of Business. He is heavily involved with classic automobiles and vintage racing.
          <br/>
      </p>   
          <ul>
          <h4> SPECIALIZATION</h4>
            <li>Commercial and Investment Sales</li>
            <li> Leasing of Retail and Office Properties</li>
            <li>Property Consulting and Analysis</li>
            </ul>
            <ul>
            <h4>PROFESSIONAL AFFILIATIONS</h4>
            <li>CCIM Institute</li>
            <li>International Council of Shopping Centers, (ICSC)</li>
            <li>Northern California Commercial Association of Realtors, (NCCAR)</li>
          </ul>
          </div>,
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