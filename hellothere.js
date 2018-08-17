require('dotenv').config();

const cloudscraper = require('cloudscraper');
const $ = require('jquery')(require('jsdom-no-contextify').jsdom().parentWindow);

const webshot = require('webshot');
const imgur = require('imgur');

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
  pollTime: 2050
}

const AllComments = client.CommentStream(AllstreamOpts);

AllComments.on('comment', (comment) => {

  if (comment.body === 'Hello There' || comment.body === 'Hello there' || comment.body === 'hello there' ||
      comment.body === 'Hello There!' || comment.body === 'Hello there!' || comment.body === 'hello there!') {
    console.log("General Kenobi Commented!");
    console.log("reddit.com" + comment.permalink);
    if (author !== 'ThePrequelMemesBot') {
      setTimeout(function() {
        comment.reply('General Kenobi!');
      }, 15000);
    }
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
        comment.reply("Not. Yet.");
      }, 15000);
    }
  }

  if ((comment.body).includes('will decide your fate')) {
    console.log("Senate Commented!");
    console.log("reddit.com" + comment.permalink);
    if (author !== 'ThePrequelMemesBot') {
      setTimeout(function() {
        comment.reply("I am the Senate");
      }, 15000);
    }
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


  if ((comment.body).includes("ll try") && (comment.body).includes("a good trick")) {
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
      comment.reply("You don\'t want to me sell death sticks");
    }, 15000);
  }

  if ((comment.body).includes("just a simple") && (comment.body).includes("trying to make my way in")) {
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
    if (author !== 'ThePrequelMemesBot') {
      setTimeout(function() {
        comment.reply("Good. Twice the pride, double the fall");
      }, 15000);
    }
  }

  if (comment.body === "Kill him, kill him now" || comment.body === "kill him, kill him now" || comment.body === "Kill him, kill him now." || comment.body === "kill him, kill him now." || comment.body === "Kill him now" || comment.body === "kill him now") {
    console.log("Kill him now Commented");
    console.log("reddit.com" + comment.permalink);
    setTimeout(function() {
      comment.reply("I shouldn't");
    }, 15000);
  }

  if (comment.body === "I shouldn\'t" || comment.body === "I shouldn\'t." || comment.body === "I shouldnt" || comment.body === "i shouldnt") {
    console.log("I Shouldn\'t Commented");
    console.log("reddit.com" + comment.permalink);
    setTimeout(function() {
      comment.reply("Dewit");
    }, 15000);
  }


  if (comment.body === '[Adas\'s law](http://starwars.wikia.com/wiki/Adas) is an Internet adage that asserts that "As an online discussion grows longer, the probability of a comparison involving General Kenobi approaches, that is, if an online discussion (regardless of topic or scope) goes on long enough, sooner or later someone will compare someone or something to General Kenobi or his deeds. " ') {
    console.log("Adas\'s bot Commented");
    console.log("reddit.com" + comment.permalink);
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

  if ((comment.body).includes("ou have become the very thing you swore to destroy")) {
    console.log("Swore to Destroy Commented");
    console.log("reddit.com" + comment.permalink);
    setTimeout(function() {
      comment.reply("Don't lecture me, Obi-Wan!");
    }, 15000);
  }

  if ((comment.body).includes("have brought peace, freedom, justice, and security to my new empire")) {
    console.log("My New Empire Commented");
    console.log("reddit.com" + comment.permalink);
    setTimeout(function() {
      comment.reply("Your new empire?");
    }, 15000);
  }

  if ((comment.body).includes("our new empire")) {
    console.log("My New Empire Commented");
    console.log("reddit.com" + comment.permalink);
    if (author !== 'ThePrequelMemesBot') {
      setTimeout(function() {
        comment.reply("Don\'t make me kill you");
      }, 15000);
    }
  }

  if ((comment.body).includes("on\'t make me kill you") || (comment.body).includes("ont make me kill you")) {
    console.log("Don\'t Make Me Kill You Commented");
    console.log("reddit.com" + comment.permalink);
    if (author !== 'ThePrequelMemesBot') {
      setTimeout(function() {
        comment.reply("Anakin, my allegiance is to the Republic, to Democracy!");
      }, 15000);
    }
  }

  if ((comment.body).includes("my allegiance is to the")) {
    console.log("Allegiance Commented");
    console.log("reddit.com" + comment.permalink);
    if (author !== 'ThePrequelMemesBot') {
      setTimeout(function() {
        comment.reply("If you are not with me, then you are my enemy");
      }, 15000);
    }
  }

  if ((comment.body).includes("f you are not with me") && (comment.body).includes("then you are my enemy")) {
    console.log("My Enemy Commented");
    console.log("reddit.com" + comment.permalink);
    if (author !== 'ThePrequelMemesBot') {
      setTimeout(function() {
        comment.reply("Only a Sith deals in absolutes");
      }, 15000);
    }
  }

  if ((comment.body).includes("nly a") && (comment.body).includes("deals in absolutes")) {
    console.log("Absolutes Commented");
    console.log("reddit.com" + comment.permalink);
    if (author !== 'ThePrequelMemesBot') {
      setTimeout(function() {
        comment.reply("I will do what I must");
      }, 15000);
    }
  }

  if ((comment.body).includes("will do what I must") || (comment.body).includes("will do what i must")) {
    console.log("I Will Do What I Must Commented");
    console.log("reddit.com" + comment.permalink);
    if (author !== 'ThePrequelMemesBot') {
      setTimeout(function() {
        comment.reply("You will try");
      }, 15000);
    }
  }

  if ((comment.body).includes("rom my point of view") && (comment.body).includes("the") && (comment.body).includes("are evil")) {
    console.log("My Point of View Commented");
    console.log("reddit.com" + comment.permalink);
    if (author !== 'ThePrequelMemesBot') {
      setTimeout(function() {
        comment.reply("Well then you are lost!");
      }, 15000);
    }
  }

  if ((comment.body).includes("I have the high ground") || (comment.body).includes("i have the high ground")) {
    console.log("High Ground Commented");
    console.log("reddit.com" + comment.permalink);
    if (author !== 'ThePrequelMemesBot') {
      setTimeout(function() {
        comment.reply("You underestimate my power!");
      }, 15000);
    }
  }

  if ((comment.body).includes("ou underestimate my power")) {
    console.log("Underestimate My Power Commented");
    console.log("reddit.com" + comment.permalink);
    if (author !== 'ThePrequelMemesBot') {
      setTimeout(function() {
        comment.reply("Don't try it");
      }, 15000);
    }
  }

  if (comment.body === "I hate you" || comment.body === "I hate you!") {
    console.log("I hate you Commented");
    console.log("reddit.com" + comment.permalink);
    if (author !== 'ThePrequelMemesBot') {
      setTimeout(function() {
        comment.reply("You were my brother, Anakin! I loved you");
      }, 15000);
    }
  }

  if (comment.body === "He's a Sith lord" || comment.body === "he's a Sith lord" || comment.body === "He's a Sith lord." || comment.body === "he's a Sith lord." ||
      comment.body === "He's a sith lord" || comment.body === "He's a sith lord." || comment.body === "he's a sith lord" || comment.body === "he's a sith lord." ||
      comment.body === "Hes a Sith lord" || comment.body === "hes a Sith lord" || comment.body === "Hes a sith lord" || comment.body === "hes a sith lord") {
    console.log("Sith Lord Commented");
    console.log("reddit.com" + comment.permalink);
    if (author !== 'ThePrequelMemesBot') {
      setTimeout(function() {
        comment.reply("Chancellor Palpatine, Sith lords are our speciality");
      }, 15000);
    }
  }

  if ((comment.body).includes("e was too dangerous to be kept alive.")) {
    console.log("Too Dangerous Commented");
    console.log("reddit.com" + comment.permalink);
    if (author !== 'ThePrequelMemesBot') {
      setTimeout(function() {
        comment.reply("Yes, but he was an unarmed prisoner. I shouldn\'t have done that. It\'s not the Jedi way.");
      }, 15000);
    }
  }

  if ((comment.body).includes("s not the Jedi way") || (comment.body).includes("s not the jedi way")) {
    console.log("Not the Jedi Way Commented");
    console.log("reddit.com" + comment.permalink);
    if (author !== 'ThePrequelMemesBot') {
      setTimeout(function() {
        comment.reply("It is only natural. He cut off your arm, and you wanted revenge.");
      }, 15000);
    }
  }

  if ((comment.body).includes("eave him, or we\'ll never make it") || (comment.body).includes("eave him or we\'ll never make it")) {
    console.log("Leave Him Commented");
    console.log("reddit.com" + comment.permalink);
    if (author !== 'ThePrequelMemesBot') {
      setTimeout(function() {
        comment.reply("His fate will be the same as ours");
      }, 15000);
    }
  }

  if ((comment.body).includes("ow did this happen") && (comment.body).includes("e\'re smarter than this")) {
    console.log("Smarter Than This Commented");
    console.log("reddit.com" + comment.permalink);
    if (author !== 'ThePrequelMemesBot') {
      setTimeout(function() {
        comment.reply("Apparently not");
      }, 15000);
    }
  }

  if ((comment.body).includes("was expecting someone with") && (comment.body).includes("your reputation to be a little")) {
    console.log("Reputation Commented");
    console.log("reddit.com" + comment.permalink);
    if (author !== 'ThePrequelMemesBot') {
      setTimeout(function() {
        comment.reply("General Grievous. You\'re shorter than I expected.");
      }, 15000);
    }
  }

  if ((comment.body).includes("saving your skin for the 10th time") || (comment.body).includes("saving your skin for the tenth time")) {
    console.log("Tenth Time Commented");
    console.log("reddit.com" + comment.permalink);
    if (author !== 'ThePrequelMemesBot') {
      setTimeout(function() {
        comment.reply("Ninth time");
      }, 15000);
    }
  }

  if (comment.body === "Ninth time" || comment.body === "ninth time") {
    console.log("Ninth Time Commented");
    console.log("reddit.com" + comment.permalink);
    if (author !== 'ThePrequelMemesBot') {
      setTimeout(function() {
        comment.reply("That business on Cato Neimoidia doesn\'t... doesn\'t count");
      }, 15000);
    }
  }

  if ((comment.body).includes("ou are on this") && (comment.body).includes("but we do not grant you the rank of")) {
    console.log("We Do Not Grant You The Rank Of Master Commented");
    console.log("reddit.com" + comment.permalink);
    if (author !== 'ThePrequelMemesBot') {
      setTimeout(function() {
        comment.reply("What? How can you do this? This is outrageous. It's unfair.");
      }, 15000);
    }
  }

  if ((comment.body).includes("ow can you be on the council") && (comment.body).includes("and not be a master")) {
    console.log("How Can You Be On The Council Commented");
    console.log("reddit.com" + comment.permalink);
    if (author !== 'ThePrequelMemesBot') {
      setTimeout(function() {
        comment.reply("Take a seat, young Skywalker");
      }, 15000);
    }
  }

  if ((comment.body).includes("his is outrageous") && (comment.body).includes("t\'s unfair") && ((comment.body).indexOf("ow can you be")) === -1) {
    console.log("Unfair Commented");
    console.log("reddit.com" + comment.permalink);
    if (author !== 'ThePrequelMemesBot') {
      setTimeout(function() {
        comment.reply("How can you be on the council and not be a master?");
      }, 15000);
    }
  }

  if ((comment.body).includes("hat about the droid") && (comment.body).includes("attack") && (comment.body).includes("on the")) {
    console.log("Droid Attack On The Wookies Commented");
    console.log("reddit.com" + comment.permalink);
    if (author !== 'ThePrequelMemesBot') {
      setTimeout(function() {
        comment.reply("It is critical we send an attack group there immediately");
      }, 15000);
    }
  }

  if ((comment.body).includes("t is critical we send an attack group there immediately")) {
    console.log("Attack Group Commented");
    console.log("reddit.com" + comment.permalink);
    if (author !== 'ThePrequelMemesBot') {
      setTimeout(function() {
        comment.reply("He's right. It\'s a system we cannot afford to lose.");
      }, 15000);
    }
  }

  if ((comment.body).includes("a system we cannot afford to lose")) {
    console.log("Attack Group Commented");
    console.log("reddit.com" + comment.permalink);
    if (author !== 'ThePrequelMemesBot') {
      setTimeout(function() {
        comment.reply("Go I will. Good relations with the Wookiees I have.");
      }, 15000);
    }
  }

  if ((comment.body).includes("id you ever hear the tragedy") && (comment.body).indexOf("thought not") === -1) {
    console.log("Tragedy Of Darth Plagueis The Wise Commented");
    console.log("reddit.com" + comment.permalink);
    if (author !== 'ThePrequelMemesBot') {
      setTimeout(function() {
        comment.reply("I thought not. It's not a story the Jedi would tell you. It\'s a Sith legend.");
      }, 15000);
    }
  }

  if ((comment.body).includes("think Chancellor Palpatine is a Sith lord") || (comment.body).includes("think chancellor palpatine is a sith lord")) {
    console.log("Palpatine Sith Lord Commented");
    console.log("reddit.com" + comment.permalink);
    if (author !== 'ThePrequelMemesBot') {
      setTimeout(function() {
        comment.reply("A Sith lord?");
      }, 15000);
    }
  }

  if ((comment.body).includes("must say you're here sooner than expected")) {
    console.log("Sooner Than Expected Commented");
    console.log("reddit.com" + comment.permalink);
    if (author !== 'ThePrequelMemesBot') {
      setTimeout(function() {
        comment.reply("In the name of the Galactic Senate of the Republic... you're under arrest, Chancellor.");
      }, 15000);
    }
  }

  if ((comment.body).includes("re you threatening me") && (comment.body).includes("aster")) {
    console.log("Threatening Me Commented");
    console.log("reddit.com" + comment.permalink);
    if (author !== 'ThePrequelMemesBot') {
      setTimeout(function() {
        comment.reply("The Senate will decide your fate");
      }, 15000);
    }
  }

  if ((comment.body).includes("will decide your fate")) {
    console.log("Decide Your Fate Commented");
    console.log("reddit.com" + comment.permalink);
    if (author !== 'ThePrequelMemesBot') {
      setTimeout(function() {
        comment.reply("I am the Senate");
      }, 15000);
    }
  }

  if ((comment.body).includes("he Jedi are taking over") || (comment.body).includes("he jedi are taking over")) {
    console.log("Jedi Are Taking Over Commented");
    console.log("reddit.com" + comment.permalink);
    if (author !== 'ThePrequelMemesBot') {
      setTimeout(function() {
        comment.reply("The oppression of the Sith will never return");
      }, 15000);
    }
  }

  if ((comment.body).includes("he oppression of the") && (comment.body).includes("will never return")) {
    console.log("Jedi Are Taking Over Commented");
    console.log("reddit.com" + comment.permalink);
    if (author !== 'ThePrequelMemesBot') {
      setTimeout(function() {
        comment.reply("You have lost");
      }, 15000);
    }
  }

  if ((comment.body).includes("e's too dangerous to be left alive")) {
    console.log("Too Dangerous To Be Left Alive Commented");
    console.log("reddit.com" + comment.permalink);
    if (author !== 'ThePrequelMemesBot') {
      setTimeout(function() {
        comment.reply("I'm too weak. Don't kill me. Please.");
      }, 15000);
    }
  }

  if ((comment.body).includes("he Force is strong with you") || (comment.body).includes("he force is strong with you")) {
    console.log("Force Is Strong With You Commented");
    console.log("reddit.com" + comment.permalink);
    if (author !== 'ThePrequelMemesBot') {
      setTimeout(function() {
        comment.reply("A powerful Sith you will become");
      }, 15000);
    }
  }

  if ((comment.body).includes("t\'s time for you to leave")) {
    console.log("Time For You To Leave Commented");
    console.log("reddit.com" + comment.permalink);
    if (author !== 'ThePrequelMemesBot') {
      setTimeout(function() {
        comment.reply("And so it is");
      }, 15000);
    }
  }

  if ((comment.body).includes("he attempt on") && (comment.body).includes("has left") && (comment.body).includes("scarred and deformed")) {
    console.log("Scarred and Deformed Commented");
    console.log("reddit.com" + comment.permalink);
    if (author !== 'ThePrequelMemesBot') {
      setTimeout(function() {
        comment.reply("But I assure you. My resolve has never been stronger!");
      }, 15000);
    }
  }

  if ((comment.body).includes("epublic will be reorganized") && (comment.body).includes("into the first") && (comment.body).includes("alactic") && (comment.body).includes("mpire")) {
    console.log("Reorganized Commented");
    console.log("reddit.com" + comment.permalink);
    if (author !== 'ThePrequelMemesBot') {
      setTimeout(function() {
        comment.reply("So this is how liberty dies. With thunderous applause.");
      }, 15000);
    }
  }

  if ((comment.body).includes("all I want is your love")) {
    console.log("Your Love Commented");
    console.log("reddit.com" + comment.permalink);
    if (author !== 'ThePrequelMemesBot') {
      setTimeout(function() {
        comment.reply("Love won't save you, Padmé. Only my new powers can do that.");
      }, 15000);
    }
  }

  if ((comment.body).includes("ou\'re breaking my heart")) {
    console.log("Breaking My Heart Commented");
    console.log("reddit.com" + comment.permalink);
    if (author !== 'ThePrequelMemesBot') {
      setTimeout(function() {
        comment.reply("You're going down a path I can\'t follow!");
      }, 15000);
    }
  }

  if ((comment.body).includes("u/ThePrequelMemesBot") || (comment.body).includes("/u/ThePrequelMemesBot")) {
    console.log("u/ThePrequelMemesBot Commented");
    console.log("reddit.com" + comment.permalink);
    if (author !== 'ThePrequelMemesBot') {
      comment.reply("Hello there!");
    }
  }

  if (comment.body === "Roger roger" || comment.body === "roger roger" || comment.body === "Roger, roger" || comment.body === "roger, roger" || comment.body === "Roger roger." ||
      comment.body === "Roger, roger." || comment.body === "Roger Roger" || comment.body === "Roger Roger.") {
    console.log("Roger Roger Commented");
    console.log("reddit.com" + comment.permalink);
    if (author !== 'ThePrequelMemesBot') {
      setTimeout(function() {
        comment.reply("Roger Roger");
      }, 15000);
    }
  }

  if ((comment.body).includes("see through the lies of the")) {
    console.log("Fear The Lies Of The Jedi Commented");
    console.log("reddit.com" + comment.permalink);
    if (author !== 'ThePrequelMemesBot') {
      comment.reply("I do not fear the dark side as you do!");
    }
  }

  if (comment.body === "!screenshot") {
    console.log("Screenshot");
    var link = "https://reddit.com" + comment.permalink + "?context=10000";
    var img_name = comment.name;
    screenshot(link, img_name, image_url => {
      console.log(image_url);
      comment.reply(image_url + "\n --- \n ^^^^I\'m ^^^^a ^^^^bot ^^^^that ^^^^takes ^^^^screenshots ^^^^of ^^^^comment ^^^^chains ^^^^| ^^^^[Creator](/u/The_Big_Red_Doge)");
    });
  }


});

imgur.setCredentials(process.env.IMGUR_EMAIL, process.env.IMGUR_PASSWORD, process.env.IMGUR_CLIENT_ID);

var options = {
  screenSize: {
    width: 800,
    height: 920
  },
  shotSize: {
    width: 750,
    height: 700
  },
  shotOffset: {
    left: 25,
    right: 25,
    top: 220,
    bottom: 0
  },
  quality: 100,
  captureSelector: true
};

function screenshot(link, img_name, image_url) {
  var name = '/screenshots/' + img_name + '.png';
  webshot(link, name, options, function(err) {
    if (err) throw err;
    console.log("Screenshot Saved");
    imgur.uploadFile(name)
      .then(function(json) {
        image_url(json.data.link);
      })
      .catch(function(err) {
        console.error(err.message);
      });
  });
}



function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
/*
const submissionStream = client.SubmissionStream({
  subreddit: 'PrequelMemes',
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
      post.reply("[General Reposti! ](http://karmadecay.com/" + post.permalink + ") \n --- \n ^^^^I ^^^^am ^^^^a ^^^^human ^^^^and ^^^^bot, ^^^^message ^^^^me ^^^^if ^^^^the ^^^^bot ^^^^executes ^^^^order ^^^^66  ^^^^| [^^^^Source ^^^^Code](https://github.com/BigRedDoge/PrequelMemes-Bot)");
    } else {
      console.log("Not a Reposti");
    }
  });
});
*/
