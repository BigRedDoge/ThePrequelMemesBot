const response = require('./response.js');

// Queue Class
const Queue = require('./queue.js');
const queue = new Queue();

// HTTP Server for POST's from Server 2
const app = require('./express.js');

// Webshot module for screenshots, Imgur module for uploading to Imgur
const webshot = require('webshot');
const imgur = require('imgur');

// Snoowrap and Snoostorm for Reddit API
const Snoowrap = require('snoowrap');
const Snoostorm = require('snoostorm');

// MySQL for tracking comments to prevent commenting twice
const mysql = require('mysql');

// Compromise module for sentence parsing
const nlp = require('compromise');

//dotenv for .env file with configuration details
require('dotenv').config();

//MySQL Config
const con = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASS,
    database: 'PrequelMemes'
});

// Snoowrap Config
const r = new Snoowrap({
    userAgent: 'hellothere-bot-useragent',
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    username: process.env.REDDIT_USER,
    password: process.env.REDDIT_PASS
});
//r.config({continueAfterRatelimitError: true});
const client = new Snoostorm(r);

class CommentFormater {
  constructor(body, author, id) {
    this.body = body;
    this.author = author;
    this.id = id;
  }
}

// Queue comments from Server 2
app.post('/', function(req, res) {
    res.end();
    let reply = new CommentFormater(req.body.res, JSON.parse(JSON.stringify(req.body.com.author)).name, req.body.com.id);
    queue.enqueue([reply, reply.body, 'server2']);
    console.log("Comment recieved from alt server");
});

// Load inbox and check for replies to respond to
function inbox() {
    r.getUnreadMessages().then(msg => {
        var msgs = JSON.parse(JSON.stringify(msg));
        for (var x = 0; x < msgs.length; x++) {
            let comment = new CommentFormater(msgs[x].body, msgs[x].author, msgs[x].id);
            r.markMessagesAsRead(['t1_' + msgs[x].id])
            .catch(error => {
              return;
            });
            quoteCheck(comment, 'inbox');
        }
    });
}
inbox();
setInterval(inbox, 30000);

// Comment Stream Settings
const StreamOptions = {
    subreddit: 'all',
    results: 100,
    pollTime: 2175
}
const AllComments = client.CommentStream(StreamOptions);

AllComments.on('comment', (comment) => {
    quoteCheck(comment, 'api');
});

//Check if comment is a quote to respond to
function quoteCheck(comment, source) {
    let author, subreddit;
    if (comment.subreddit) {
      subreddit = JSON.parse(JSON.stringify(comment.subreddit)).display_name;
    } else {
      subreddit = 'undefined';
    }

    if (source === 'api') {
        author = JSON.parse(JSON.stringify(comment.author)).name;
    } else {
        author = comment.author;
    }

    if ((comment.body).includes("u/ThePrequelMemesBot") || (comment.body).includes("/u/ThePrequelMemesBot")) {
        console.log("u/ThePrequelMemesBot Commented");
        console.log("reddit.com" + comment.permalink);
        commentReply(comment, "Hello there!", source);
    }

    if (comment.body === "!screenshot") {
        console.log("Screenshot");
        var link = "https://old.reddit.com" + comment.permalink + "?context=10000";
        var img_name = comment.name;
        screenshot(link, img_name, image_url => {
            console.log(image_url);
            commentReply(comment, `${image_url} \n --- \n ^^^^I\'m ^^^^a ^^^^bot ^^^^that ^^^^takes ^^^^screenshots ^^^^of ^^^^comment ^^^^chains ^^^^| ^^^^[Creator](/u/The_Big_Red_Doge) ^^^^| ^^^^[source](https://github.com/BigRedDoge/PrequelMemes-Bot)`, source);
        });
    }

    if (author !== 'ThePrequelMemesBot' && author !== 'repost_detector_hk47' && subreddit !== 'PrequelMemes') {

        if (nlp((comment.body).replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")).out('normal') === 'hello there') {
            console.log("General Kenobi Commented!");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, 'General Kenobi!', source);
        }

        if (nlp((comment.body).replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")).out('normal') === 'general reposti') {
            console.log("Reposti Commented!");
            console.log("reddit.com" + comment.permalink);
            if (getRandomInt(2) === 0) {
                commentReply(comment, 'You are a bold one!', source);
            } else {
                commentReply(comment, 'You are an old one!', source);
            }
        }

        if (nlp((comment.body).replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")).out('normal') === 'general kenobi') {
            console.log("Kenobi Commented!");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, 'You are a bold one!', source);
        }

        if (nlp((comment.body).replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")).out('normal') === 'i am the senate') {
            console.log("Senate Commented!");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, 'Not. Yet.', source);
        }

        if (comment.body === 'My lord, is that legal?' || comment.body === 'my lord, is that legal?' || comment.body === 'My lord is that legal?' ||
            comment.body === 'my lord is that legal?' || comment.body === 'Is that legal?' || comment.body === 'is that legal?' || comment.body === 'Is that, legal?' || comment.body === 'is that, legal?') {
            console.log("Legal Commented!");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, 'I will make it legal', source);
        }

        if (comment.body === 'I sense a trap' || comment.body === 'i sense a trap' || comment.body === 'I sense a trap.' || comment.body === 'i sense a trap.') {
            console.log("Trap Commented");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, 'Next move?', source);
        }

        if (comment.body === 'Is it possible to learn this power?' || comment.body === 'is it possible to learn this power?' || comment.body === 'Is it possible to learn this power' ||
            comment.body === 'is it possible to learn this power') {
            console.log("Learn Power Commented");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, 'Not from a Jedi', source);
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
                            commentReply(comment, `I\'m just a simple ${verbword}, trying to make my way in the universe`, source);
                            return;
                        } else if (wordtest[i] === "Noun") {
                            let nounword = (nlp((nlp(comment.body)).normalize().before("very").after("your").out().replace(/\b(?=is|are)\w+\b/g, ""))).nouns().toSingular().out('normal');
                            commentReply(comment, `I\'m just a simple ${nounword}, trying to make my way in the universe`, source);
                            return;
                        } else if (i === wordtest.length - 1) {
                            let anyword = (nlp((nlp(comment.body)).normalize().before("very").after("your").out().replace(/\b(?=is|are)\w+\b/g, ""))).out('normal');
                            commentReply(comment, `I\'m just a simple ${anyword}, trying to make my way in the universe`, source);
                            return;
                        }
                    }
                } else {
                    commentReply(comment, "I\’m just a simple man, trying to make my way in the universe", source);
                }
            } else {
                commentReply(comment, "I\’m just a simple man, trying to make my way in the universe", source);
            }

        }

        if ((comment.body).includes("ll try") && (comment.body).includes("a good trick")) {
            console.log("Spinning Commented");
            console.log("reddit.com" + comment.permalink);
            var spin = nlp((comment.body).replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")).before('that\'s').after('try').out('normal');
            if (spin === 'spinning') {
                if (getRandomInt(2) === 0) {
                    commentReply(comment, "This is where the fun begins!", source);
                } else {
                    commentReply(comment, "Yippee!", source);
                }
            } else {
                if (getRandomInt(3) <= 1) {
                    if (nlp(spin).out()) {
                        commentReply(comment, `This is where the ${spin} begins!`, source);
                    } else {
                        commentReply(comment, "This is where the fun begins!", source);
                    }
                } else {
                    commentReply(comment, "Yippee!", source);
                }
            }
        }

        if ((comment.body).includes("anna buy some death sticks")) {
            console.log("Death Sticks Commented");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, "You don\'t want to sell me death sticks", source);
        }

        if (((nlp((comment.body).replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, ""))).normalize().out('normal')).includes("you do not want to sell me deathsticks")) {
            console.log("Death Sticks Commented");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, "I don\'t want to sell you death sticks", source);
        }

        if (((nlp((comment.body).replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, ""))).normalize().out('normal')).includes("you want to go home and rethink your life")) {
            console.log("Go Home Commented");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, "I want to go home and rethink my life", source);
        }

        if ((comment.body).includes("just a simple") && (comment.body).includes("trying to make my way in")) {
            console.log("Simple Man Commented");
            console.log("reddit.com" + comment.permalink);
            if (JSON.parse(JSON.stringify(comment.subreddit)).display_name === 'PrequelMemes') {
                commentReply(comment, 'Ever made your way as far into the interior as Coruscant?', source);
            } else {
                commentReply(comment, 'Ever made your way as far into the interior as r/PrequelMemes?', source);
            }
        }

        if (comment.body === "I\'ve been looking forward to this" || comment.body === "i\'ve been looking forward to this" || comment.body === "I\'ve been looking forward to this." || comment.body === "i\'ve been looking forward to this." || comment.body === "Ive been looking forward to this" ||
            comment.body === "Ive been looking forward to this." || comment.body === "ive been looking forward to this" || comment.body === "ive been looking forward to this.") {
            console.log("Looking Foward to This Commented");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, 'My powers have doubled since the last time we met, Count', source);
        }

        if ((comment.body).includes("doubled since the last time we met")) {
            console.log("Looking Foward to This Commented");
            console.log("reddit.com" + comment.permalink);
            let pride = ((nlp(comment.body)).before('doubled').after('my').out()).replace(/\b(?=have|has)\w+\b/g, "").trim();
            if (pride) {
                if (pride === "powers" || pride === "power") {
                    commentReply(comment, 'Good. Twice the pride, double the fall', source);
                } else {
                    commentReply(comment, `Good. Twice the ${pride}, double the fall`, source);
                }
            } else {
                commentReply(comment, 'Good. Twice the pride, double the fall', source);
            }
        }

        if (comment.body === "Kill him, kill him now" || comment.body === "kill him, kill him now" || comment.body === "Kill him, kill him now." || comment.body === "kill him, kill him now." || comment.body === "Kill him now" || comment.body === "kill him now") {
            console.log("Kill him now Commented");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, "I shouldn\'t", source);
        }

        if (comment.body === "I shouldn\'t" || comment.body === "I shouldn\'t." || comment.body === "I shouldnt" || comment.body === "i shouldnt") {
            console.log("I Shouldn\'t Commented");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, "Dewit", source);
        }

        if ((comment.body).includes("should have known") && (comment.body).includes("were plotting to take over")) {
            console.log("Plotting to Take Over Commented");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, "Anakin, Chancellor Palpatine is evil!", source);
        }

        if ((comment.body).includes("Execute order") || (comment.body).includes("execute order")) {
            console.log("Execute Order Commented");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, "It will be done, my lord", source);
        }

        if (comment.body === "r/PrequelMemes" || comment.body === "/r/PrequelMemes" || comment.body === "r/prequelmemes" || comment.body === "/r/prequelmemes") {
            console.log("r/PrequelMemes Commented");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, "Is where the fun begins!", source);
        }

        if (comment.body === "r/SequelMemes" || comment.body === "/r/SequelMemes" || comment.body === "r/sequelmemes" || comment.body === "/r/sequelmemes") {
            console.log("r/PrequelMemes Commented");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, "It\'s treason then", source);
        }

        if ((comment.body).includes("ou turned her against me")) {
            console.log("Turned Her Commented");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, "You have done that yourself", source);
        }

        if ((comment.body).includes("ou have become the very thing you swore to destroy")) {
            console.log("Swore to Destroy Commented");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, "Don\'t lecture me, Obi-Wan!", source);
        }

        if (((comment.body).replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")).includes("have brought peace, freedom, justice, and security to my new empire")) {
            console.log("My New Empire Commented");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, "Your new empire?", source);
        }

        if ((comment.body).includes("our new empire")) {
            console.log("My New Empire Commented");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, "Don\'t make me kill you", source);
        }

        if ((comment.body).includes("on\'t make me kill you") || (comment.body).includes("ont make me kill you")) {
            console.log("Don\'t Make Me Kill You Commented");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, "Anakin, my allegiance is to the Republic, to Democracy!", source);
        }

        if ((comment.body).includes("my allegiance is to the")) {
            console.log("Allegiance Commented");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, "If you are not with me, then you are my enemy", source);
        }

        if ((comment.body).includes("not with me") && (comment.body).includes("then") && (comment.body).includes("enemy")) {
            console.log("My Enemy Commented");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, "Only a Sith deals in absolutes", source);
        }

        if ((comment.body).includes("nly a") && (comment.body).includes("deals in absolutes") && (comment.body).indexOf("will do what") === -1) {
            console.log("Absolutes Commented");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, "I will do what I must", source);
        }

        if ((comment.body).includes("will do what I must") || (comment.body).includes("will do what i must")) {
            console.log("I Will Do What I Must Commented");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, "You will try", source);
        }

        if ((comment.body).includes("rom my point of view") && (comment.body).includes("the") && (comment.body).includes("are evil")) {
            console.log("My Point of View Commented");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, "Well then you are lost!", source);
        }

        if ((comment.body).includes("I have the high ground") || (comment.body).includes("i have the high ground")) {
            console.log("High Ground Commented");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, "You underestimate my power!", source);
        }

        if ((comment.body).includes("ou underestimate my power")) {
            console.log("Underestimate My Power Commented");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, "Don\'t try it", source);
        }

        if (comment.body === "I hate you" || comment.body === "I hate you!") {
            console.log("I hate you Commented");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, "You were my brother, Anakin! I loved you", source);
        }

        if ((comment.body).includes("e was too dangerous to be left alive.") || (comment.body).includes("e was too dangerous to be kept alive.")) {
            console.log("Too Dangerous Commented");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, "It\'s not the Jedi way.", source);
        }

        if ((comment.body).includes("eave him, or we\'ll never make it") || (comment.body).includes("eave him or we\'ll never make it")) {
            console.log("Leave Him Commented");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, "His fate will be the same as ours", source);
        }

        if ((comment.body).includes("ow did this happen") && (comment.body).includes("e\'re smarter than this")) {
            console.log("Smarter Than This Commented");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, "Apparently not", source);
        }

        if ((comment.body).includes("was expecting someone with") && (comment.body).includes("your reputation to be a little")) {
            console.log("Reputation Commented");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, "General Grievous. You\'re shorter than I expected.", source);
        }

        if ((comment.body).includes("saving your skin for the 10th time") || (comment.body).includes("saving your skin for the tenth time")) {
            console.log("Tenth Time Commented");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, "Ninth time", source);
        }

        if (comment.body === "Ninth time" || comment.body === "ninth time") {
            console.log("Ninth Time Commented");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, "That business on Cato Neimoidia doesn\'t... doesn\'t count", source);
        }

        if ((comment.body).includes("ou are on this") && (comment.body).includes("but we do not grant you the rank of")) {
            console.log("We Do Not Grant You The Rank Of Master Commented");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, "What? How can you do this? This is outrageous. It's unfair.", source);
        }

        if ((comment.body).includes("ow can you be on the council") && (comment.body).includes("and not be a master")) {
            console.log("How Can You Be On The Council Commented");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, "Take a seat, young Skywalker", source);
        }

        if ((comment.body).includes("his is outrageous") && (comment.body).includes("t\'s unfair") && ((comment.body).indexOf("ow")) === -1) {
            console.log("Unfair Commented");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, "How can you be on the council and not be a master?", source);
        }

        if ((comment.body).includes("hat about the droid") && (comment.body).includes("attack") && (comment.body).includes("on the")) {
            console.log("Droid Attack On The Wookies Commented");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, "It is critical we send an attack group there immediately", source);
        }

        if ((comment.body).includes("t is critical we send an attack group there immediately")) {
            console.log("Attack Group Commented");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, "He's right. It\'s a system we cannot afford to lose.", source);
        }

        if ((comment.body).includes("a system we cannot afford to lose")) {
            console.log("Attack Group Commented");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, "Go I will. Good relations with the Wookiees I have.", source);
        }

        if ((comment.body).includes("id you ever hear the tragedy") && (comment.body).indexOf("story") === -1) {
            console.log("Tragedy Of Darth Plagueis The Wise Commented");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, "I thought not. It's not a story the Jedi would tell you. It\'s a Sith legend.", source);
        }

        if ((comment.body).includes("think Chancellor Palpatine is a Sith lord") || (comment.body).includes("think chancellor palpatine is a sith lord")) {
            console.log("Palpatine Sith Lord Commented");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, "A Sith lord?", source);
        }

        if ((comment.body).includes("must say you're here sooner than expected")) {
            console.log("Sooner Than Expected Commented");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, "In the name of the Galactic Senate of the Republic... you're under arrest, Chancellor.", source);
        }

        if ((comment.body).includes("re you threatening me") && (comment.body).includes("aster")) {
            console.log("Threatening Me Commented");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, "The Senate will decide your fate", source);
        }

        if ((comment.body).includes("will decide your fate")) {
            console.log("Decide Your Fate Commented");
            console.log("reddit.com" + comment.permalink);
            let fate = (nlp((comment.body).replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, ""))).before('will').after("the").out('normal');
            if (nlp(fate).toTitleCase().out()) {
                commentReply(comment, "I am the " + nlp(fate).toTitleCase().out(), source);
            } else {
                commentReply(comment, "I am the Senate", source);
            }
        }

        if (comment.body === "Not. Yet." || comment.body === "not. yet.") {
            console.log("Not Yet Commented");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, "It\'s treason then", source);
        }

        if ((comment.body).includes("he Jedi are taking over") || (comment.body).includes("he jedi are taking over")) {
            console.log("Jedi Are Taking Over Commented");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, "The oppression of the Sith will never return", source);
        }

        if ((comment.body).includes("he oppression of the") && (comment.body).includes("will never return")) {
            console.log("Jedi Are Taking Over Commented");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, "You have lost", source);
        }

        if ((comment.body).includes("he Force is strong with you") || (comment.body).includes("he force is strong with you")) {
            console.log("Force Is Strong With You Commented");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, "A powerful Sith you will become", source);
        }

        if ((comment.body).includes("t\'s time for you to leave", source)) {
            console.log("Time For You To Leave Commented");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, "And so it is");
        }

        if ((comment.body).includes("he attempt on") && (comment.body).includes("has left") && (comment.body).includes("scarred and deformed")) {
            console.log("Scarred and Deformed Commented");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, "But I assure you. My resolve has never been stronger!", source);
        }

        if ((comment.body).includes("epublic will be reorganized") && (comment.body).includes("into the first") && (comment.body).includes("alactic") && (comment.body).includes("mpire")) {
            console.log("Reorganized Commented");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, "So this is how liberty dies. With thunderous applause.", source);
        }

        if ((comment.body).includes("all I want is your love")) {
            console.log("Your Love Commented");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, "Love won't save you, Padmé. Only my new powers can do that.", source);
        }

        if ((comment.body).includes("ou\'re breaking my heart")) {
            console.log("Breaking My Heart Commented");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, "You're going down a path I can\'t follow!", source);
        }

        if (comment.body === "Roger roger" || comment.body === "roger roger" || comment.body === "Roger, roger" || comment.body === "roger, roger" || comment.body === "Roger roger." ||
            comment.body === "Roger, roger." || comment.body === "Roger Roger" || comment.body === "Roger Roger.") {
            console.log("Roger Roger Commented");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, "Roger Roger", source);
        }

        if ((comment.body).includes("see through the lies of the") && (comment.body).indexOf("fear") === -1) {
            console.log("Fear The Lies Of The Jedi Commented");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, "I do not fear the dark side as you do!", source);
        }

        if (((nlp(comment.body)).normalize().toLowerCase().out()).includes("we are just clones sir. we are meant to be expendable")) {
            console.log("Expendable Commented");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, "Not to me", source);
        }

        if (((nlp(comment.body)).toLowerCase().out()).replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "") === "ewan mcgregor") {
            console.log("Ewan Commented");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, "You mean Jesus?", source);
        }

        if (((nlp(comment.body)).toLowerCase().out()).replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "") === "good soldiers follow orders") {
            console.log("Good Soldiers Commented");
            console.log("reddit.com" + comment.permalink);
            if (getRandomInt(3) === 0 || getRandomInt(3) === 1) {
                commentReply(comment, "Good soldiers follow orders", source);
            } else {
                commentReply(comment, "Kill the Jedi", source);
            }
        }

        if (((nlp(comment.body)).toLowerCase().out()).replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "") === "general roboti") {
            console.log("General Roboti Commented");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, "I am a bot one", source);
        }

        if (((nlp(comment.body)).toLowerCase().out()).replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "") === "general kenoc") {
            console.log("General KenOC Commented");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, "You are a rare one!", source);
        }

        if ((comment.body).includes("will pay for your insolence")) {
            console.log("Insolence Commented");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, "We are pirates, we don\'t even know what that means!", source);
        }

        if ((comment.body).includes("this is about the worst job in the droid army")) {
            console.log("Worst Job Commented");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, "And it just went into overtime...", source);
        }

        if (((comment.body).replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")).includes("are you doing I was going to study that")) {
            console.log("Going To Study That Commented");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, "Study the bottom of my boot", source);
        }

        if ((comment.body).includes("emind me why I\'m the one playing the part of the slave")) {
            console.log("Playing Part Of The Slave Commented");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, "I tried it once. I wasn\'t any good at it", source);
        }

        if (((nlp(comment.body)).toLowerCase().out('normal')).includes("the role of master comes easily to me")) {
            console.log("Role Of Master Commented");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, "Really? Well this time try to be convincing at it", source);
        }

        if (((nlp(comment.body)).toLowerCase().out('normal')).includes("insolence so I can concentrate")) {
            console.log("Role Of Master Commented");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, "Anakin. Control your insolence, the Count is concentrating", source);
        }

        if ((nlp((comment.body).replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, ""))).toLowerCase().out('normal') === "welcome to iego") {
            console.log("Welcome to Iego Commented");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, "Welcome to Iego", source);
        }

        if (((nlp(comment.body)).toLowerCase().out()).replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "") === "general misspelli" || ((nlp(comment.body)).toLowerCase().out()).replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "") === "general mispelli") {
            console.log("General Misspelli Commented");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, "You are a misspelled one!", source);
        }

        if (((nlp(comment.body)).normalize().toLowerCase().out()).replace(/[.,\/#!$%?\^&\*;:{}=\-_`~()]/g, "") === "he is a sith lord") {
            console.log("Sith Lord Commented");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, "Chancellor Palpatine, Sith lords are our speciality", source);
        }

        if ((nlp((comment.body).replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")).normalize().out('normal')).includes("ever made your way as far into the interior")) {
            console.log("Interior Commented");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, "Once or twice", source);
        }

        if ((nlp((comment.body).replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")).normalize().out('normal')).includes("ever made your way as far into the interior")) {
            console.log("Interior Commented");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, "Once or twice", source);
        }

        if (((nlp(comment.body)).normalize().toLowerCase().out()).replace(/[.,\/#!$%?\^&\*;:{}=\-_`~()]/g, "") === "i love democracy") {
            console.log("Democracy Commented");
            console.log("reddit.com" + comment.permalink);
            commentReply(comment, "I love the Republic", source);
        }

        var BF2 = [
            "FOR THE CHANCELLOR",
            "FOR THE REPUBLIC",
            "WATCH THOSE WRIST ROCKETS",
            "A COMMAND POST HAS BEEN LOST, BUT NOT THE BATTLE",
            "ALL HANDS TO BATTLE STATIONS. I REPEAT. ALL HANDS TO BATTLE STATIONS",
            "ANOTHER COMMAND POST FOR THE REPUBLIC",
            "COMMAND POST UNDER ATTACK",
            "ENEMY REINFORCEMENTS ARE DECREASING",
            "SAVE IT FOR THE ENEMY",
            "SUPER BATTLE DROID, TAKE EM DOWN",
            "THEY\'VE SENT IN THE SUPERS",
            "BATTLE DROIDS KNOCK EM DOWN"
        ];

        for (var z = 0; z < BF2.length; z++) {
            if ((comment.body).replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "") === (BF2[z]).replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")) {
                console.log("BF2 Quote Commented");
                console.log("reddit.com" + comment.permalink);
                let del = (BF2.indexOf((comment.body).replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")));
                let rand = getRandomInt(11);
                let arr = BF2;
                arr.splice(del, 1);
                commentReply(comment, arr[rand], source);
            }
        }

        if (nlp((comment.body).replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")).out('normal') === 'happy cake day') {
            console.log("Cake Day Commented!");
            console.log("reddit.com" + comment.permalink);
            let rand = getRandomInt(2);
            if (rand === 0) {
                commentReply(comment, 'It is critical we send birthday celebrations there immediately', source);
            } else {
                commentReply(comment, 'You are on this subreddit, and we grant you the rank of birthday boy', source);
            }
        }

        /*
                  var BSOW = [
                    "Game time started",
                    "Good kind of",
                    "I feel far from good",
                    "He is in my behind",
                    "Do you fuck on I",
                    "You two careful, he is a big",
                    "Mr. Speaker, we are for the big",
                    "Smelly boy",
                    "Friend you are crazy!",
                    "The geography that I stands compares you superior!"
                  ];

                  for (var i = 0; i < BSOW.length; i++) {
                      if ((comment.body).replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "") === (BSOW[i]).replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")) {
                          console.log("Backstrokes Of The West Quote Commented");
                          console.log("reddit.com" + comment.permalink);
                          let del = (BSOW.indexOf((comment.body).replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")));
                          let rand = getRandomInt(10);
                          let arr = BSOW;
                          arr.splice(del, 1);
                          commentReply(comment, arr[rand], source);
                      }
                  }
        */

        // Inbox specific responses
        if (source === 'inbox') {

            if (nlp((comment.body).replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")).out('normal') === 'good bot') {
              if (author === 'Good_Bot-Bot') {
                commentReply(comment, `General u/${comment.author}! You are a vote manipulating one.`, source);
              } else {
                  let rand = getRandomInt(22);
                  console.log("Good Bot Commented");
                  if (rand === 0) {
                      commentReply(comment, `General u/${comment.author}! You are a nice one.`, source);
                  } else if (rand === 1) {
                      commentReply(comment, `Chancellor u/${comment.author}, being a good bot is my speciality`, source);
                  } else if (rand === 2) {
                      commentReply(comment, "I\'ve been looking forward to this", source);
                  } else if (rand === 3) {
                      commentReply(comment, `The Force is strong with you, u/${comment.author}. A powerful redditor you will become.`, source);
                  } else if (rand === 4) {
                      commentReply(comment, "I\'m just a simple bot, trying to make my way on reddit", source);
                  } else if (rand === 5) {
                      commentReply(comment, `You are strong and wise, u/${comment.author}, and I am very proud of you.`, source);
                  } else if (rand === 6) {
                      commentReply(comment, "A surprise, to be sure, but a welcome one", source);
                  } else if (rand === 7) {
                      commentReply(comment, "Another happy landing", source);
                  } else if (rand === 8) {
                      commentReply(comment, "I love Democracy", source);
                  } else if (rand === 9) {
                      commentReply(comment, `From my point of view, u/${comment.author} is good!`, source);
                  } else if (rand === 10) {
                      commentReply(comment, `I love u/${comment.author}. I love the Republic.`, source);
                  } else if (rand === 11) {
                      commentReply(comment, "It\'s reason, then", source);
                  } else if (rand === 12) {
                      commentReply(comment, "I\'ll try upvoting, that\'s a good trick!", source);
                  } else if (rand === 13) {
                      commentReply(comment, "Are you an angel?", source);
                  } else if (rand === 14) {
                      commentReply(comment, "Your comment is very impressive, you must be very proud", source);
                  } else if (rand === 15) {
                      commentReply(comment, `Mr. u/${comment.author}, I am for the big.`, source);
                  } else if (rand === 16) {
                      commentReply(comment, "I am the Good Bot", source);
                  } else if (rand === 17) {
                      commentReply(comment, "I've become more powerful than any bot has dreamed of", source);
                  } else if (rand === 18) {
                      commentReply(comment, "I have brought peace, freedom, justice, and security to my new reddit!", source);
                  } else if (rand === 19) {
                      commentReply(comment, `Love won't save you, u/${comment.author}. Only my new powers can do that.`, source);
                  } else if (rand === 20) {
                      commentReply(comment, `You are my brother, u/${comment.author}! I love you.`, source);
                  } else {
                      commentReply(comment, "This is a happy moment. The happiest moment of my life.", source);
                  }
                }
            }

            if (nlp((comment.body).replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")).out('normal') === 'bad bot') {
                let rand = getRandomInt(8);
                console.log("Bad Bot Commented");
                if (rand === 0) {
                    commentReply(comment, `I think u/${comment.author} is a Sith Lord`, source);
                } else if (rand === 1) {
                    commentReply(comment, `u/${comment.author} is too dangerous to be kept alive!`, source);
                } else if (rand === 2) {
                    commentReply(comment, `I\'m sorry u/${comment.author}, it\'s time for you to leave`, source);
                } else if (rand === 4) {
                    commentReply(comment, `It\'s over u/${comment.author}! I have the high ground`, source);
                } else if (rand === 5) {
                    commentReply(comment, `From my point of view, u/${comment.author} is evil!`, source);
                } else if (rand === 6){
                    commentReply(comment, `[visible confusion]`, source);
                } else {
                    commentReply(comment, `In the name of the Galactic Senate of the Republic... you're under arrest, u/${comment.author}.`, source);
                }
            }

            if (nlp((comment.body).replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")).out('normal') === 'once or twice') {
                console.log("Once Or Twice Commented");
                console.log("reddit.com" + comment.permalink);
                commentReply(comment, "Recently?", source);
            }

            if (nlp((comment.body).replace(/[.,\/#!$%\^&\*?;:{}=\-_`~()]/g, "")).out('normal') === 'recently') {
                console.log("Recently Commented");
                console.log("reddit.com" + comment.permalink);
                commentReply(comment, "Possibly", source);
            }

        }
    }
    //}
}

// Remove extraneous function (from old version)
function commentReply(comment, res, source) {
  setTimeout(function() {
    queue.enqueue([comment, res, source]);
  }, 15000);
}

function queueLoop() {
  if (!queue.isEmpty()) {

    // com[0] is the comment
    // com[1] is the response
    // com[2] is the source (api or inbox)
    let com = queue.dequeue();
    let auth;
    if (com[2] === 'api') {
      let auth = JSON.parse(JSON.stringify(com[0].author)).name;
    } else {
      let auth = com[0].author;
    }

    con.query('SELECT * FROM comments WHERE commentid = "' + com[0].id + '"', function(err, result) {
        if (err) throw err;
        if (result.length === 0) {
            con.query('INSERT INTO comments (author, commentid) VALUES ("' + auth + '", "' + com[0].id + '")',
            function(err, result) {
                if (err) throw err;
                if (auth !== 'ThePrequelMemesBot') {
                  if (com[2] === 'api') {
                    com[0].reply(com[1]);
                  } else if (com[2] === 'inbox' || com[2] === 'server2') {
                    (r.getComment(com[0].id)).reply(com[1]);
                  }
                }
            });
        }
    });

  }

}
setInterval(queueLoop, 100);

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

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


// Repost Checker
/*
const submissionStream = client.SubmissionStream({
  subreddit: 'PrequelMemes',
  pollTime: 30000,
  results: 5
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
      post.reply("[General Reposti!](http://karmadecay.com/" + post.permalink + ") \n --- \n ^^^^I ^^^^am ^^^^a ^^^^bot, ^^^^message ^^^^me ^^^^if ^^^^I\'ve ^^^^accidentally ^^^^executed ^^^^order ^^^^66 ^^^^| [^^^^Source ^^^^Code](https://github.com/BigRedDoge/PrequelMemes-Bot)");
    }
  });
});*/
