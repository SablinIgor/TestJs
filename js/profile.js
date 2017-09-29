var timeline = require('./timeline.js');
var user = {
  name : "Shekhar Gulati",
  messages : [
    "Hello, Igor!",
    "Bye",
    "Good night"
  ]
};

var timelineModule = new timeline(user);
timelineModule.setHeader(user);
timelineModule.setTimeline(user);
