import React from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Modal from 'react-responsive-modal';
import LeadingBar from './LeadingBar.jsx';
import {isMobile} from 'react-device-detect';
import BottomNav from './BottomNav.jsx'
import TextField from '@material-ui/core/TextField';
import DeleteIcon from '@material-ui/icons/Delete';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import axios from 'axios';
import cameron from './cameron.jpg';
import diana from './diana.jpg';
import Kalah from './Kalah.jpg';
import mhteam from './mhteam.jpg';
import Agent from './Agent.jsx';
import michael from './michael.jpg';
import {Helmet} from "react-helmet";

const agents = [
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
    name: 'Kamron Jones',
    title: 'Leasing Representative',
    email: 'kjones@stronghayden.com',
    phone: '(707) 217-4450',
    bre: '02072519',
    image: cameron,
    about: 
    <div>
      <p>
   Michael always knew Kamron would make an incredible representative and aggressively recruited Kamron to join the team. 
   <br/>
   <br/>
   His caring nature, long-term visioning strategies and genuine care for each client who comes his way sets him apart from other brokers — as do his prior seven years of experience in sales and client care. 
   <br/>
   <br/>
   Kamron's approach is person-centered, and he's innately a problem-solver, taking time to listen to his clients' hopes, dreams and concerns and absorb them before helping them plan their next moves.
   <br/><br/>
   He studied American history in college and spent time in the ministry before moving to high-school-level education and coaching. When Kamron's not working with clients or making deals, he's head track and field coach at his alma mater, Napa High School, or spending time with his wife Danielle and their four young children.
   </p>
          </div>,
  },
  {
    name: 'Diana Gelow',
    title: 'Marketing & Business Development Partner',
    email: 'diana@dianagelow.com',
    phone: '(707)-486-8406',
    bre: '01784261',
    image: diana,
    about: 
    <div>
    <p>
  Diana's business acumen and Michael's vision combine to create a contracting triple threat — savvy, smart and successful. She has the unique ability to pinpoint a business's growth potential and see its next steps and can help businesses position themselves for the success she sees. Diana brings over 25 years of marketing and real estate services experience with her to the Michael Holcomb Commercial Partners team.
  <br/>
  <br/>
  She has worked with both large corporate real estate services companies and boutique firms as a business and marketing consultant. “We are more than a Commercial brokerage team at MHCP @Strong&Hayden we are a holistic business-building team”, Diana says.
  <br/>
  <br/>
  Diana and the team look at every property as a unique opportunity to build, create or match the ideal tenant, owner and developer. They create tailored marketing action plans and deliverables based on our client’s vision and best use for the property to ensure long-term success for our clients.
  <br/>
  <br/>
  Diana is a long-term Napa native and lives here in Napa with her husband Michael who owns a Napa-based Vineyard management company and winery alongside their two grown children.
  </p>
        </div>,
  },
  {
  name: 'Kalah Rowland',
  title: 'Client Services Manager',
  email: 'krowland@stronghayden.com',
  phone: '(707) 319-4620',
  bre: '01458995',
  image: Kalah,
  about: 
  <div>
  <p>
  Kalah Rowland is the keystone of the Michael Holcomb Commercial Partners Team @ Strong & Hayden. Kalah oversees and manages all projects, transactions, client relationships and our property management division. 
  <br/>
  <br/>
  Dedicated, determined and resourceful, her organizational skills are legendary among both clients and our strategic partners, and are bolstered by her background in merchandising and marketing. 
  <br/>
  <br/>
  Working diligently to provide our clients with outstanding service, Kalah's favorite part of her job is getting to know each individual client and building a long-lasting relationship. 
  <br/>
  <br/>
  Kalah takes a personal approach to each client's needs, getting to know their businesses and properties and making sure she's always on hand to facilitate their next steps. Kalah loves the collaborative, fun and driven environment at Michael Holcomb Commercial Partners.
    </p>   
        </div>,
},
]
class Agent2 extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      key: null,
      data: null,
      open :false,
      agent: null, 
      showMore: false,
      name: '',
      email:'',
      phone:'',
      message:'',
      company:'',
      agentEmail:'',
      test2: window.location.href.split('/')[window.location.href.split('/').length-1].split('-').join(' '),
      test: window.location.href.split('/')[window.location.href.split('/').length-2].split('-').join(' '),
    }
    this.onCloseModal = this.onCloseModal.bind(this);
    this.submitIt = this.submitIt.bind(this);
    this.onOpenModal = this.onOpenModal.bind(this);
    this.showInfo = this.showInfo.bind(this);
    this.clicked = this.clicked.bind(this);
    this.addDefaultSrc = this.addDefaultSrc.bind(this);
  }
  componentDidMount() {
    // console.log(this.state.agent.name)
    console.log(this.props)
    window.scrollTo(0, 0);
}
  componentWillMount(){
    console.log(window.location.href);
      if (typeof this.props.location.state !== 'undefined'){
        console.log(this.props.location.state.key)
        console.log(this.props.agents[this.props.location.state.key])
        console.log(this.props.agents[this.props.location.state.key].image)
        this.setState({
          key: this.props.location.state.key
        }, () => this.setState({
          agent: this.props.agents[this.state.key],
          image: this.props.agents[this.props.location.state.key].image,
          data: true
        }, ()=> {console.log(this.state.agent)}));
        // for( let i = 0; i < this.props.agents.length; i++){
        //   console.log('u', this.state.test2)
        //   // console.log('y', this.props.agents[i].image)
        //   if(this.state.test2 === this.props.agents[i].name){
        //     console.log('true')
        //     this.setState({
        //       key: i,
        //     }, ()=> this.setState({
        //       agent: this.props.agents[this.state.key],
        //       data: true
        //     }, ()=> {console.log(this.state.agent.image)}));
        //   }
        // };
      } else {
      for( let i = 0; i < this.props.agents.length; i++){
        if(this.state.test.toLowerCase() === this.props.agents[i].name.toLowerCase()){
          console.log(this.props.agents[i])
          this.setState({
            key: i,
          }, () => {
            console.log(this.state.key)
          this.setState({
            agent: this.props.agents[this.state.key],
            image: this.props.agents[this.state.key].image,
            data: true
          }, () => {console.log(this.state.agent.image)})});
        }
      };
    }
  }
  submitIt(){
    axios.post('/Email', {
      email: this.state.email,
      name: this.state.name,
      phone: this.state.phone,
      message: this.state.message,
      agentEmail: this.state.agent.email,
      agentName: this.state.agent.name,
      company: this.state.company
    })
    .then( (response) =>  {
      setTimeout(() => {
      }, 500);
    })
    .catch( (error) => {
      return ('There seems to have been an error');
    });
    this.setState({
      name:'',
      email: '',
      phone: '',
      message: '',
      company: ''
    });
  }
  onOpenModal (){


    // this.setState({ open: true });
  };
  clicked(){
    document.location.reload(true);
  }
showInfo(){
    this.setState({
      showMore: !this.state.showMore
    })
  }
  onCloseModal(){
    this.setState({ open: false });
  };
  addDefaultSrc(e){
    console.log(e)
    console.log('e', e.target.src);
    // this.setState({
    //   image: this.state.agent[key].image
    // })
    // e.target.src = 'some default image url'
  }
  render () {
    if (!this.state.data) {
      console.log('retrieved')
      return <div/>
    }
    return (
      <div>
<Helmet>
        <meta charSet="utf-8" />
        <title>{`${this.state.agent.name} of Strong & Hayden`}</title>
        <meta name="description" content="The Strong & Hayden Team's Agents"/>
        <meta name="keywords" content="Napa, Vallejo, Commerical Real Estate, Latest lisitings, hotels, property, vineyards" />
            <meta name="description" content="The Latest Commercial Real Estate Listings in Napa and it's surronding areas" />
            <meta name="og:description" content="The Latest Commercial Real Estate Listings in Napa and it's surronding areas" />
            <meta property="og:title" content={this.state.innerHTML ? this.state.innerHTML : this.state.agent.name} />
            <meta property="og:image" content={this.state.agent.image} />
            <meta property="og:url" content={window.location.href}/>
        {/* <link rel="canonical" href="https://stronghayden.com/agents/" /> */}
</Helmet>
      <LeadingBar/>
      {this.state.agent.name === 'Michael Holcomb' ?
      <div>
      <div className="home-background" style={{position:'relative', top: isMobile ? '120px':'00px',backgroundColor: 'rgba(238, 238, 238, 0.41) !important', backgroundImage: `url(/${mhteam})`, backgroundRepeat: 'no-repeat', imageRendering: '-webkit-optimize-contrast', backgroundSize:isMobile ? 'contain':'cover', height: isMobile ? '400px' : '80vh', width: '100%', marginBottom:'0px'}}>
      </div>
      <div>
      <img style={{marginLeft: 'auto',
  marginRight: 'auto',
  display: 'block', height: isMobile ? '175px': '350px', width:isMobile ? '261px' : '522px'}} src="https://i.ibb.co/5k075vv/MHCP-logo.jpg"/>
      </div>
      <div style={{width:'70%', marginLeft:'15%', textAlign:'center'}}>
      <p style={{fontSize:'19px'}}>Michael Holcomb Commercial Partners (MHCP) is a stellar
group of collaborative entrepreneurs who deliver the
highest level of personalized service in the field of
commercial real estate and hospitality. We offer fully
integrated creative solutions through our breadth of
expertise—investment asset acquisition, development and
management services. MHCP strives to exceed your
expectations with each transaction, every time.

<br/><br/>
We make things happen!</p>
<br/><br/>
<a style={{color: '#bca36e', borderBottom:'1px solid black', fontSize:'19px'}} href="http://www.teammhcp.com" target="_blank">Team MHCP</a>
</div>
      </div>
      
      
      
      
      : null}
      <div className="agent-container2" style={{marginTop:isMobile ? '100px' : this.state.agent.name === 'Michael Holcomb' ? '5%' :'10%'}}>
      <div className="agent-lead" style={{marginLeft: isMobile ? 0 : '10%'}}>
      <div className="agent-lead-item" style={{marginTop:'0px', cursor:'auto', marginLeft: isMobile ? '0px': '40px' ,minWidth:'200px'}}>
      <img onError={this.addDefaultSrc} className="agent-image" src={`/${this.state.image}`}/>
      </div>
      <div className="agent-lead-item" style={{cursor:'auto',marginTop: isMobile ? '20px': '50px',  marginLeft: isMobile ? '20px': '80px'}}>
      <h1 className="agent-name" style={{color:'black'}}>{this.state.agent.name}</h1>
      <h1 className="agent-name" style={{color:'black', fontSize:'16px'}}>{this.state.agent.title}</h1>
      <p>License # CA {this.state.agent.bre}</p>
      </div>
      {isMobile ? 
      <div style={{width:'100%'}}>
      <Button variant="contained" style={{width:'90%', marginLeft:'5%', marginTop:'25px', backgroundColor:'#006f37'}} >
     <a href={`tel:${this.state.agent.phone}`}> Call {this.state.agent.name.split(' ')[0]}</a>
    </Button>
      <Button variant="contained" style={{width:'90%', marginLeft:'5%', marginTop:'25px', backgroundColor:'#006f37'}} >
      <a href={`mailto:${this.state.agent.email}`}> Email {this.state.agent.name.split(' ')[0]}</a>
    </Button>
    <Button onClick={this.showInfo}style={{width:'90%', marginLeft:'5%', marginTop:'25px'}} >
      {this.state.showMore ? 'View Less' :'View More'} <ArrowDownward/>
    </Button>
    {this.state.showMore ? 
         <div className="agent-lead-item">
         <h3 style={{fontSize:'16px', margin:0, marginTop:'8px', marginBottom:'10px'}}>Location</h3>
         <div style={{textAlign:'left'}}>
         
         <a href="https://www.google.com/maps/dir//433+Soscol+Ave+A110,+Napa,+CA+94559/@38.2913408,-122.2796044,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x8085060d64b28763:0x86c2a7bfd93882c1!2m2!1d-122.2763325!2d38.2893383" target="_blank" >
         <div style={{display:'flex', flexDirection:'row'}}>
         <img src="https://i.ibb.co/Yy28dQy/icons8-marker-26.png" alt="icons8-marker-26"  style={{height:'20px', width:'20px'}}border="0"/>
         <p 
         className="contact-info"
         >
         433 Soscol Ave <br/> Suite A110
         </p>
         </div>
         </a>
         
         <p 
         className="contact-info"
         style={{marginLeft:'34px'}}
         >
         Napa, CA 94559
         </p>
         <div style={{display:'flex', flexDirection:'row'}}>
      <img src="https://img.icons8.com/ios/50/000000/phone.png" style={{height:'20px', width:'20px'}}/>
      <p 
      className="contact-info"
      >
      {this.state.agent.name === 'Michael Holcomb' ? '(707) 294-2944' : '(707) 226-2661'}
      </p>
      </div>
         </div>
         </div>
    : null}
    </div>
      : 
      <div style={{display:'flex', flexDirection:'row'}}>
      <div className="agent-lead-item">
      <h3 style={{fontSize:'16px', margin:0, marginTop:'55px', marginBottom:'10px'}}>Location</h3>
      <div style={{textAlign:'left'}}>
      
      <a href="https://www.google.com/maps/dir//433+Soscol+Ave+A110,+Napa,+CA+94559/@38.2913408,-122.2796044,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x8085060d64b28763:0x86c2a7bfd93882c1!2m2!1d-122.2763325!2d38.2893383" target="_blank" >
      <div style={{display:'flex', flexDirection:'row'}}>
      <img src="https://i.ibb.co/Yy28dQy/icons8-marker-26.png" alt="icons8-marker-26"  style={{height:'20px', width:'20px'}}border="0"/>
      <p 
      className="contact-info"
      style={{marginLeft:'2px'}}
      >
      433 Soscol Ave <br/> Suite A110
      </p>
      </div>
      </a>
      
      <p 
      className="contact-info"
      style={{marginLeft:'2px'}}
      >
      Napa, CA 94559
      </p>
      </div>
      </div>
      <div className="agent-lead-item">
      <h3 style={{fontSize:'16px', margin:0, marginTop:'55px', marginBottom:'10px'}}>Contact</h3>
      <div style={{display:'flex', flexDirection:'row'}}>
      <img src="https://img.icons8.com/ios/50/000000/phonelink-ring.png" style={{height:'20px', width:'20px'}}/> 
      <p 
      className="contact-info"
      >
      <a href={`tel:${this.state.agent.phone}`}>
      {this.state.agent.phone}
      </a>
      </p>
      </div>
      <div style={{display:'flex', flexDirection:'row'}}>
      <img src="https://img.icons8.com/ios/50/000000/phone.png" style={{height:'20px', width:'20px'}}/>
      <p 
      className="contact-info"
      >
     {this.state.agent.name === 'Michael Holcomb' ? <a href="tel:7072942944">(707) 294-2944</a> : <a href="tel:7072262661">(707) 226-2661</a>}
      </p>
      </div>
      <div style={{display:'flex', flexDirection:'row'}}>
     <img src="https://img.icons8.com/metro/26/000000/secured-letter.png" style={{marginTop:'3px', height:'20px', width:'20px'}}/> 
     <p 
     className="contact-info"
     >
            <a href={`mailto:${this.state.agent.email}`} >
      {this.state.agent.email}
      </a>
      </p>
      </div>
      {this.state.agent.name === 'Michael Holcomb' ? 
      <div>
      <div style={{display:'flex', flexDirection:'row'}}
       onClick={() => {
        window.open(
          'https://www.facebook.com/pg/teamMHCP/posts/',
          '_blank' // <- This is what makes it open in a new window.
        );
      }}
      >
      <img src="https://img.icons8.com/ios-filled/50/000000/facebook-new.png" style={{height:'20px', width:'20px'}}/> 
      <p 
      className="contact-info"
      >
      Facebook
      </p>
      </div>
      <div style={{display:'flex', flexDirection:'row'}}
      onClick={() => {
        window.open(
          'https://www.linkedin.com/in/michael-holcomb-0552556b/',
          '_blank' // <- This is what makes it open in a new window.
        );
      }}
      >
      <img src="https://img.icons8.com/color/48/000000/linkedin.png" style={{height:'20px', width:'20px'}}/> 
      <p 
      className="contact-info"
      >
      LinkedIn
      </p>
      </div>
      </div>
      : null }
      </div>
      </div>
      }
      </div>
      <div style={{textAlign:'left', marginTop:'40px', marginLeft: isMobile ?  '5%' :'20%', marginRight:isMobile ? '5%' : '20%'}}>
        {/* <h3 style={{fontWeight:'200', color:'grey', fontSize:'19px'}}>About</h3> */}
        <h3 style={{fontWeight:'200', fontSize:'24px', color:'black'}}>Professional Story</h3>
        {this.state.agent.about}
        </div>
      </div>
      {this.state.agent.name === 'Michael Holcomb' ?
      <div style={{paddingTop: isMobile ? '180px' : '120px'}}>
    <h1 style={{color:'#bca36e', textAlign:'center'}}>Meet The MHCP Team</h1>
    <div className="agent-container" onClick={this.clicked} style={{marginBottom:'4%'}}>
        {agents.length > 0 ? agents.map((agent, index) => 
        <Agent 
        height={true}
        agent={agent} 
        index={index} 
        />) : null}
      </div>
      </div>
      : null }
    {this.state.agent.name === 'Michael Holcomb' ? null :  <div style={{backgroundColor:'#e8e8e8', marginTop:'70px'}}>
      <h2 style={{color:'black', textAlign:'center'}}>How Can I Help You?</h2>
      <form  noValidate autoComplete="off" style={{ marginLeft:isMobile ? '3%' : '15%', marginRight: isMobile ? '3%' : '10%'}}>
      <TextField
      style={{width:isMobile ?  '340px' : '440px', marginLeft:'16px', backgroundColor:'none'}}
        required
        id="filled-name"
        label="Name"
        // onChange={handleChange('name')}
        margin="normal"
        variant="standard"
        value={this.state.name}
        onChange={(event) => {
          this.setState({
            name: event.target.value
          });
        }}
      />
      <TextField
      required
      style={{width:isMobile ?  '340px' :'440px',  marginLeft:'16px'}}
        id="filled-uncontrolled"
        label="Email"
        defaultValue=""
        margin="normal"
        variant="standard"
        value={this.state.email}
        onChange={(event) => {
          this.setState({
            email: event.target.value
          });
        }}
      />
      <TextField
        required
        style={{width:isMobile ?  '340px' : '440px',  marginLeft:'16px'}}
        id="filled-required"
        label="Phone"
        margin="normal"
        variant="standard"
        value={this.state.phone}
        onChange={(event) => {
          this.setState({
            phone: event.target.value
          });
        }}
      />
      <TextField
        style={{width:isMobile ?  '340px' : '440px',  marginLeft:'16px'}}
        id="filled-required"
        label="Company"
        margin="normal"
        variant="standard"
        value={this.state.company}
        onChange={(event) => {
          this.setState({
            company: event.target.value
          });
        }}
      />
      <TextField
        required
        style={{width:isMobile ?  '340px' : '540px',  marginLeft:'16px'}}
        id="filled-required"
        label="Message"
        margin="normal"
        variant="standard"
        value={this.state.message}
        onChange={(event) => {
          this.setState({
            message: event.target.value
          });
        }}
      />
      </form>
      <div style={{justifyContent:'center', marginTop:'30px', paddingBottom:'30px', textAlign:'center'}}>
    <Button onClick={this.submitIt}variant="contained" style={{backgroundColor:'white'}} >
      Email {this.state.agent.name.split(' ')[0]}
    </Button>
    </div>
        </div> }
      <BottomNav/>
      </div>
)
}
};

export default Agent2;