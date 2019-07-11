import React from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router-dom';
import LeadingBar from './LeadingBar.jsx';
import BottomNav from './BottomNav.jsx';
import BlogHeader from './BlogHeader.jsx';
import BlogMap from './BlogMap.jsx';
import Button from '@material-ui/core/Button';

class BlogPage extends React.Component { 
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
      <div>
      <LeadingBar/>
      <BlogHeader/>
      <BlogMap/>
      <BottomNav/>
      </div>
)
}
};

export default BlogPage;