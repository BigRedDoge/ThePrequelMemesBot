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

const PrequelMemesstreamOpts = {
  subreddit: 'PrequelMemes',
  results: 33,
  pollTime: 7500
}

const StarWarsstreamOpts = {
  subreddit: 'StarWars',
  results: 33,
  pollTime: 7500
}

const AllstreamOpts = {
  subreddit: 'all',
  results: 33,
  pollTime: 7500
}


const PrequelMemeComments = client.CommentStream(PrequelMemesstreamOpts);
const StarWarsComments = client.CommentStream(StarWarsstreamOpts);
//const SequelMemesComments = client.CommentStream(SequelMemesstreamOpts);
const AllComments = client.CommentStream(AllstreamOpts);


StarWarsComments.on('comment', (comment) => {

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
      comment.reply("I’m just a simple man, trying to make my way in the universe");
    }, 30000);
  }

});

PrequelMemeComments.on('comment', (comment) => {

  if (comment.body === 'Hello There' || comment.body === 'Hello there' || comment.body === 'hello there' ||
      comment.body === 'Hello There!' || comment.body === 'Hello there!' || comment.body === 'hello there!') {
    console.log("Hello There Commented!");
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
      comment.reply("It\'s treason then");
    }, 30000);
  }


  if (comment.body === 'My lord, is that legal?' || comment.body === 'my lord, is that legal?' || comment.body === 'My lord is that legal?' ||
      comment.body === 'my lord is that legal?' || comment.body === 'Is that legal?' || comment.body === 'is that legal?' || comment.body === 'Is that, legal?'
      || comment.body === 'is that, legal?') {
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
      comment.reply("I’m just a simple man, trying to make my way in the universe");
    }, 30000);
  }

});
/*
SequelMemesComments.on('comment', (comment) => {

  if (comment.body === 'Hello There' || comment.body === 'Hello there' || comment.body === 'hello there' ||
      comment.body === 'Hello There!' || comment.body === 'Hello there!' || comment.body === 'hello there!') {
    console.log("Hello There Commented!");
    console.log("reddit.com" + comment.permalink);
    comment.reply('General Kenobi!');
  }

  if (comment.body === 'General Reposti!' || comment.body === 'General reposti!' || comment.body === 'general reposti!' ||
      comment.body === 'General Reposti' || comment.body === 'General reposti' || comment.body === 'general reposti') {
    console.log("Reposti Commented!");
    console.log("reddit.com" + comment.permalink);
    if (getRandomInt(2) === 0) {
      comment.reply('You are an old one!');
    } else {
      comment.reply('You are a bold one!');
    }
  }

  var author = JSON.parse(JSON.stringify(comment.author)).name;

  if (comment.body === 'General Kenobi!' || comment.body === 'General kenobi!' || comment.body === 'general kenobi!' ||
        comment.body === 'General Kenobi' || comment.body === 'General kenobi' || comment.body === 'general kenobi') {
      if (author !== 'The_Big_Red_Doge') {
        console.log("Kenobi Commented!");
        console.log("reddit.com" + comment.permalink);
        comment.reply('You are a bold one!');
      }
  }

});
*/

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
      comment.reply("I’m just a simple man, trying to make my way in the universe");
    }, 30000);
  }

});

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const submissionStream = client.SubmissionStream({
  subreddit: 'PrequelMemes',
  results: 5,
  pollTime: 7500
});

submissionStream.on('submission', function(post) {
  var title = post.title
  cloudscraper.get('http://karmadecay.com/' + post.permalink, function(err, response, body) {
    var title2 = $(body).find('#content > table > tbody > tr:nth-child(7) > td.info > div.title > a').text();
    if (body.includes('No very similar images were found on Reddit.')) {
      console.log("Not a Reposti");
    } else if (title === title2) {
      console.log("General Reposti!");
      console.log('Reposti Link: ' + post.permalink);
      post.reply("[General Reposti! ](http://karmadecay.com/" + post.permalink + ") \n --- \n ^^^^I ^^^^am ^^^^a ^^^^human ^^^^and ^^^^bot, ^^^^message ^^^^me ^^^^if ^^^^the ^^^^bot ^^^^starts ^^^^slaughtering ^^^^the  ^^^^younglings | [Source Code](https://github.com/BigRedDoge/PrequelMemes-Bot/blob/master/hellothere.js)");
    } else {
      console.log("Not a Reposti");
    }
  });
});
