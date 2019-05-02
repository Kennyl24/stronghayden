import React from 'react';
import ReactDOM from 'react-dom';
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {isMobile} from 'react-device-detect';
import HomePage from './components/HomePage.jsx'
import BlogPage from './components/BlogPage.jsx'
import AboutPage from './components/AboutPage.jsx'
import AboutUsPage from './components/AboutUsPage.jsx'
import MeetTheTeamPage from './components/MeetTheTeamPage.jsx'
import ContactPage from './components/ContactPage.jsx'
import ListingsPage from './components/ListingsPage.jsx'
import ServicesPage from './components/ServicesPage.jsx'
import IndividualBlog from './components/IndividualBlog.jsx'


ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/home" component={HomePage} />

      <Route exact path="/about" component={AboutPage} />
      <Route exact path="/us" component={AboutUsPage} />
      <Route exact path="/team" component={MeetTheTeamPage} />
      <Route exact path="/blog" component={BlogPage} />
      <Route exact path="/individualblog" component={IndividualBlog} />
      <Route exact path="/services" component={ServicesPage} />
      <Route exact path="/contact" component={ContactPage} />
      <Route exact path="/listings" component={ListingsPage} />
    </Switch>
  </Router>
  ,
  document.getElementById('app'),
);