import React from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router-dom';
import LeadingBar from './LeadingBar.jsx';
import BottomNav from './BottomNav.jsx';

import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  EmailIcon,
} from 'react-share';

const blog =     {
  blogCategory:'Insights & Updates',
  blogTitle:'Insights & Updates on Commercial Real Estate in the Napa Valley',
  blogAuthor: 'Michael Holcomb',
  blogText: 
  <p className="blog-text">
    <h1 className="homepage-header" style={{fontSize:'1.4em', color:'black'}}>"So...What's Happening Over There?"​</h1>
Welcome to our first in a series of weekly blogs on insights and behind the scenes of what’s happening in commercial real estate, new development, opportunities and exciting projects in the Napa Valley. 
<br/><br/>
Fifteen years ago I started my career in commercial real estate shortly after graduating from UC, Irvine with a degree in economics. Initially, I focused on working with tenants looking for the ideal building & location for their business. There is still nothing as fulfilling as helping my clients identify and negotiate the ideal location for their businesses.  These days I have an amazing team who also assist our tenants which allows me to focus more on working with owners, investors and landlords that are interested in leasing or selling their properties. It’s a great collaborative approach that allows us to provide a ton of value for our clients.  
<br/><br/>
Ten years ago I started working with my family and investors in redevelopment of some downtown Napa properties. Brokering connections sparked an intense drive for me to use my real estate knowledge to create vibrancy in the city where I grew up. The way I see it, bringing excitement to an area by introducing businesses customers will love is like bringing it back to life.
<br/><br/>
It's not easy, but it is incredibly rewarding.
<br/><br/>
The economics have to work, coupled with finding the right tenants. If you can find a building that has been neglected or simply just needs to be re-worked, you can invest in it, and offer a better property for the community that the tenant would appreciate and benefit from. As a result, the community gets to enjoy it by driving around and seeing it, it’s just a lot of fun.
<br/><br/>
There's almost nothing better.
<br/><br/>
One of my favorite projects I was involved in was at First & Main in the heart of downtown Napa.
<br/><br/>
<img style={{width:'400px', float:'right', marginLeft:'10px', height:'250px'}}src="https://i.ibb.co/Kz7Q1Hy/starbcuks.jpg"/>
It was fairly tired and run-down, and while it used to be home to a women's clothing boutique, a Chinese restaurant and an optometrist's office, it wasn't heavily trafficked. In addition, the businesses shut down too early, by evening it looked dead.
<br/><br/>
This was an important and ideal corner. We knew Starbucks was looking around and we approached them with the idea. We felt certain that Starbucks was going to be a catalyst and a spark for the Napa downtown renaissance, and it has been. It did a lot to bring excitement to the downtown area.
<br/><br/>
It’s a popular gathering place in the morning, noon and evening. We also mandated that the businesses in that building stay open late; before, there were very few businesses open past 6:00 pm.
<br/><br/>
That's what gets me up in the morning. That's why I do what I do. I love the idea that through both personal investments and working with property owners, I can play a first-hand role in revitalizing the city I live and raise my family.
<br/><br/>
Because I have my finger firmly on the pulse of the commercial real estate market in Napa, I'm asked all the time, “So, What’s Happening Over There,” I love answering that question, and thought this blog would be the best way to keep you up to date.
<br/><br/>
We have a ton of new and exciting projects coming up that will be highlighted weekly.
<br/><br/>
So stay tuned…Old Adobe Behind The Scenes will be highlighted next week.
<br/><br/>
Click here https://www.facebook.com/teamMHCP/ to follow my facebook business page where I will be sharing weekly updates and I welcome your questions and comments.
<br/><br/>
Regards,
<br/><br/>
Michael
  </p>
  ,
  blogImage: 'https://i.ibb.co/jWhCjzK/test.jpg',
  date: 'April 15, 2019'
};

class IndividualBlog extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      position:'fixed',
    }
  }
  render () {
    return (
      <div>
        <LeadingBar/>
      <div style={{width:'100%', height:'500px', paddingTop:'110px',backgroundColor:'#43b686', cursor:'pointer'}}>
      <h2 className='featured-title' style={{paddingTop:'20px'}}>{blog.blogTitle}</h2>
      <h2 className='featured-writing'>{blog.blogAuthor} | {blog.date}</h2>
      <div style={{display:'flex', paddingTop:'20px', alignItems:'center', justifyContent:'center'}}>
      <img className="featured-header-image" src={blog.blogImage}/>
      </div>
      </div>
      <div style={{position:this.state.position, left: '40px', paddingTop:'10px'}}> 
      <span style={{cursor:'pointer'}}>
  <FacebookShareButton children="IndividualBlog" url={window.location.href}  quote={blog.blogTitle} hashtag="#HildaHensleyTeam">
  <FacebookIcon size={40} round={true} />
  </FacebookShareButton>
  </span>
  <span style={{cursor:'pointer'}}>
  <LinkedinShareButton children="IndividualBlog" url={window.location.href}  title={blog.blogTitle} description="hello description">
  
  <LinkedinIcon size={40} round={true} />
  </LinkedinShareButton>
  </span>
  <span style={{cursor:'pointer'}}>
  <TwitterShareButton children="IndividualBlog" url={window.location.href}  title={blog.blogTitle} via={'BenchmarkMortgage'} hashtags={["HildaHensleyTeam"]}>
  <TwitterIcon size={40} round={true} />
  </TwitterShareButton>
  </span>
  <span style={{cursor:'pointer'}}>
  <EmailShareButton children="IndividualBlog" url={window.location.href}  title={blog.blogTitle} via={'BenchmarkMortgage'} hashtags={["HildaHensleyTeam"]}>
  <EmailIcon size={40} round={true} />
  </EmailShareButton>
  </span>

        </div>
      <div style={{marginLeft:'20%', width:'60%', marginRight:'20%'}}>
        {blog.blogText}
      </div>
      <BottomNav/>
      </div>
)
}
};

export default IndividualBlog;