# PrequelMemes-Bot
**r/PrequelMemes Quotes and General Reposti bot**

This is a bot I made that responds to Prequel Meme quotes.  I made a javascript and a python version, but the python one still needs some bug fixing. It uses http://karmadecay.com/ to detect r/PrequelMemes reposts (Disabled at the moment). You can also comment !screenshot and it will take a screenshot and respond with an imgur link. hellothere2.js is for a second bot that only polls r/PrequelMemes rather instead of r/all.  This allows it to catch all the comments on r/PrequelMemes as reddit's rate limiting was causing the bot to miss a lot.  This gets the comments and then sends a POST to the main server.  It is then checked against a mySQL database with all of the comments to make sure it hasn't been replied to already.

**Bot Account: https://www.reddit.com/user/ThePrequelMemesBot**

**Creator: https://www.reddit.com/user/The_Big_Red_Doge**
