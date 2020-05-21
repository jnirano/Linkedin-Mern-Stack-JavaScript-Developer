const express = require('express');

const speakersRoute = require('./speakers');
const feedbackRoute = require('./feedback');

const router = express.Router();

module.exports = params => {
   router.get('/', (request, response) => {

    // if (!request.session.visitcount) {
    //   request.session.visitcount = 0;
    // }
    // request.session.visitcount += 1;
    // console.log(`Number of visit: ${request.session.visitcount}`);
    
     //response.sendFile(path.join(__dirname, './static/index.html'));
     response.render('pages/index', { pageTitle: 'Welcome' });
  });
  // Mounting the two route handles
  router.use('/speakers', speakersRoute(params));
  router.use('/feedback', feedbackRoute(params));

  return router;
};
