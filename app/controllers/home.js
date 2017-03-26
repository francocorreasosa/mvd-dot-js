var express = require('express'),
  router = express.Router(),
  Promise = require('bluebird'),
  meetup = require('../../config/meetup'),
  axios = require('axios');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
  Promise.all([
    axios.get(meetup.EVENTS_URL.UPCOMING),
    axios.get(meetup.EVENTS_URL.PAST)
  ]).then(function (values) {
    var events = values.map((value) => {
      return {
        title: values.indexOf(value) === 0 ? 'Upcoming' : 'Past',
        events: value.data.results.reverse()
      };
    });
    res.render('index', {
      title: 'The Montevideo JavaScript Meetup Group',
      events: events
    });
  });
});
