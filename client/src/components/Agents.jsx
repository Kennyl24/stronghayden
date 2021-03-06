import React from 'react';
import ReactDOM from 'react-dom';
import team from './team.jpg';

import { Link } from 'react-router-dom';
import Agent from './Agent.jsx';
import {isMobile} from 'react-device-detect';
import laurenN from './laurenN.jpg';
import gary from './gary.jpg';
import Brian from './Brian.jpg';
import cameron from './cameron.jpg';
import diana from './diana.jpg';
import Kalah from './Kalah.jpg';
import joe from './joe.jpg';
import patrick from './patrick.jpg';
import matt from './Matt.jpg';
import michael from './michael.jpg';
import LG from './LG.jpg';
import {Helmet} from "react-helmet";
import kelly from './Kellys.jpg';

const agents = [
  {
    name: 'Gary Van Dam',
    title: 'Broker / Owner',
    email: 'gvd100@aol.com',
    phone: '(707) 342-1538',
    bre: '01321102',
    image: gary,
    about: 
    <div>
    <p style={{color:'#2c2f33'}}>
          Gary Van Dam is a licensed real estate Broker who brings with him extensive business development, marketing and sales experience, and specializes in investment and development properties.
          <br/>
          Gary came to Napa because of the valley’s beauty and his belief in its future. Originally from Los Angeles, he attended the University of Southern California (USC) – School of Business. He is heavily involved with classic automobiles and vintage racing.
          <br/>
      </p>   
          </div>,
  },
  {
    name: 'Michael Holcomb',
    title: 'Broker',
    email: 'mholcomb@stronghayden.com',
    phone: '(707) 332-2654',
    bre: '01458995',
    image: michael,
    about: 
    <div>
    <p>
    Michael's driving passion is transforming and enriching his community through his love of real estate.  His knowledge of the marketplace, outstanding relationships in the community and creativity in finding both opportunities and solutions to challenging situations are the three ingredients to his success.  Michael is well-respected, cares about our community and works diligently for his clients to help them achieve their goals.
    <br/><br/>
Unlocking value through property repositioning, aggressive leasing, and proficient property management are what gets Michael up in the morning.
<br/><br/>
Because of Michael's commitment and passion for what he does, he's organically attracted a powerhouse team to Michael Holcomb Commercial Partners to better serve clients.
<br/><br/>
His years of experience show. In addition to be being named 2018 Power Broker for three area counties, Michael has served on several Napa Valley boards and commissions over the years including being appointed by former Governor Brown to Napa Town & Country Fair Board.  Michael has also earned the highly respected Certified Commercial Investment Manager (CCIM) designation, awarded to those who have completed advanced coursework in financial and market analysis while also demonstrating an extensive portfolio of completed investment sales transactions.
<br/><br/>
Michael is a Napa native who lives here in the Valley with his wife Claire and four children.
</p>
          </div>
  },
  {
    name: 'Matt Connolly',
    title: 'Broker',
    email: 'mconnolly@stronghayden.com',
    phone: '(707) 477-6189',
    bre: '01164569',
    image: matt,
    about: 
    <div>
    <p>
    Strong & Hayden as a Broker Associate with a focus on Retail, Office, and Industrial leasing, sales, acquisition, and development consulting throughout Napa and Solano Counties. With +-40 years in the real estate industry with extensive brokerage, development and asset management experience working with property owners and developers enhancing value. Matt offers many services to his clients.
    <br/><br/>
    Matt currently leases many commercial retail and office properties in Napa for owners and tenants; represents owners and buyers in investment property sales, and coordinates tenant improvements for restaurants, retail, and office improvements for his clients.
    <br/><br/>
    Prior to Strong & Hayden, Matt managed commercial condominium projects and developed a medical office complex and retail center located in Nevada. Prior to that, Matt served as Development Director for Channel Properties, where he developed mixed-use, multi-family, mini-storage and commercial projects. Notable local projects accomplished where the Winship Building acquisition, earthquake retrofit,  leasing and Tenant improvements (TI’s); the Alexandria Building acquisition, leasing and TI’s; the Riverfront project management of design, entitlements, financing, and initial start of construction; and the Solano Storage, Fairfield mixed-use mini-storage-retail project and property management and leasing. In addition, Matt worked with the Chelsea Property Group where he was responsible for their West Coast project acquisitions, entitlements, construction management and TI’s, locally managing the development of the Napa and Petaluma Premium Outlets. Earlier with Connolly Development, he coordinated the development, leasing, and management of 22 grocery-anchored shopping centers through-out northern California. 
    <br/><br/>
    Matt Connolly is a graduate of St. Mary's College where he earned a BS in Business Administration and is a licensed California real estate broker.   </p>   
    <br/><br/>
          </div>,
  },
  {
    name: 'Joe Fischer',
    title: 'Assistant',
    email: 'jfischer@stronghayden.com',
    phone: '(707) 738-5853',
    bre: '01982853',
    image: joe,
    about: 
    <div>
    <p>
    Bio Coming Soon! 

      </p>   
          </div>,
  },
  {
    name: 'Patrick Gleeson',
    title: 'Sales Agent',
    email: 'pgleeson@stronghayden.com',
    phone: '(707) 235-5766',
    bre: '01212486',
    image: patrick,
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
          </div>,
  },
  {
    name: 'Lynsey Grayson',
    title: 'Sales Agent',
    email: 'lgrayson@stronghayden.com',
    phone: '(707) 815-1434',
    bre: '02041819',
    image: LG,
    about: 
    <div>
    <p>
    Bio Coming Soon! 

      </p>   
          </div>,
  },
  {
    name: 'Kim Streblow',
    title: 'Luxury Residential and Vineyard Specialist',
    email: 'kstreblow@stronghayden.com',
    phone: '(707) 799-1780',
    bre: '01966115',
    image: kelly,
    about: 
    <div>
    <p>
    Bio Coming Soon! 

      </p>   
          </div>,
  },
  // {
  //   name: 'Brian Dodd',
  //   title: 'Sales Agent',
  //   email: 'bdodd@stronghayden.com',
  //   phone: '(707) 363-5000',
  //   bre: '02048098',
  //   image: Brian,
  //   about: 
  //   <div>
  //   <p>
  //   A third generation local from Napa, California, Brian Dodd is a real estate agent at Strong & Hayden. As such, he has a unique perspective on the community, a strong network and knows what works in the area. Brian adds value to every transaction that he’s involved in.
  //   <br/> <br/>
  //   Brian graduated from California State University, Chico with a BS in business administration with a marketing focus. He is currently on the Board of Directors for Rotary Club of Napa Sunrise and Leadership Napa Valley, and volunteers for Collabria Care Hospice.
    
  //     </p>   
  //         </div>,
  // },
//   {
//     name: 'Kamron Jones',
//     title: 'Leasing Representative',
//     email: 'kjones@stronghayden.com',
//     phone: '(707) 217-4450',
//     bre: '02072519',
//     image: cameron,
//     about: 
//     <div>
//       <p>
//    Michael always knew Kamron would make an incredible representative and aggressively recruited Kamron to join the team. 
//    <br/>
//    <br/>
//    His caring nature, long-term visioning strategies and genuine care for each client who comes his way sets him apart from other brokers — as do his prior seven years of experience in sales and client care. 
//    <br/>
//    <br/>
//    Kamron's approach is person-centered, and he's innately a problem-solver, taking time to listen to his clients' hopes, dreams and concerns and absorb them before helping them plan their next moves.
//    <br/><br/>
//    He studied American history in college and spent time in the ministry before moving to high-school-level education and coaching. When Kamron's not working with clients or making deals, he's head track and field coach at his alma mater, Napa High School, or spending time with his wife Danielle and their four young children.
//    </p>
//           </div>,
//   },
//   {
//     name: 'Diana Gelow',
//     title: 'Marketing & Business Development Partner',
//     email: 'diana@dianagelow.com',
//     phone: '(707)-486-8406',
//     bre: '01784261',
//     image: diana,
//     about: 
//     <div>
//     <p>
//   Diana's business acumen and Michael's vision combine to create a contracting triple threat — savvy, smart and successful. She has the unique ability to pinpoint a business's growth potential and see its next steps and can help businesses position themselves for the success she sees. Diana brings over 25 years of marketing and real estate services experience with her to the Michael Holcomb Commercial Partners team.
//   <br/>
//   <br/>
//   She has worked with both large corporate real estate services companies and boutique firms as a business and marketing consultant. “We are more than a Commercial brokerage team at MHCP @Strong&Hayden we are a holistic business-building team”, Diana says.
//   <br/>
//   <br/>
//   Diana and the team look at every property as a unique opportunity to build, create or match the ideal tenant, owner and developer. They create tailored marketing action plans and deliverables based on our client’s vision and best use for the property to ensure long-term success for our clients.
//   <br/>
//   <br/>
//   Diana is a long-term Napa native and lives here in Napa with her husband Michael who owns a Napa-based Vineyard management company and winery alongside their two grown children.
//   </p>
//         </div>,
//   },
//   {
//   name: 'Kalah Rowland',
//   title: 'Client Services Manager',
//   email: 'krowland@stronghayden.com',
//   phone: '(707) 319-4620',
//   bre: '01458995',
//   image: Kalah,
//   about: 
//   <div>
//   <p>
//   Kalah Rowland is the keystone of the Michael Holcomb Commercial Partners Team @ Strong & Hayden. Kalah oversees and manages all projects, transactions, client relationships and our property management division. 
//   <br/>
//   <br/>
//   Dedicated, determined and resourceful, her organizational skills are legendary among both clients and our strategic partners, and are bolstered by her background in merchandising and marketing. 
//   <br/>
//   <br/>
//   Working diligently to provide our clients with outstanding service, Kalah's favorite part of her job is getting to know each individual client and building a long-lasting relationship. 
//   <br/>
//   <br/>
//   Kalah takes a personal approach to each client's needs, getting to know their businesses and properties and making sure she's always on hand to facilitate their next steps. Kalah loves the collaborative, fun and driven environment at Michael Holcomb Commercial Partners.
//     </p>   
//         </div>,
// },
  {
    name: 'Lauren Nicholsen',
    title: 'Sales Agent',
    email: 'lnicholsen@stronghayden.com',
    phone: '(707)-486-8406',
    bre: '01784261',
    image: laurenN,
    about: 
    <div>
    <p style={{fontFamily:'Open Sans,sans-serif'}}>
          Bio Coming Soon! 
      </p>   
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
    <div style={{paddingTop: isMobile ? '0px' : '0px'}}>
    <Helmet>
                <meta charSet="utf-8" />
                <title>Strong & Hayden Agents</title>
                <meta name="description" content="The Strong & Hayden Team's Agents"/>
            <meta name="keywords" content="Napa, Vallejo, Commerical Real Estate, Latest lisitings, hotels, property, vineyards" />
            <meta name="description" content="The Latest Commercial Real Estate Listings in Napa and it's surronding areas" />
            <meta name="og:description" content="The Latest Commercial Real Estate Listings in Napa and it's surronding areas" />
            <meta property="og:title" content={this.state.innerHTML ? this.state.innerHTML : 'Strong & Hayden Agents'} />
            {/* <meta property="og:image" content={gary} /> */}
            <meta property="og:url" content={window.location.href}/>
      </Helmet>
    <div className="home-background" style={{position:'relative', top: isMobile ? '120px':'00px',backgroundColor: 'rgba(238, 238, 238, 0.41) !important', backgroundImage: `url(${team})`, backgroundRepeat: 'no-repeat', imageRendering: '-webkit-optimize-contrast', backgroundSize:isMobile ? 'contain':'cover', height: isMobile ? '400px' : '90vh', width: '100%', marginBottom:'0px'}}>
    {/* <h1 style={{color:'white',  fontWeight:'800',paddingTop:'150px', textAlign:'center'}}> STRONG & HAYDEN TEAM </h1> */}
    </div>
    <h1 style={{color:'#3d633b', paddingTop:'20px', textAlign:'center'}}> OUR AGENTS </h1>
    <div className="agent-container" style={{marginBottom:'4%'}}>
        {agents.length > 0 ? agents.map((agent, index) => 
        <Agent 
        agent={agent} 
        index={index} 
        onClick={this.clicked}
        />) : null}
    </div>
      </div>
)
}
};

export default Agents;