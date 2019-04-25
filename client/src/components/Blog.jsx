import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import SvgIcon from '@material-ui/core/SvgIcon';
import IconButton from '@material-ui/core/IconButton';

class Blog extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      showBlog: false,
    }
    this.showFull = this.showFull.bind(this)
  }
  showFull(){
    console.log(this.props.blog.blogTitle.join('-'))
    this.setState({
      showBlog: !this.state.showBlog
    })
  }
  componentWillMount(){
    console.log(this.props.blog.blogTitle.split(' ').join('-'))
  }
  render () {
    return (

    <div onClick={() => window.location.href = '/individualblog'}style={{padding:'0 24px 48px', minWidth: '26%', maxWidth:'320px'}}>
    <div className="card">
    <img className="card-image" src={this.props.blog.blogImage}/>
    <div className="container">
      <h4 className="blog-category"><b>{this.props.blog.blogCategory}</b></h4> 
      <h4 className="blog-title"><b>{this.props.blog.blogTitle}</b></h4> 
    </div>
    {/* <div style={{paddingBottom:'10px', paddingTop:'10px'}}>
    <Link to={{ pathname: `/blogs/${this.props.blog.blogTitle.split(' ').join('-')}`, state: { key: this.props.index} }}className="read-more"><Button variant="outlined" style={{borderColor: '#242f6e', color: '#242f6e'}}>Read More</Button></Link>
    </div> */}
    </div>
    </div>
)
}
};

export default Blog;