import React from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router-dom';
import newBack from './newBack.jpg';
import NavBar from './NavBar.jsx';
import Button from '@material-ui/core/Button';

class HomePage extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      phoneNumber:'707254-8891'
    }
    this.titleClick=this.titleClick.bind(this);
  }
  titleClick(){
    location.reload();
  }
  componentDidMount() {
    window.scrollTo(0, 0);
}
  render () {
    return (
      <div style={{position:'relative', top:'00px', backgroundImage: `url(${newBack})`, backgroundRepeat: 'no-repeat', imageRendering: '-webkit-optimize-contrast', backgroundSize:'cover', height:'100vh', width: '100%', marginBottom:'0px'}}>
      <NavBar/>
      <div className="front-text">
      <h1>
        We Provide, sales, leasing, consulting and Management Of Commercial Real Estate. 
      </h1>
      <h2>Creating Value in Middle Market Commercial Real Estate</h2>
      <Button variant="outlined" style={{color:"#43b686", borderColor:'#43b686', marginRight:'10px'}} >
        Find a Property
      </Button>
      <Button variant="outlined" style={{color:"#43b686", borderColor:'#43b686'}}>
        Contact Us
      </Button>
      </div>
      </div>
)
}
};

export default HomePage;