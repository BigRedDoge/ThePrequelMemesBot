require('dotenv').config();

const cloudscraper = require('cloudscraper');
const $ = require('jquery')(require('jsdom-no-contextify').jsdom().parentWindow);

const Snoowrap = require('snoowrap');
const Snoostorm = require('snoostorm');

const r = new Snoowrap({
  userAgent: 'hellothere-bot-useragent',
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  username: process.env.REDDIT_USER,
  password: process.env.REDDIT_PASS
});

const client = new Snoostorm(r);

const AllstreamOpts = {
  subreddit: 'all',
  results: 100,
  pollTime: 2000
}

const AllComments = client.CommentStream(AllstreamOpts);

AllComments.on('comment', (comment) => {

  if (comment.body === 'Hello There' || comment.body === 'Hello there' || comment.body === 'hello there' ||
      comment.body === 'Hello There!' || comment.body === 'Hello there!' || comment.body === 'hello there!') {
    console.log("General Kenobi Commented!");
    console.log("reddit.com" + comment.permalink);
    setTimeout(function() {
      comment.reply('General Kenobi!');
    }, 30000);
  }

  if (comment.body === 'General Reposti!' || comment.body === 'General reposti!' || comment.body === 'general reposti!' ||
      comment.body === 'General Reposti' || comment.body === 'General reposti' || comment.body === 'general reposti') {
    console.log("Reposti Commented!");
    console.log("reddit.com" + comment.permalink);
    if (getRandomInt(2) === 0) {
      setTimeout(function() {
        comment.reply('You are a bold one!');
      }, 30000);
    } else {
      setTimeout(function() {
        comment.reply('You are an old one!');
      }, 30000);
    }
  }

  var author = JSON.parse(JSON.stringify(comment.author)).name;

  if (comment.body === 'General Kenobi!' || comment.body === 'General kenobi!' || comment.body === 'general kenobi!' ||
        comment.body === 'General Kenobi' || comment.body === 'General kenobi' || comment.body === 'general kenobi') {
      if (author !== 'The_Big_Red_Doge') {
        console.log("Kenobi Commented!");
        console.log("reddit.com" + comment.permalink);
        setTimeout(function() {
          comment.reply('You are a bold one!');
        }, 30000);
      }
  }

  if (comment.body === 'I am the Senate' || comment.body === 'I am the senate' || comment.body === 'i am the Senate') {
    console.log("Senate Commented!");
    console.log("reddit.com" + comment.permalink);
    setTimeout(function() {
      comment.reply("Not yet");
    }, 30000);
  }

  if (comment.body === 'The senate will decide your fate' || comment.body === 'the senate will decide your fate' || comment.body === 'The senate will decide your fate.'
      || comment.body === 'the senate will decide your fate.') {
    console.log("Senate Commented!");
    console.log("reddit.com" + comment.permalink);
    setTimeout(function() {
      comment.reply("It\'s treason then");
    }, 30000);
  }

  if (comment.body === 'My lord, is that legal?' || comment.body === 'my lord, is that legal?' || comment.body === 'My lord is that legal?' ||
      comment.body === 'my lord is that legal?' || comment.body === 'Is that legal?' || comment.body === 'is that legal?' || comment.body === 'Is that, legal?' || comment.body === 'is that, legal?') {
    console.log("Legal Commented!");
    console.log("reddit.com" + comment.permalink);
    setTimeout(function() {
      comment.reply("I will make it legal");
    }, 30000);
  }

  if (comment.body === 'I sense a trap' || comment.body === 'i sense a trap' || comment.body === 'I sense a trap.' || comment.body === 'i sense a trap.') {
    console.log("Trap Commented");
    console.log("reddit.com" + comment.permalink);
    setTimeout(function() {
      comment.reply("Next move?");
    }, 30000);
  }

  if (comment.body === 'Is it possible to learn this power?' || comment.body === 'is it possible to learn this power?' || comment.body === 'Is it possible to learn this power' ||
      comment.body === 'is it possible to learn this power') {
    console.log("Learn Power Commented");
    console.log("reddit.com" + comment.permalink);
    setTimeout(function() {
      comment.reply("Not from a Jedi");
    }, 30000);
  }

  if (comment.body === 'Your clones are very impressive, you must be very proud' || comment.body === 'Your clones are very impressive, you must be very proud.' || comment.body === 'your clones are very impressive, you must be very proud' ||
      comment.body === 'your clones are very impressive, you must be very proud.' || comment.body === 'Your clones are very impressive. You must be very proud.' || comment.body === 'your clones are very impressive. you must be very proud.' ||
      comment.body === 'your clones are very impressive. you must be very proud' || comment.body === 'Your clones are very impressive you must be very proud' || comment.body === 'Your clones are very impressive you must be very proud.' ||
      comment.body === 'your clones are very impressive you must be very proud' || comment.body === 'your clones are very impressive you must be very proud.') {
    console.log("Impressive Clones Commented");
    console.log("reddit.com" + comment.permalink);
    setTimeout(function() {
      comment.reply("I\’m just a simple man, trying to make my way in the universe");
    }, 30000);
  }

  if (comment.body === "I\'ll try spinning, thats a good trick" || comment.body === "i\'ll try spinning, thats a good trick" || comment.body === "I\'ll try spinning, thats a good trick." || comment.body === "i\'ll try spinning, thats a good trick." ||
      comment.body === "I\'ll try spinning thats a good trick" || comment.body === "i\'ll try spinning thats a good trick" || comment.body === "I\'ll try spinning thats a good trick." || comment.body === "i\'ll try spinning thats a good trick.") {
    console.log("Spinning Commented");
    console.log("reddit.com" + comment.permalink);
    if (getRandomInt(2) === 0) {
      setTimeout(function() {
        comment.reply('Yippee!');
      }, 30000);
    } else {
      setTimeout(function() {
        comment.reply('This is where the fun begins');
      }, 30000);
    }
  }

  if (comment.body === "You wanna buy some death sticks?" || comment.body === "you wanna buy some death sticks?" || comment.body === "You wanna buy some death sticks" || comment.body === "you wanna buy some death sticks?" || comment.body === "you wanna buy some death sticks" ||
      comment.body === "Wanna buy some death sticks?" || comment.body === "wanna buy some death sticks?" || comment.body === "Wanna buy some death sticks" || comment.body === "wanna buy some death sticks") {
    console.log("Death Sticks Commented");
    console.log("reddit.com" + comment.permalink);
    setTimeout(function() {
      comment.reply("You don\'t want to sell death sticks");
    }, 30000);
  }

  if (comment.body === "I\’m just a simple man, trying to make my way in the universe" || comment.body === "I\’m just a simple man trying to make my way in the universe" || comment.body === "I\’m just a simple man, trying to make my way in the universe." || comment.body === "I\’m just a simple man trying to make my way in the universe." ||
      comment.body === "Im just a simple man, trying to make my way in the universe" || comment.body === "Im just a simple man trying to make my way in the universe" || comment.body === "Im just a simple man, trying to make my way in the universe." || comment.body === "Im just a simple man trying to make my way in the universe." ||
      comment.body === "i\’m just a simple man, trying to make my way in the universe" || comment.body === "i\’m just a simple man, trying to make my way in the universe." || comment.body === "i\’m just a simple man trying to make my way in the universe" || comment.body === "i\’m just a simple man trying to make my way in the universe.") {
    console.log("Simple Man Commented");
    console.log("reddit.com" + comment.permalink);
    setTimeout(function() {
      comment.reply("Ever made your way as far into the interior as r/PrequelMemes?");
    }, 30000);
  }

  if (comment.body === "I\'ve been looking forward to this" || comment.body === "i\'ve been looking forward to this" || comment.body === "I\'ve been looking forward to this." || comment.body === "i\'ve been looking forward to this." || comment.body === "Ive been looking forward to this" ||
      comment.body === "Ive been looking forward to this." || comment.body === "ive been looking forward to this" || comment.body === "ive been looking forward to this.") {
    console.log("Looking Foward to This Commented");
    console.log("reddit.com" + comment.permalink);
    setTimeout(function() {
      comment.reply("My powers have doubled since the last time we met count");
    }, 30000);
  }

  if ((comment.body).includes("y powers have doubled since the last time we met")) {
    console.log("Looking Foward to This Commented");
    console.log("reddit.com" + comment.permalink);
    setTimeout(function() {
      comment.reply("Good. Twice the pride, double the fall");
    }, 30000);
  }

  if (comment.body === "Kill him, kill him now" || comment.body === "kill him, kill him now" || comment.body === "Kill him, kill him now." || comment.body === "kill him, kill him now." || comment.body === "Kill him now" || comment.body === "kill him now") {
    console.log("Kill him now Commented");
    console.log("reddit.com" + comment.permalink);
    setTimeout(function() {
      comment.reply("Dewit");
    }, 30000);
  }

});

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


const submissionStream = client.SubmissionStream({
  subreddit: 'PrequelMemes',
  results: 5,
  pollTime: 2000
});

submissionStream.on('submission', function(post) {
  var title = post.title
  cloudscraper.get('http://karmadecay.com/' + post.permalink, function(err, response, body) {
    var title2 = $(body).find('#content > table > tbody > tr:nth-child(7) > td.info > div.title > a').text();
    if ((body).search('No very similar images were found on Reddit.') !== -1) {
      console.log("Not a Reposti");
    } else if (title === title2) {
      console.log("General Reposti!");
      console.log('Reposti Link: ' + post.permalink);
      post.reply("[General Reposti! ](http://karmadecay.com/" + post.permalink + ") \n --- \n ^^^^I ^^^^am ^^^^a ^^^^human ^^^^and ^^^^bot, ^^^^message ^^^^me ^^^^if ^^^^the ^^^^bot ^^^^executes ^^^^order ^^^^66  ^^^^| [^^^^Source ^^^^Code](https://github.com/BigRedDoge/PrequelMemes-Bot/blob/master/hellothere.js)");
    } else {
      console.log("Not a Reposti");
    }
  });
});

