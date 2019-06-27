const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');
const forceSsl = require('force-ssl-heroku');
// app.use(forceSsl);

const config = '../config.js';

app.use(cors());
app.use(bodyParser.json());
app.use('/', express.static(__dirname + '/../client/dist'));
app.use('/home', express.static(__dirname + '/../client/dist'));
app.use('/about', express.static(__dirname + '/../client/dist'));
app.use('/us', express.static(__dirname + '/../client/dist'));
app.use('/team', express.static(__dirname + '/../client/dist'));
app.use('/services', express.static(__dirname + '/../client/dist'));
app.use('/blog', express.static(__dirname + '/../client/dist'));
app.use('/listings', express.static(__dirname + '/../client/dist'));
app.use('/listings/:name', express.static(__dirname + '/../client/dist'));
app.use('/contact', express.static(__dirname + '/../client/dist'));
// app.use('/agents/*', express.static(__dirname + '/../client/dist'));
app.use('/individualblog', express.static(__dirname + '/../client/dist'));
app.use('/agents/:name', express.static(__dirname + '/../client/dist'));
app.use('/resources', express.static(__dirname + '/../client/dist'));
app.use('/mhteam', express.static(__dirname + '/../client/dist'));
app.use('/*', express.static(__dirname + '/../client/dist'));
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
    auth: {
      user: 'stronghaydennotifications@gmail.com',
      pass: config.pass
    }
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
    auth: {
      user: 'stronghaydennotifications@gmail.com',
      pass: config.pass
    }
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
    auth: {
      user: 'stronghaydennotifications@gmail.com',
      pass: config.pass
    }
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
app.listen(process.env.PORT || 3000, function() {
  console.log('listening!');
});