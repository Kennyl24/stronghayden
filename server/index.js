const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');
const forceSsl = require('force-ssl-heroku');
app.use(forceSsl);

const config = '../config.js';

app.use(cors({credentials: true, origin: true}));
app.use(bodyParser.json());
app.use('/', express.static(__dirname + '/../client/dist'));
app.use('/home', express.static(__dirname + '/../client/dist'));
app.use('/about', express.static(__dirname + '/../client/dist'));
app.use('/us', express.static(__dirname + '/../client/dist'));
app.use('/team', express.static(__dirname + '/../client/dist'));
app.use('/services', express.static(__dirname + '/../client/dist'));
app.use('/blog', express.static(__dirname + '/../client/dist'));
app.use('/listings', express.static(__dirname + '/../client/dist'));
// app.use('/listings/:name', express.static(__dirname + '/../client/dist'));
app.use('/contact', express.static(__dirname + '/../client/dist'));
// app.use('/agents/*', express.static(__dirname + '/../client/dist'));
app.use('/individualblog', express.static(__dirname + '/../client/dist'));
app.use('/agents/:name', express.static(__dirname + '/../client/dist'));
app.use('/resources', express.static(__dirname + '/../client/dist'));
app.use('/mhteam', express.static(__dirname + '/../client/dist'));
app.use('/payments', express.static(__dirname + '/../client/dist'));
// app.use(function(req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//   next();
// });
// var corsOptions = {
//   origin: 'https://buildout.com',
//   optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// };
 
// app.get('/listings/:id', cors(corsOptions), function (req, res, next) {
//   console.log('trying', res);

//   res.json({msg: 'This is CORS-enabled for only example.com.'});
// });

// let whitelist = ['https://buildout.com'];
// let corsOptions = {
//   origin: function (origin, callback, error) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true);
//     } else {
//       callback(new Error('Not allowed by CORS', error));
//     }
//   }
// };
 
// app.get('/listings/:id', cors(corsOptions), function (req, res, next) {
//   console.log('trying');
//   res.json({msg: 'This is CORS-enabled for a whitelisted domain.'});
// });
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