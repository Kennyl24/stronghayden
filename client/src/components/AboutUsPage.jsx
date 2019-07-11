import React from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router-dom';
import LeadingBar from './LeadingBar.jsx';
import BottomNav from './BottomNav.jsx';
import AboutHeader from './AboutHeader.jsx';
import TeamExperience from './TeamExperience.jsx';
import Agents from './Agents.jsx';
import Mission from './Mission.jsx';
import AboutUs from './AboutUs.jsx';

import Button from '@material-ui/core/Button';

class AboutUsPage extends React.Component { 
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
      <AboutUs/>
      
      <BottomNav/>
      </div>
)
}
};

export default AboutUsPage;