//Our central goal is to build a dynamic website from a static template using Express.
/* Example 1:- 
Creating Express Server
*/
// const express = require('express');

// const app = express();

// const port = 3000;

// //Route
// app.get('/', (request, response) => {
//    response.send('Hello Express !!');
// });

// app.listen(port, () => {
//    console.log(`Express server listening on ${port}! `);
// });

/*
Example 2:- Creating the basic Express web server that serves HTML and static files using express and then EJS (Template Engine)..

*/
const express = require('express');
const path = require('path');
const cookieSession = require('cookie-session');

const FeedbackService = require('./services/FeedbackService');
const SpeakersService = require('./services/SpeakerService');

//Creating instances of the services for feedback and speakers
const feedbackService = new FeedbackService('./data/feedback.json');
const speakersService = new SpeakersService('./data/speakers.json');

const routes = require('./routes');

const app = express();

const port = 3000;

app.set('trust proxy', 1);
app.use(
  cookieSession({
    name: 'session',
    keys: ['Ghdur687399s7w', 'hhjjdf89s866799'],
  })
);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

//Middleware to make static files work in browser
app.use(express.static(path.join(__dirname, './static')));

app.use('/', routes({
   feedbackService,
   speakersService
}));

app.listen(port, () => {
   console.log(`Express server listening on  port ${port}! `);
});

