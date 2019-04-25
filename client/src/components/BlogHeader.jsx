import React from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router-dom';

const blog =     {
  blogCategory:'Insights & Updates',
  blogTitle:'Insights & Updates on Commercial Real Estate in the Napa Valley',
  blogAuthor: 'Michael Holcomb',
  blogText: 
  <p>
    <h1 className="homepage-header" style={{fontSize:'1.4em'}}>Mortgage Points – What Are They and Should You Buy Them?</h1>
 
During the mortgage application process, you’re likely to be asked whether you want to pay mortgage points. Typically, few people know what points are or how they work. And, unfortunately, many people inherently believe that points are bad. (Hint: They’re not.)
<br/><br/>
<h1 className="homepage-header" style={{fontSize:'1.4em'}}>Let’s start with the first question: “What are mortgage points?”</h1>

In the simplest terms, mortgage points are fees you pay to lower your mortgage interest rate. Typically, one point is equal to 1% of the mortgage total. So, if your mortgage is for $500,000, one point is $5,000, two points is $10,000, etc. For each point you pay, your mortgage interest rate goes down a little bit. Think of it as paying some interest upfront in order to secure a lower interest rate and thereby lower monthly payments.
<br/><br/>
<h1 className="homepage-header" style={{fontSize:'1.4em'}}>The next question then is: “Should I pay points?” The answer: “It depends.”</h1>

Let’s go back to that $500,000 mortgage example. For a 30-year fixed loan with a 4% interest rate, the monthly payment would be $2387.08. If you pay one point ($5,000) your lender may reduce your interest rate to 3.75%. That would reduce your monthly payment to $2315.58 – a difference of $71.50 per month. That may not seem significant on a monthly basis, but over the course of the 30-year mortgage, it’s actually a savings of $25,739.47.
<br/><br/>
The key, of course, is determining your break-even timeline. In other words, how long would you need to stay in the home to recoup that initial $5,000 you paid for mortgage points? In this example, you’d need to stay in your home 70 months, or 5.8 years, for that $71.50 savings to equal $5,000. On average, most mortgage points have a break-even timeline of between five and eight years. 
<br/><br/>
Therefore, if you know the home you’re purchasing is a starter home that you plan to keep for three to five years, then paying points doesn’t make sense. But if you know you’re buying your forever home, then you may want to consider paying a point or two in order to save money in the long run.  
<br/><br/>
As you can see, mortgage points aren’t always a bad idea. In some cases, they can help you save a significant amount of money. It all depends on your goals and timeline. Your mortgage banker can help you with calculations so you can determine whether paying mortgage points is a wise decision. 
<br/><br/>
Is applying for a mortgage in your future? Contact us. As mortgage bankers, we can help you make the best decision for your needs.
    </p>
  ,
  blogImage: 'https://i.ibb.co/jWhCjzK/test.jpg',
};
class BlogHeader extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render () {
    return (
      <div onClick={() => window.location.href = '/individualblog'} style={{width:'100%', height:'500px', backgroundColor:'#43b686', cursor:'pointer'}}>
      <h2 className='featured-writing'>Featured Article</h2>
      <h2 className='featured-title'>{blog.blogTitle}</h2>
      <div style={{display:'flex', paddingTop:'20px', alignItems:'center', justifyContent:'center'}}>
      <img className="featured-header-image" src={blog.blogImage}/>
      </div>
      </div>
)
}
};

export default BlogHeader;