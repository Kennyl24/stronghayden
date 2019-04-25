import React from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router-dom';
import newBack from './newBack.jpg';
import LeadingBar from './LeadingBar.jsx';
import BottomNav from './BottomNav.jsx';

import Button from '@material-ui/core/Button';
import {Helmet} from "react-helmet";
import Script from 'react-load-script'
// import ScriptTag from 'react-script-tag';

class ListingsPage extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  componentDidMount() {
    window.scrollTo(0, 0);
}
handleScriptCreate() {
  this.setState({ scriptLoaded: false })
}
 
handleScriptError() {
  this.setState({ scriptError: true })
}
 
handleScriptLoad() {
  this.setState({ scriptLoaded: true })
}
  render () {
    return (
      <div>
      <LeadingBar/>
      {/* <BottomNav/> */}
      {/* <div id="buildout"></div>
      <Script
      url="//buildout.com/api.js?v8"
      onCreate={this.handleScriptCreate.bind(this)}
      onError={this.handleScriptError.bind(this)}
      onLoad={this.handleScriptLoad.bind(this)}
    />  */}
    {/* <Script type="text/javascript">
	      {BuildOut.embed({
		    token:     "85de2b584effdb53e40923ac5de37c8b85006ba8",
		    plugin:    "inventory",
		    target:    "buildout"
	    })};
</Script> */}
      {/* <ScriptTag isHydrating={true} type="text/javascript" src="//buildout.com/api.js?v8" />
      <ScriptTag isHydrating={true} type="text/javascript">
      
      {BuildOut.embed({
		    token:     "85de2b584effdb53e40923ac5de37c8b85006ba8",
		    plugin:    "inventory",
		    target:    "buildout"
      })}
      </ScriptTag> */}
      {/* <Script
      url="//buildout.com/api.js?v8"
      onCreate={this.handleScriptCreate.bind(this)}
      onError={this.handleScriptError.bind(this)}
      onLoad={this.handleScriptLoad.bind(this)}
    /> */}
      {/* <div id="buildout">
      <Helmet>
      <script type="text/javascript" src="//buildout.com/api.js?v8"></script>
      <script type="text/javascript">
	      {BuildOut.embed({
		    token:     "85de2b584effdb53e40923ac5de37c8b85006ba8",
		    plugin:    "inventory",
		    target:    "buildout"
	    })};
      </script>
      </Helmet>
  </div> */}
      </div>
)
}
};

export default ListingsPage;