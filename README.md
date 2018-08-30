# PrequelMemes-Bot
**r/PrequelMemes Quotes Bot**

This is a bot I made that responds to Prequel Meme quotes.  There is a javascript and a python version, but the python one still needs some bug fixing and is extremely outdated. hellothere2.js is for a second bot that only polls r/PrequelMemes rather instead of r/all.  This allows it to catch all the comments on r/PrequelMemes as reddit's rate limiting was causing the bot to miss many comments.  This gets the comments and then sends a POST to the main server.  It is then checked against a SQL database with all of the comments to make sure it doesn't send duplicate replies.

*Currently Disabled/Broken Features:*
It uses http://karmadecay.com/ to detect r/PrequelMemes reposts (Disabled at the moment). You can also comment !screenshot and it will take a screenshot and respond with an imgur link.

**Bot Account: https://www.reddit.com/user/ThePrequelMemesBot**

**Creator: https://www.reddit.com/user/The_Big_Red_Doge**

