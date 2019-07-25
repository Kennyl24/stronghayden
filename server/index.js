const sitemap = require('express-sitemap');

const express = require('express');
const app = express();
const stripe = require('stripe')('sk_test_VvIspUlkw5HBZRM7VHrTFKYC00szsX5PY7');

// app.use(require('body-parser').text());
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');
const forceSsl = require('force-ssl-heroku');
app.use(forceSsl);
let path = require('path');

const config = '../config.js';
app.use(cors({credentials: true, origin: true}));
app.use(bodyParser.json());
app.use('/', express.static(__dirname + '/../client/dist'));
app.use('/home', express.static(__dirname + '/../client/dist'));
app.use('/about', express.static(__dirname + '/../client/dist'));
app.use('/office', express.static(__dirname + '/../client/dist'));

app.use('/us', express.static(__dirname + '/../client/dist'));
app.use('/team', express.static(__dirname + '/../client/dist'));
app.use('/services', express.static(__dirname + '/../client/dist'));
app.use('/blog', express.static(__dirname + '/../client/dist'));
app.use('/agents', express.static(__dirname + '/../client/dist'));
app.use('/current-listings', express.static(__dirname + '/../client/dist'));
app.use('/for-sale', express.static(__dirname + '/../client/dist'));

app.use('/listings', express.static(__dirname + '/../client/dist'));
// app.use('/listings/:name', express.static(__dirname + '/../client/dist'));
app.use('/contact', express.static(__dirname + '/../client/dist'));
// app.use('/agents/*', express.static(__dirname + '/../client/dist'));
app.use('/individualblog', express.static(__dirname + '/../client/dist'));
app.use('/agent/:name', express.static(__dirname + '/../client/dist'));
app.use('/agents/:name', express.static(__dirname + '/../client/dist'));
app.use('/resources', express.static(__dirname + '/../client/dist'));
app.use('/mhteam', express.static(__dirname + '/../client/dist'));
app.use('/payments', express.static(__dirname + '/../client/dist'));
app.get('/sitemap.xml', function(req, res) {
  console.log('getting');
  res.sendFile(path.join(__dirname, 'path', '../sitemap.xml'));
});
app.use('/*', express.static(__dirname + '/../client/dist'));

sitemap({
  map: {
    '/': ['get'],
    '/home': ['get', 'post'],
    '/about': ['get'],
    '/contact': [],
    '/blog': [],
    '/listings': [],
    '/team': [],
    '/resources': [],
    '/services': [],
  },
  route: {
    '/': {
      lastmod: '2019-07-07',
      changefreq: 'always',
      priority: 1.0,
    },
    '/blog': {
      lastmod: '2019-07-07',
      changefreq: 'always',
      priority: 1.0,
    },
  },
}).XMLtoFile();
app.post('/Email', (req, res) => {
  const mailOptions = {
    from: 'stronghaydennotifications@gmail.com',
    to: req.body.email,
    subject: 'Strong & Hayden Website Notification',
    text: `
    Hi There, 

    Thank you for reaching out to us. We have received your request and we will follow up as soon as possible. 
    
    Warmly, 
    
    Strong & Hayden`
  
  };
  const teamOptions = {
    from: 'stronghaydennotifications@gmail.com',
    to: req.body.agentEmail,
    subject: 'Strong & Hayden Website Notification',
    text: `Hi ${req.body.agentName},
    
    Just a heads up. Someone has reached out on the website to you! 
    
    Please get back to them as soon as you can. 
    
    Here is their information: 
    Name: ${req.body.name}
    Email: ${req.body.email}
    Phone: ${req.body.phone}
    Company: ${req.body.company}
    Message: ${req.body.message}
    Warmly, 
    Kenny
    `
  };
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 25,
    secure: false,
    auth: {
      user: 'stronghaydennotifications@gmail.com',
      pass: config.pass
    },
    tls: {
      rejectUnauthorized: false
    },
  });
  transporter.sendMail(mailOptions, (error, info) => {
    console.log('sending mail');
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  transporter.sendMail(teamOptions, (error, info) => {
    console.log('sending mail');
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  res.sendStatus(200);
});
app.post('/charge', (req, res) => {
  console.log(req.body);
  try {
    let {status} = stripe.charges.create({
      amount: 2000,
      currency: 'usd',
      description: 'An example charge',
      source: req.body
    });

    res.json({status});
  } catch (err) {
    console.log(err);
    res.status(500).end();
  }
});

app.post('/Contact', (req, res) => {
  const mailOptions = {
    from: 'stronghaydennotifications@gmail.com',
    to: req.body.email,
    subject: 'Strong & Hayden Website Notification',
    text: `
    Hi There, 

    Thank you for reaching out to us. We have received your request and we will follow up as soon as possible. 
    
    Warmly, 
    
    Strong & Hayden`
  
  };
  const teamOptions = {
    from: 'stronghaydennotifications@gmail.com',
    to: 'admin@stronghayden.com',
    subject: 'Strong & Hayden Website Notification',
    text: `Hi Team,
    
    Just a heads up. Someone has reached out on the website to you! 
    
    Please get back to them as soon as you can. 
    
    Here is their information: 
    Name: ${req.body.name}
    Email: ${req.body.email}
    Phone: ${req.body.phone}
    Message: ${req.body.message}

    Warmly, 
    `
  };
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 25,
    secure: false,
    auth: {
      user: 'stronghaydennotifications@gmail.com',
      pass: 'pass5096'
    },
    tls: {
      rejectUnauthorized: false
    },
  });
  transporter.sendMail(mailOptions, (error, info) => {
    console.log('sending mail2');
    if (error) {
      console.log('error', error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  transporter.sendMail(teamOptions, (error, info) => {
    console.log('sending mail1');
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  res.sendStatus(200);
});

app.post('/Subscribe', (req, res) => {
  const mailOptions = {
    from: 'stronghaydennotifications@gmail.com',
    to: req.body.email,
    subject: 'Strong & Hayden Website Notification',
    text: `
    Hi There, 

    Thank you for reaching out to us. We have received your request and we will follow up as soon as possible. 
    
    Warmly, 
    
    Strong & Hayden`
  
  };
  const teamOptions = {
    from: 'stronghaydennotifications@gmail.com',
    to: 'admin@stronghayden.com',
    subject: 'Strong & Hayden Website Notification',
    text: `Hi Team,
    
    This person would like to know about the latest lisitings when they come out. 
    
    Here is their information: 
    Email: ${req.body.email}

    Warmly, 
    `
  }; 
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 25,
    secure: false,
    auth: {
      user: 'stronghaydennotifications@gmail.com',
      pass: 'pass5096'
    },
    tls: {
      rejectUnauthorized: false
    },
  });
  transporter.sendMail(mailOptions, (error, info) => {
    console.log('sending mail');
    if (error) {
      console.log('that', error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  transporter.sendMail(teamOptions, (error, info) => {
    console.log('sending mail');
    if (error) {
      console.log('this', error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  res.sendStatus(200);
});
app.listen(process.env.PORT || 3000, function() {
  console.log('listening!');
});