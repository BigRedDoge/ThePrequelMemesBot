require('dotenv').config();

const cloudscraper = require('cloudscraper');
const $ = require('jquery')(require('jsdom-no-contextify').jsdom().parentWindow);

const webshot = require('webshot');
const imgur = require('imgur');

const Snoowrap = require('snoowrap');
const Snoostorm = require('snoostorm');

const mysql = require('mysql');

const nlp = require('compromise');

const http = require('http');

const request = require('request');

const con = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASS,
  database: 'PrequelMemes'
});

const r = new Snoowrap({
  userAgent: 'hellothere-bot-useragent',
  clientId: process.env.CLIENT2_ID,
  clientSecret: process.env.CLIENT2_SECRET,
  username: process.env.REDDIT2_USER,
  password: process.env.REDDIT2_PASS
});

const client = new Snoostorm(r);

const PMstreamOpts = {
  subreddit: 'PrequelMemes',
  results: 100,
  pollTime: 2050
}

const PMComments = client.CommentStream(PMstreamOpts);


PMComments.on('comment', (comment) => {
  quoteCheck(comment);
});


function quoteCheck(comment) {

  var author = JSON.parse(JSON.stringify(comment.author)).name;

  if ((comment.body).includes("u/ThePrequelMemesBot") || (comment.body).includes("/u/ThePrequelMemesBot")) {
    console.log("u/ThePrequelMemesBot Commented");
    console.log("reddit.com" + comment.permalink);
    commentReply(comment, "Hello there!");
  }

  if (comment.body === "!screenshot") {
    console.log("Screenshot");
    var link = "https://reddit.com" + comment.permalink + "?context=10000";
    var img_name = comment.name;
    screenshot(link, img_name, image_url => {
      console.log(image_url);
      comment.reply(image_url + "\n --- \n ^^^^I\'m ^^^^a ^^^^bot ^^^^that ^^^^takes ^^^^screenshots ^^^^of ^^^^comment ^^^^chains ^^^^| ^^^^[Creator](/u/The_Big_Red_Doge) ^^^^| ^^^^[source](https://github.com/BigRedDoge/PrequelMemes-Bot)");
    });
  }

  if (author !== 'ThePrequelMemesBot') {

          if (comment.body === 'Hello There' || comment.body === 'Hello there' || comment.body === 'hello there' ||
              comment.body === 'Hello There!' || comment.body === 'Hello there!' || comment.body === 'hello there!' || comment.body === "HELLO THERE") {
            console.log("General Kenobi Commented!");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, 'General Kenobi!');
          }

          if (comment.body === 'General Reposti!' || comment.body === 'General reposti!' || comment.body === 'general reposti!' ||
              comment.body === 'General Reposti' || comment.body === 'General reposti' || comment.body === 'general reposti') {
            console.log("Reposti Commented!");
            console.log("reddit.com" + comment.permalink);
            if (getRandomInt(2) === 0) {
              commentReply(comment, 'You are a bold one!');
            } else {
              commentReply(comment, 'You are an old one!');
            }
          }


          if (comment.body === 'General Kenobi!' || comment.body === 'General kenobi!' || comment.body === 'general kenobi!' ||
                comment.body === 'General Kenobi' || comment.body === 'General kenobi' || comment.body === 'general kenobi') {
                console.log("Kenobi Commented!");
                console.log("reddit.com" + comment.permalink);
                commentReply(comment, 'You are a bold one!');
          }

          if (comment.body === 'I am the Senate' || comment.body === 'I am the senate' || comment.body === 'i am the Senate') {
            console.log("Senate Commented!");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, 'Not. Yet.');
          }
/*
          if ((comment.body).includes('will decide your fate')) {
            console.log("Senate Commented!");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, 'I am the Senate');
          }
*/
          if (comment.body === 'My lord, is that legal?' || comment.body === 'my lord, is that legal?' || comment.body === 'My lord is that legal?' ||
              comment.body === 'my lord is that legal?' || comment.body === 'Is that legal?' || comment.body === 'is that legal?' || comment.body === 'Is that, legal?' || comment.body === 'is that, legal?') {
            console.log("Legal Commented!");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, 'I will make it legal');
          }

          if (comment.body === 'I sense a trap' || comment.body === 'i sense a trap' || comment.body === 'I sense a trap.' || comment.body === 'i sense a trap.') {
            console.log("Trap Commented");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, 'Next move?');
          }

          if (comment.body === 'Is it possible to learn this power?' || comment.body === 'is it possible to learn this power?' || comment.body === 'Is it possible to learn this power' ||
              comment.body === 'is it possible to learn this power') {
            console.log("Learn Power Commented");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, 'Not from a Jedi');
          }

          if ((comment.body).includes('very impressive') && (comment.body).includes('must be very proud') || (comment.body).includes('very impressive,') && (comment.body).includes('must be very proud')) {
            console.log("Impressive Clones Commented");
            console.log("reddit.com" + comment.permalink);

            if ((nlp((nlp(comment.body)).normalize().before("very").after("your").out().replace(/\b(?=is|are)\w+\b/g, ""))).out()) {
                let wordtest = ((nlp((nlp(comment.body)).normalize().before("very").after("your").out().replace(/\b(?=is|are)\w+\b/g, ""))).out('tags')[0].tags);
                let clonetest = (nlp((nlp(comment.body)).normalize().before("very").after("your").out().replace(/\b(?=is|are)\w+\b/g, ""))).out('normal');
                if (clonetest !== "clones") {
                    for (var i = 0; i < wordtest.length; i++) {
                        if (wordtest[i] === "Verb") {
                            let verbword = (nlp((nlp(comment.body)).normalize().before("very").after("your").out().replace(/\b(?=is|are)\w+\b/g, ""))).verbs().conjugate()[0].Infinitive;
                            commentReply(comment, `I\'m just a simple ${verbword}, trying to make my way in the universe`);
                            return;
                        } else if (wordtest[i] === "Noun") {
                            let nounword = (nlp((nlp(comment.body)).normalize().before("very").after("your").out().replace(/\b(?=is|are)\w+\b/g, ""))).nouns().toSingular().out('normal');
                            commentReply(comment, `I\'m just a simple ${nounword}, trying to make my way in the universe`);
                            return;
                        } else if (i === wordtest.length - 1) {
                            let anyword = (nlp((nlp(comment.body)).normalize().before("very").after("your").out().replace(/\b(?=is|are)\w+\b/g, ""))).out('normal');
                            commentReply(comment, `I\'m just a simple ${anyword}, trying to make my way in the universe`);
                            return;
                        }
                    }
                } else {
                  commentReply(comment, "I\’m just a simple man, trying to make my way in the universe");
                }
            } else {
              commentReply(comment, "I\’m just a simple man, trying to make my way in the universe");
            }

          }

          if ((comment.body).includes("ll try") && (comment.body).includes("a good trick")) {
            console.log("Spinning Commented");
            console.log("reddit.com" + comment.permalink);
            if (getRandomInt(2) === 0) {
              commentReply(comment, 'Yippee!');
            } else {
              commentReply(comment, 'This is where the fun begins');
            }
          }

          if ((comment.body).includes("anna buy some death sticks")) {
            console.log("Death Sticks Commented");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, "You don\'t want to sell me death sticks");
          }

          if ((comment.body).includes("just a simple") && (comment.body).includes("trying to make my way in")) {
            console.log("Simple Man Commented");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, 'Ever made your way as far into the interior as r/PrequelMemes?');
          }

          if (comment.body === "I\'ve been looking forward to this" || comment.body === "i\'ve been looking forward to this" || comment.body === "I\'ve been looking forward to this." || comment.body === "i\'ve been looking forward to this." || comment.body === "Ive been looking forward to this" ||
              comment.body === "Ive been looking forward to this." || comment.body === "ive been looking forward to this" || comment.body === "ive been looking forward to this.") {
            console.log("Looking Foward to This Commented");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, 'My powers have doubled since the last time we met, Count');
          }

          if ((comment.body).includes("doubled since the last time we met")) {
            console.log("Looking Foward to This Commented");
            console.log("reddit.com" + comment.permalink);
            var pride = (nlp(comment.body)).normalize().match("My #Noun . doubled since the last time we met").nouns(0).out();;
            if (nlp(pride)) {
              if (pride === " powers" || pride === " power") {
                commentReply(comment, 'Good. Twice the pride, double the fall');
              } else {
                commentReply(comment, 'Good. Twice the' + nlp(pride).out() + ', double the fall');
              }
            } else {
              commentReply(comment, 'Good. Twice the' + nlp(pride).out() + ', double the fall');
            }
          }

          if (comment.body === "Kill him, kill him now" || comment.body === "kill him, kill him now" || comment.body === "Kill him, kill him now." || comment.body === "kill him, kill him now." || comment.body === "Kill him now" || comment.body === "kill him now") {
            console.log("Kill him now Commented");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, "I shouldn\'t");
          }

          if (comment.body === "I shouldn\'t" || comment.body === "I shouldn\'t." || comment.body === "I shouldnt" || comment.body === "i shouldnt") {
            console.log("I Shouldn\'t Commented");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, "Dewit");
          }

          if ((comment.body).includes("should have known the") && (comment.body).includes("were plotting to take over")) {
            console.log("Plotting to Take Over Commented");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, "Anakin, Chancellor Palpatine is evil!");
          }

          if ((comment.body).includes("Execute order") || (comment.body).includes("execute order")) {
            console.log("Execute Order Commented");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, "It will be done, my lord");
          }

          if (comment.body === "r/PrequelMemes" || comment.body === "/r/PrequelMemes" || comment.body === "r/prequelmemes" || comment.body === "/r/prequelmemes") {
            console.log("r/PrequelMemes Commented");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, "Is where the fun begins!");
          }

          if (comment.body === "r/SequelMemes" || comment.body === "/r/SequelMemes" || comment.body === "r/sequelmemes" || comment.body === "/r/sequelmemes") {
            console.log("r/PrequelMemes Commented");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, "It\'s treason then");
          }

          if ((comment.body).includes("ou turned her against me")) {
            console.log("Turned Her Commented");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, "You have done that yourself");
          }

          if ((comment.body).includes("ou have become the very thing you swore to destroy")) {
            console.log("Swore to Destroy Commented");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, "Don\'t lecture me, Obi-Wan!");
          }

          if ((comment.body).includes("have brought peace, freedom, justice, and security to my new empire")) {
            console.log("My New Empire Commented");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, "Your new empire?");
          }

          if ((comment.body).includes("our new empire")) {
            console.log("My New Empire Commented");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, "Don\'t make me kill you");
          }

          if ((comment.body).includes("on\'t make me kill you") || (comment.body).includes("ont make me kill you")) {
            console.log("Don\'t Make Me Kill You Commented");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, "Anakin, my allegiance is to the Republic, to Democracy!");
          }

          if ((comment.body).includes("my allegiance is to the")) {
            console.log("Allegiance Commented");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, "If you are not with me, then you are my enemy");
          }

          if ((comment.body).includes("not with me") && (comment.body).includes("then") && (comment.body).includes("enemy")) {
            console.log("My Enemy Commented");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, "Only a Sith deals in absolutes");
          }

          if ((comment.body).includes("nly a") && (comment.body).includes("deals in absolutes") && (comment.body).indexOf("will do what") === -1) {
            console.log("Absolutes Commented");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, "I will do what I must");
          }

          if ((comment.body).includes("will do what I must") || (comment.body).includes("will do what i must")) {
            console.log("I Will Do What I Must Commented");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, "You will try");
          }

          if ((comment.body).includes("rom my point of view") && (comment.body).includes("the") && (comment.body).includes("are evil")) {
            console.log("My Point of View Commented");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, "Well then you are lost!");
          }

          /*
          if ((comment.body).includes("I have the high ground") || (comment.body).includes("i have the high ground")) {
            console.log("High Ground Commented");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, "You underestimate my power!");
          }
          */

          if ((comment.body).includes("ou underestimate my power")) {
            console.log("Underestimate My Power Commented");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, "Don\'t try it");
          }

          if (comment.body === "I hate you" || comment.body === "I hate you!") {
            console.log("I hate you Commented");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, "You were my brother, Anakin! I loved you");
          }

          if (comment.body === "He's a Sith lord" || comment.body === "he's a Sith lord" || comment.body === "He's a Sith lord." || comment.body === "he's a Sith lord." ||
              comment.body === "He's a sith lord" || comment.body === "He's a sith lord." || comment.body === "he's a sith lord" || comment.body === "he's a sith lord." ||
              comment.body === "Hes a Sith lord" || comment.body === "hes a Sith lord" || comment.body === "Hes a sith lord" || comment.body === "hes a sith lord") {
            console.log("Sith Lord Commented");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, "Chancellor Palpatine, Sith lords are our speciality");
          }

          if ((comment.body).includes("e was too dangerous to be left alive.") || (comment.body).includes("e was too dangerous to be kept alive.")) {
            console.log("Too Dangerous Commented");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, "It\'s not the Jedi way.");
          }

          if ((comment.body).includes("eave him, or we\'ll never make it") || (comment.body).includes("eave him or we\'ll never make it")) {
            console.log("Leave Him Commented");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, "His fate will be the same as ours");
          }

          if ((comment.body).includes("ow did this happen") && (comment.body).includes("e\'re smarter than this")) {
            console.log("Smarter Than This Commented");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, "Apparently not");
          }

          if ((comment.body).includes("was expecting someone with") && (comment.body).includes("your reputation to be a little")) {
            console.log("Reputation Commented");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, "General Grievous. You\'re shorter than I expected.");
          }

          if ((comment.body).includes("saving your skin for the 10th time") || (comment.body).includes("saving your skin for the tenth time")) {
            console.log("Tenth Time Commented");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, "Ninth time");
          }

          if (comment.body === "Ninth time" || comment.body === "ninth time") {
            console.log("Ninth Time Commented");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, "That business on Cato Neimoidia doesn\'t... doesn\'t count");
          }

          if ((comment.body).includes("ou are on this") && (comment.body).includes("but we do not grant you the rank of")) {
            console.log("We Do Not Grant You The Rank Of Master Commented");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, "What? How can you do this? This is outrageous. It's unfair.");
          }

          if ((comment.body).includes("ow can you be on the council") && (comment.body).includes("and not be a master")) {
            console.log("How Can You Be On The Council Commented");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, "Take a seat, young Skywalker");
          }

          if ((comment.body).includes("his is outrageous") && (comment.body).includes("t\'s unfair") && ((comment.body).indexOf("ow")) === -1) {
            console.log("Unfair Commented");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, "How can you be on the council and not be a master?");
          }

          if ((comment.body).includes("hat about the droid") && (comment.body).includes("attack") && (comment.body).includes("on the")) {
            console.log("Droid Attack On The Wookies Commented");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, "It is critical we send an attack group there immediately");
          }

          if ((comment.body).includes("t is critical we send an attack group there immediately")) {
            console.log("Attack Group Commented");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, "He's right. It\'s a system we cannot afford to lose.");
          }

          if ((comment.body).includes("a system we cannot afford to lose")) {
            console.log("Attack Group Commented");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, "Go I will. Good relations with the Wookiees I have.");
          }

          if ((comment.body).includes("id you ever hear the tragedy") && (comment.body).indexOf("story") === -1) {
            console.log("Tragedy Of Darth Plagueis The Wise Commented");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, "I thought not. It's not a story the Jedi would tell you. It\'s a Sith legend.");
          }

          if ((comment.body).includes("think Chancellor Palpatine is a Sith lord") || (comment.body).includes("think chancellor palpatine is a sith lord")) {
            console.log("Palpatine Sith Lord Commented");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, "A Sith lord?");
          }

          if ((comment.body).includes("must say you're here sooner than expected")) {
            console.log("Sooner Than Expected Commented");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, "In the name of the Galactic Senate of the Republic... you're under arrest, Chancellor.");
          }

          if ((comment.body).includes("re you threatening me") && (comment.body).includes("aster")) {
            console.log("Threatening Me Commented");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, "The Senate will decide your fate");
          }

          if ((comment.body).includes("will decide your fate")) {
            var fate = (nlp(comment.body)).normalize().before('will').nouns(0).out();
            if (nlp(fate).toTitleCase().out()) {
              commentReply(comment, "I am the " + nlp(fate).toTitleCase().out());
            } else {
              commentReply(comment, "I am the Senate");
            }
            console.log("Decide Your Fate Commented");
            console.log("reddit.com" + comment.permalink);
          }


          if ((comment.body).includes("he Jedi are taking over") || (comment.body).includes("he jedi are taking over")) {
            console.log("Jedi Are Taking Over Commented");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, "The oppression of the Sith will never return");
          }

          if ((comment.body).includes("he oppression of the") && (comment.body).includes("will never return")) {
            console.log("Jedi Are Taking Over Commented");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, "You have lost");
          }

          if ((comment.body).includes("he Force is strong with you") || (comment.body).includes("he force is strong with you")) {
            console.log("Force Is Strong With You Commented");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, "A powerful Sith you will become");
          }

          if ((comment.body).includes("t\'s time for you to leave")) {
            console.log("Time For You To Leave Commented");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, "And so it is");
          }

          if ((comment.body).includes("he attempt on") && (comment.body).includes("has left") && (comment.body).includes("scarred and deformed")) {
            console.log("Scarred and Deformed Commented");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, "But I assure you. My resolve has never been stronger!");
          }

          if ((comment.body).includes("epublic will be reorganized") && (comment.body).includes("into the first") && (comment.body).includes("alactic") && (comment.body).includes("mpire")) {
            console.log("Reorganized Commented");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, "So this is how liberty dies. With thunderous applause.");
          }

          if ((comment.body).includes("all I want is your love")) {
            console.log("Your Love Commented");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, "Love won't save you, Padmé. Only my new powers can do that.");
          }

          if ((comment.body).includes("ou\'re breaking my heart")) {
            console.log("Breaking My Heart Commented");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, "You're going down a path I can\'t follow!");
          }

          if (comment.body === "Roger roger" || comment.body === "roger roger" || comment.body === "Roger, roger" || comment.body === "roger, roger" || comment.body === "Roger roger." ||
              comment.body === "Roger, roger." || comment.body === "Roger Roger" || comment.body === "Roger Roger.") {
            console.log("Roger Roger Commented");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, "Roger Roger");
          }

          if ((comment.body).includes("see through the lies of the")) {
            console.log("Fear The Lies Of The Jedi Commented");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, "I do not fear the dark side as you do!");
          }

          if ((comment.body).includes("want to sell you death sticks")) {
            console.log("Sell Death Sticks Commented");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, "You want to go home and rethink your life");
          }

          if (((nlp(comment.body)).normalize().toLowerCase().out()).includes("we are just clones sir. we are meant to be expendable")) {
            console.log("Expendable Commented");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, "Not to me");
          }

          if (((nlp(comment.body)).normalize().out()).replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "") === "ewan mcgregor") {
            console.log("Ewan Commented");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, "You mean Jesus?");
          }

          if (((nlp(comment.body)).normalize().out()).replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "") === "good soldiers follow orders") {
            console.log("Good Soldiers Commented");
            console.log("reddit.com" + comment.permalink);
            if (getRandomInt(3) === 0 || getRandomInt(3) === 1) {
              commentReply(comment, "Good soldiers follow orders");
            } else {
              commentReply(comment, "Kill the Jedi");
            }
          }

          if (((nlp(comment.body)).normalize().out()).replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "") === "general roboti") {
            console.log("General Roboti Commented");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, "I am a bot one");
          }

          if ((comment.body).includes("AAAAAAAHH!")) {
            console.log("AAAAAAAHH! Commented");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, "You were the Chosen One!");
          }
    }

}


function commentReply(comment, response) {

  var author = JSON.parse(JSON.stringify(comment.author)).name;

  request.post('http://178.128.157.114:3000',
      {json: { com: comment, res: response } },
      function(error, response, body) {
      if (!error && response.statusCode === 200) {
        console.log("Sent to ThePrequelMemesBot server");
      }
  });
/*
  setTimeout(function() {
    con.query('SELECT * FROM comments WHERE commentid = "' + comment.id + '"', function(err, result) {
      if (err) throw err;
      if (result.length === 0) {
        con.query('INSERT INTO comments (author, commentid) VALUES ("' + author + '", "' + comment.id + '")',
        function(err, result) {
          if (err) throw err;
          request.post('http://178.128.157.114:3000',
              {json: { com: comment, res: response } },
              function(error, response, body) {
              if (!error && response.statusCode === 200) {
                console.log("Sent to ThePrequelMemesBot server");
              }
          });
        });
      }
    });
  }, 15000);*/
}


/*

*/
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
