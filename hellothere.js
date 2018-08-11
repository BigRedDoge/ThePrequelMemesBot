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
  results: 100
}

const AllComments = client.CommentStream(AllstreamOpts);

AllComments.on('comment', (comment) => {

  if (comment.body === 'Hello There' || comment.body === 'Hello there' || comment.body === 'hello there' ||
      comment.body === 'Hello There!' || comment.body === 'Hello there!' || comment.body === 'hello there!') {
    console.log("General Kenobi Commented!");
    console.log("reddit.com" + comment.permalink);
    setTimeout(function() {
      comment.reply('General Kenobi!');
    }, 15000);
  }

  if (comment.body === 'General Reposti!' || comment.body === 'General reposti!' || comment.body === 'general reposti!' ||
      comment.body === 'General Reposti' || comment.body === 'General reposti' || comment.body === 'general reposti') {
    console.log("Reposti Commented!");
    console.log("reddit.com" + comment.permalink);
    if (getRandomInt(2) === 0) {
      setTimeout(function() {
        comment.reply('You are a bold one!');
      }, 15000);
    } else {
      setTimeout(function() {
        comment.reply('You are an old one!');
      }, 15000);
    }
  }

  var author = JSON.parse(JSON.stringify(comment.author)).name;

  if (comment.body === 'General Kenobi!' || comment.body === 'General kenobi!' || comment.body === 'general kenobi!' ||
        comment.body === 'General Kenobi' || comment.body === 'General kenobi' || comment.body === 'general kenobi') {
      if (author !== 'ThePrequelMemesBot') {
        console.log("Kenobi Commented!");
        console.log("reddit.com" + comment.permalink);
        setTimeout(function() {
          comment.reply('You are a bold one!');
        }, 15000);
      }
  }

  if (comment.body === 'I am the Senate' || comment.body === 'I am the senate' || comment.body === 'i am the Senate') {
    console.log("Senate Commented!");
    console.log("reddit.com" + comment.permalink);
    if (author !== 'ThePrequelMemesBot') {
      setTimeout(function() {
        comment.reply("Not yet");
      }, 15000);
    }
  }

  if ((comment.body).includes('will decide your fate')) {
    console.log("Senate Commented!");
    console.log("reddit.com" + comment.permalink);
    setTimeout(function() {
      comment.reply("I am the Senate");
    }, 15000);
  }

  if (comment.body === 'My lord, is that legal?' || comment.body === 'my lord, is that legal?' || comment.body === 'My lord is that legal?' ||
      comment.body === 'my lord is that legal?' || comment.body === 'Is that legal?' || comment.body === 'is that legal?' || comment.body === 'Is that, legal?' || comment.body === 'is that, legal?') {
    console.log("Legal Commented!");
    console.log("reddit.com" + comment.permalink);
    setTimeout(function() {
      comment.reply("I will make it legal");
    }, 15000);
  }

  if (comment.body === 'I sense a trap' || comment.body === 'i sense a trap' || comment.body === 'I sense a trap.' || comment.body === 'i sense a trap.') {
    console.log("Trap Commented");
    console.log("reddit.com" + comment.permalink);
    setTimeout(function() {
      comment.reply("Next move?");
    }, 15000);
  }

  if (comment.body === 'Is it possible to learn this power?' || comment.body === 'is it possible to learn this power?' || comment.body === 'Is it possible to learn this power' ||
      comment.body === 'is it possible to learn this power') {
    console.log("Learn Power Commented");
    console.log("reddit.com" + comment.permalink);
    setTimeout(function() {
      comment.reply("Not from a Jedi");
    }, 15000);
  }

  if ((comment.body).includes('very impressive') && (comment.body).includes('must be very proud') || (comment.body).includes('very impressive,') && (comment.body).includes('must be very proud')) {
    console.log("Impressive Clones Commented");
    console.log("reddit.com" + comment.permalink);
    setTimeout(function() {
      comment.reply("I\’m just a simple man, trying to make my way in the universe");
    }, 15000);
  }


  if (comment.body === "I\'ll try spinning, thats a good trick" || comment.body === "i\'ll try spinning, thats a good trick" || comment.body === "I\'ll try spinning, thats a good trick." || comment.body === "i\'ll try spinning, thats a good trick." ||
      comment.body === "I\'ll try spinning thats a good trick" || comment.body === "i\'ll try spinning thats a good trick" || comment.body === "I\'ll try spinning thats a good trick." || comment.body === "i\'ll try spinning thats a good trick.") {
    console.log("Spinning Commented");
    console.log("reddit.com" + comment.permalink);
    if (getRandomInt(2) === 0) {
      setTimeout(function() {
        comment.reply('Yippee!');
      }, 15000);
    } else {
      setTimeout(function() {
        comment.reply('This is where the fun begins');
      }, 15000);
    }
  }

  if ((comment.body).includes("anna buy some death sticks")) {
    console.log("Death Sticks Commented");
    console.log("reddit.com" + comment.permalink);
    setTimeout(function() {
      comment.reply("You don\'t want to sell death sticks");
    }, 15000);
  }

  if (comment.body === "I\’m just a simple man, trying to make my way in the universe" || comment.body === "I\’m just a simple man trying to make my way in the universe" || comment.body === "I\’m just a simple man, trying to make my way in the universe." || comment.body === "I\’m just a simple man trying to make my way in the universe." ||
      comment.body === "Im just a simple man, trying to make my way in the universe" || comment.body === "Im just a simple man trying to make my way in the universe" || comment.body === "Im just a simple man, trying to make my way in the universe." || comment.body === "Im just a simple man trying to make my way in the universe." ||
      comment.body === "i\’m just a simple man, trying to make my way in the universe" || comment.body === "i\’m just a simple man, trying to make my way in the universe." || comment.body === "i\’m just a simple man trying to make my way in the universe" || comment.body === "i\’m just a simple man trying to make my way in the universe.") {
    console.log("Simple Man Commented");
    console.log("reddit.com" + comment.permalink);
    if (author !== 'ThePrequelMemesBot') {
      setTimeout(function() {
        comment.reply("Ever made your way as far into the interior as r/PrequelMemes?");
      }, 15000);
    }
  }

  if (comment.body === "I\'ve been looking forward to this" || comment.body === "i\'ve been looking forward to this" || comment.body === "I\'ve been looking forward to this." || comment.body === "i\'ve been looking forward to this." || comment.body === "Ive been looking forward to this" ||
      comment.body === "Ive been looking forward to this." || comment.body === "ive been looking forward to this" || comment.body === "ive been looking forward to this.") {
    console.log("Looking Foward to This Commented");
    console.log("reddit.com" + comment.permalink);
    setTimeout(function() {
      comment.reply("My powers have doubled since the last time we met count");
    }, 15000);
  }

  if ((comment.body).includes("doubled since the last time we met")) {
    console.log("Looking Foward to This Commented");
    console.log("reddit.com" + comment.permalink);
    setTimeout(function() {
      comment.reply("Good. Twice the pride, double the fall");
    }, 15000);
  }

  if (comment.body === "Kill him, kill him now" || comment.body === "kill him, kill him now" || comment.body === "Kill him, kill him now." || comment.body === "kill him, kill him now." || comment.body === "Kill him now" || comment.body === "kill him now") {
    console.log("Kill him now Commented");
    console.log("reddit.com" + comment.permalink);
    setTimeout(function() {
      comment.reply("Dewit");
    }, 15000);
  }


  if (comment.body === '[Adas\'s law](http://starwars.wikia.com/wiki/Adas) is an Internet adage that asserts that "As an online discussion grows longer, the probability of a comparison involving General Kenobi approaches, that is, if an online discussion (regardless of topic or scope) goes on long enough, sooner or later someone will compare someone or something to General Kenobi or his deeds. " ') {
    console.log("Adas\'s bot Commented");
    console.log("reddit.com" + comment.permalink);
    /*var rand = getRandomInt(3);
    if (rand === 0) {
      comment.reply('Hello fellow bot');
    } else if (rand === 1) {
      comment.reply('You are a bot one!');
    } else if (rand === 2) {
      comment.reply('General Roboti!');
    }*/
    comment.reply("Hello fellow bot");
  }

  if ((comment.body).includes("should have known the") && (comment.body).includes("were plotting to take over")) {
    console.log("Plotting to Take Over Commented");
    console.log("reddit.com" + comment.permalink);
    setTimeout(function() {
      comment.reply("Anakin, Chancellor Palpatine is evil!");
    }, 15000);
  }

  if ((comment.body).includes("Execute order") || (comment.body).includes("execute order")) {
    console.log("Execute Order Commented");
    console.log("reddit.com" + comment.permalink);
    setTimeout(function() {
      comment.reply("It will be done, my lord");
    }, 15000);
  }

  if (comment.body === "r/PrequelMemes" || comment.body === "/r/PrequelMemes" || comment.body === "r/prequelmemes" || comment.body === "/r/prequelmemes") {
    console.log("r/PrequelMemes Commented");
    console.log("reddit.com" + comment.permalink);
    setTimeout(function() {
      comment.reply("Is where the fun begins!");
    }, 15000);
  }

  if (comment.body === "r/SequelMemes" || comment.body === "/r/SequelMemes" || comment.body === "r/sequelmemes" || comment.body === "/r/sequelmemes") {
    console.log("r/PrequelMemes Commented");
    console.log("reddit.com" + comment.permalink);
    setTimeout(function() {
      comment.reply("It's treason then");
    }, 15000);
  }

  if ((comment.body).includes("ou turned her against me")) {
    console.log("Turned Her Commented");
    console.log("reddit.com" + comment.permalink);
    setTimeout(function() {
      comment.reply("You have done that yourself");
    }, 15000);
  }

});

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
