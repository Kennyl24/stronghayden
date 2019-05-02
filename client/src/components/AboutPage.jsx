import React from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router-dom';
import newBack from './newBack.jpg';
import LeadingBar from './LeadingBar.jsx';
import BottomNav from './BottomNav.jsx';
import AboutHeader from './AboutHeader.jsx';
import TeamExperience from './TeamExperience.jsx';
import Agents from './Agents.jsx';
import Mission from './Mission.jsx';
import AboutUs from './AboutUs.jsx';

import Button from '@material-ui/core/Button';

class AboutPage extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  componentDidMount() {
    window.scrollTo(0, 0);
}
  render () {
    return (
      <div className="test">
      <LeadingBar/>
      <AboutHeader/>
      <TeamExperience/>
      <AboutUs/>
      <div onClick={() => window.location.href = '/team'} 
    className="extra-nav"
    >
      <h1 style={{textAlign:'center', lineHeight:'150px', color:'inherit'}}> Our Agents
 </h1>
      </div>
      <BottomNav/>
      </div>
)
}
};

export default AboutPage;