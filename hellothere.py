import praw
import time
import random


def main():
    reddit = praw.Reddit(client_id='CLIENT_ID',
                         client_secret='CLIENT_SECRET',
                         user_agent='hellothere-bot-useragent',
                         username='REDDIT_USER',
                         password='REDDIT_PASS')

    subreddit = reddit.subreddit('all')

    for comment in subreddit.stream.comments():
        process_submission(comment)


def process_submission(comment):
    author = comment.author

    if (comment.body == 'Hello There' or comment.body == 'Hello there' or comment.body == 'hello there' or comment.body == 'Hello There!' or comment.body == 'Hello there!' or comment.body == 'hello there!'):
        print("General Kenobi Commented!")
        print("reddit.com" + comment.permalink)
        if (author != 'ThePrequelMemesBot'):
            time.sleep(15)
            comment.reply('General Kenobi!')

    if (comment.body == 'General Reposti!' or comment.body == 'General reposti!' or comment.body == 'general reposti!' or comment.body == 'General Reposti' or comment.body == 'General reposti' or comment.body == 'general reposti'):
        print("Reposti Commented!")
        print("reddit.com" + comment.permalink)
        if (random.randint(0,1) == 0):
            time.sleep(15)
            comment.reply('You are a bold one!')
        else:
            time.sleep(15)
            comment.reply('You are an old one!')

    if (comment.body == 'General Kenobi!' or comment.body == 'General kenobi!' or comment.body == 'general kenobi!' or comment.body == 'General Kenobi' or comment.body == 'General kenobi' or comment.body == 'general kenobi'):
        if (author != 'ThePrequelMemesBot'):
          print("Kenobi Commented!")
          print("reddit.com" + comment.permalink)
          time.sleep(15)
          comment.reply('You are a bold one!')


    if (comment.body == 'I am the Senate' or comment.body == 'I am the senate' or comment.body == 'i am the Senate'):
      print("Senate Commented!")
      print("reddit.com" + comment.permalink)
      if (author != 'ThePrequelMemesBot'):
          time.sleep(15)
          comment.reply("Not. Yet.")

    if ('will decide your fate' in comment.body):
      print("Senate Commented!")
      print("reddit.com" + comment.permalink)
      if (author != 'ThePrequelMemesBot'):
          time.sleep(15)
          comment.reply("I am the Senate")

    if (comment.body == 'My lord, is that legal?' or comment.body == 'my lord, is that legal?' or comment.body == 'My lord is that legal?' or comment.body == 'my lord is that legal?' or comment.body == 'Is that legal?' or comment.body == 'is that legal?' or comment.body == 'Is that, legal?' or comment.body == 'is that, legal?'):
        print("Legal Commented!")
        print("reddit.com" + comment.permalink)
        time.sleep(15)
        comment.reply("I will make it legal")

    if (comment.body == 'I sense a trap' or comment.body == 'i sense a trap' or comment.body == 'I sense a trap.' or comment.body == 'i sense a trap.'):
        print("Trap Commented")
        print("reddit.com" + comment.permalink)
        time.sleep(15)
        comment.reply("Next move?")

    if (comment.body == 'Is it possible to learn this power?' or comment.body == 'is it possible to learn this power?' or comment.body == 'Is it possible to learn this power' or comment.body == 'is it possible to learn this power'):
        print("Learn Power Commented")
        print("reddit.com" + comment.permalink)
        time.sleep(15)
        comment.reply("Not from a Jedi")

    if ('very impressive' in comment.body and 'must be very proud' in comment.body or 'very impressive,' in comment.body and 'must be very proud' in comment.body):
        print("Impressive Clones Commented")
        print("reddit.com" + comment.permalink)
        time.sleep(15)
        comment.reply("I\’m just a simple man, trying to make my way in the universe")


    if ("ll try" in comment.body and "a good trick" in comment.body):
        print("Spinning Commented")
        print("reddit.com" + comment.permalink)
        if (random.randint(0,1) == 0):
            time.sleep(15)
            comment.reply('Yippee!')
        else:
            time.sleep(15)
            comment.reply('This is where the fun begins')

    if ("anna buy some death sticks" in comment.body):
        print("Death Sticks Commented")
        print("reddit.com" + comment.permalink)
        time.sleep(15)
        comment.reply("You don\'t want to me sell death sticks")

    if ("just a simple" in comment.body and "trying to make my way in" in comment.body):
        print("Simple Man Commented")
        print("reddit.com" + comment.permalink)
        if (author != 'ThePrequelMemesBot'):
            time.sleep(15)
            comment.reply("Ever made your way as far into the interior as r/PrequelMemes?")

    if (comment.body == "I\'ve been looking forward to this" or comment.body == "i\'ve been looking forward to this" or comment.body == "I\'ve been looking forward to this." or comment.body == "i\'ve been looking forward to this." or comment.body == "Ive been looking forward to this" or comment.body == "Ive been looking forward to this." or comment.body == "ive been looking forward to this" or comment.body == "ive been looking forward to this."):
        print("Looking Foward to This Commented")
        print("reddit.com" + comment.permalink)
        time.sleep(15)
        comment.reply("My powers have doubled since the last time we met count")

    if ("doubled since the last time we met" in comment.body):
        print("Looking Foward to This Commented")
        print("reddit.com" + comment.permalink)
        if (author != 'ThePrequelMemesBot'):
            time.sleep(15)
            comment.reply("Good. Twice the pride, double the fall")

    if (comment.body == "Kill him, kill him now" or comment.body == "kill him, kill him now" or comment.body == "Kill him, kill him now." or comment.body == "kill him, kill him now." or comment.body == "Kill him now" or comment.body == "kill him now"):
        print("Kill him now Commented")
        print("reddit.com" + comment.permalink)
        time.sleep(15)
        comment.reply("I shouldn't")

    if (comment.body == "I shouldn\'t" or comment.body == "I shouldn\'t." or comment.body == "I shouldnt" or comment.body == "i shouldnt"):
        print("I Shouldn\'t Commented")
        print("reddit.com" + comment.permalink)
        time.sleep(15)
        comment.reply("Dewit")


    if (comment.body == '[Adas\'s law](http://starwars.wikia.com/wiki/Adas) is an Internet adage that asserts that "As an online discussion grows longer, the probability of a comparison involving General Kenobi approaches, that is, if an online discussion (regardless of topic or scope) goes on long enough, sooner or later someone will compare someone or something to General Kenobi or his deeds. " '):
        print("Adas\'s bot Commented")
        print("reddit.com" + comment.permalink)
        comment.reply("Hello fellow bot")

    if ("should have known the" in comment.body and "were plotting to take over" in comment.body):
        print("Plotting to Take Over Commented")
        print("reddit.com" + comment.permalink)
        time.sleep(15)
        comment.reply("Anakin, Chancellor Palpatine is evil!")

    if ("Execute order" in comment.body or "execute order" in comment.body):
        print("Execute Order Commented")
        print("reddit.com" + comment.permalink)
        time.sleep(15)
        comment.reply("It will be done, my lord")

    if (comment.body == "r/PrequelMemes" or comment.body == "/r/PrequelMemes" or comment.body == "r/prequelmemes" or comment.body == "/r/prequelmemes"):
        print("r/PrequelMemes Commented")
        print("reddit.com" + comment.permalink)
        time.sleep(15)
        comment.reply("Is where the fun begins!")

    if (comment.body == "r/SequelMemes" or comment.body == "/r/SequelMemes" or comment.body == "r/sequelmemes" or comment.body == "/r/sequelmemes"):
        print("r/PrequelMemes Commented")
        print("reddit.com" + comment.permalink)
        time.sleep(15)
        comment.reply("It's treason then")

    if ("ou turned her against me" in comment.body):
        print("Turned Her Commented")
        print("reddit.com" + comment.permalink)
        time.sleep(15)
        comment.reply("You have done that yourself")

    if ("ou have become the very thing you swore to destroy" in comment.body):
      print("Swore to Destroy Commented")
      print("reddit.com" + comment.permalink)
      time.sleep(15)
      comment.reply("Don't lecture me, Obi-Wan!")

    if ("have brought peace, freedom, justice, and security to my new empire" in comment.body):
      print("My New Empire Commented")
      print("reddit.com" + comment.permalink)
      time.sleep(15)
      comment.reply("Your new empire?")

    if ("our new empire" in comment.body):
      print("My New Empire Commented")
      print("reddit.com" + comment.permalink)
      if (author != 'ThePrequelMemesBot'):
        time.sleep(15)
        comment.reply("Don\'t make me kill you")

    if ("on\'t make me kill you" in comment.body or "ont make me kill you" in comment.body):
      print("Don\'t Make Me Kill You Commented")
      print("reddit.com" + comment.permalink)
      if (author != 'ThePrequelMemesBot'):
        time.sleep(15)
        comment.reply("Anakin, my allegiance is to the Republic, to Democracy!")

    if ("my allegiance is to the" in comment.body):
      print("Allegiance Commented")
      print("reddit.com" + comment.permalink)
      if (author != 'ThePrequelMemesBot'):
        time.sleep(15)
        comment.reply("If you are not with me, then you are my enemy")

    if ("f you are not with me" in comment.body and "then you are my enemy" in comment.body):
      print("My Enemy Commented")
      print("reddit.com" + comment.permalink)
      if (author != 'ThePrequelMemesBot'):
        time.sleep(15)
        comment.reply("Only a Sith deals in absolutes")

    if ("nly a" in comment.body and "deals in absolutes" in comment.body):
      print("Absolutes Commented")
      print("reddit.com" + comment.permalink)
      if (author != 'ThePrequelMemesBot'):
        time.sleep(15)
        comment.reply("I will do what I must")

    if ("will do what I must" in comment.body or "will do what i must" in comment.body):
      print("I Will Do What I Must Commented")
      print("reddit.com" + comment.permalink)
      if (author != 'ThePrequelMemesBot'):
        time.sleep(15)
        comment.reply("You will try")

    if ("rom my point of view" in comment.body and "the" in comment.body and "are evil" in comment.body):
      print("My Point of View Commented")
      print("reddit.com" + comment.permalink)
      if (author != 'ThePrequelMemesBot'):
        time.sleep(15)
        comment.reply("Well then you are lost!")

    if ("I have the high ground" in comment.body or "i have the high ground" in comment.body):
      print("High Ground Commented")
      print("reddit.com" + comment.permalink)
      if (author != 'ThePrequelMemesBot'):
        time.sleep(15)
        comment.reply("You underestimate my power!")

    if ("ou underestimate my power" in comment.body):
      print("Underestimate My Power Commented")
      print("reddit.com" + comment.permalink)
      if (author != 'ThePrequelMemesBot'):
        time.sleep(15)
        comment.reply("Don't try it")

    if (comment.body == "I hate you" or comment.body == "I hate you!"):
      print("I hate you Commented")
      print("reddit.com" + comment.permalink)
      if (author != 'ThePrequelMemesBot'):
        time.sleep(15)
        comment.reply("You were my brother, Anakin! I loved you")

    if (comment.body == "He's a Sith lord" or comment.body == "he's a Sith lord" or comment.body == "He's a Sith lord." or comment.body == "he's a Sith lord." or comment.body == "He's a sith lord" or comment.body == "He's a sith lord." or comment.body == "he's a sith lord" or comment.body == "he's a sith lord." or comment.body == "Hes a Sith lord" or comment.body == "hes a Sith lord" or comment.body == "Hes a sith lord" or comment.body == "hes a sith lord"):
      print("Sith Lord Commented")
      print("reddit.com" + comment.permalink)
      if (author != 'ThePrequelMemesBot'):
        time.sleep(15)
        comment.reply("Chancellor Palpatine, Sith lords are our speciality")

    if ("e was too dangerous to be kept alive." in comment.body):
      print("Too Dangerous Commented")
      print("reddit.com" + comment.permalink)
      if (author != 'ThePrequelMemesBot'):
        time.sleep(15)
        comment.reply("Yes, but he was an unarmed prisoner. I shouldn\'t have done that. It\'s not the Jedi way.")

    if ("s not the Jedi way" in comment.body or "s not the jedi way" in comment.body):
      print("Not the Jedi Way Commented")
      print("reddit.com" + comment.permalink)
      if (author != 'ThePrequelMemesBot'):
        time.sleep(15)
        comment.reply("It is only natural. He cut off your arm, and you wanted revenge.")

    if ("eave him, or we\'ll never make it" in comment.body or "eave him or we\'ll never make it" in comment.body):
      print("Leave Him Commented")
      print("reddit.com" + comment.permalink)
      if (author != 'ThePrequelMemesBot'):
        time.sleep(15)
        comment.reply("His fate will be the same as ours")

    if ("ow did this happen" in comment.body and "e\'re smarter than this" in comment.body):
      print("Smarter Than This Commented")
      print("reddit.com" + comment.permalink)
      if (author != 'ThePrequelMemesBot'):
        time.sleep(15)
        comment.reply("Apparently not")

    if ("was expecting someone with" in comment.body and "your reputation to be a little" in comment.body):
      print("Reputation Commented")
      print("reddit.com" + comment.permalink)
      if (author != 'ThePrequelMemesBot'):
        time.sleep(15)
        comment.reply("General Grievous. You\'re shorter than I expected.")

    if ("saving your skin for the 10th time" in comment.body or "saving your skin for the tenth time" in comment.body):
      print("Tenth Time Commented")
      print("reddit.com" + comment.permalink)
      if (author != 'ThePrequelMemesBot'):
        time.sleep(15)
        comment.reply("Ninth time")

    if (comment.body == "Ninth time" or comment.body == "ninth time"):
      print("Ninth Time Commented")
      print("reddit.com" + comment.permalink)
      if (author != 'ThePrequelMemesBot'):
        time.sleep(15)
        comment.reply("That business on Cato Neimoidia doesn\'t... doesn\'t count")

    if ("ou are on this" in comment.body and "but we do not grant you the rank of" in comment.body):
      print("We Do Not Grant You The Rank Of Master Commented")
      print("reddit.com" + comment.permalink)
      if (author != 'ThePrequelMemesBot'):
        time.sleep(15)
        comment.reply("What? How can you do this? This is outrageous. It's unfair.")

    if ("ow can you be on the council" in comment.body and "and not be a" in comment.body):
      print("How Can You Be On The Council Commented")
      print("reddit.com" + comment.permalink)
      if (author != 'ThePrequelMemesBot'):
        time.sleep(15)
        comment.reply("Take a seat, young Skywalker")

    if ("his is outrageous" in comment.body and "t\'s unfair" in comment.body and "ow can you be" not in comment.body):
      print("Unfair Commented")
      print("reddit.com" + comment.permalink)
      if (author != 'ThePrequelMemesBot'):
        time.sleep(15)
        comment.reply("How can you be on the council and not be a master?")

    if ("hat about the droid" in comment.body and "attack" in comment.body and "on the" in comment.body):
      print("Droid Attack On The Wookies Commented")
      print("reddit.com" + comment.permalink)
      if (author != 'ThePrequelMemesBot'):
        time.sleep(15)
        comment.reply("It is critical we send an attack group there immediately")

    if ("t is critical we send an attack group there immediately" in comment.body):
      print("Attack Group Commented")
      print("reddit.com" + comment.permalink)
      if (author != 'ThePrequelMemesBot'):
        time.sleep(15)
        comment.reply("He's right. It\'s a system we cannot afford to lose.")

    if ("a system we cannot afford to lose" in comment.body):
      print("Attack Group Commented")
      print("reddit.com" + comment.permalink)
      if (author != 'ThePrequelMemesBot'):
        time.sleep(15)
        comment.reply("Go I will. Good relations with the Wookiees I have.")

    if ("id you ever hear the tragedy" in comment.body and "thought not" not in comment.body):
      print("Tragedy Of Darth Plagueis The Wise Commented")
      print("reddit.com" + comment.permalink)
      if (author != 'ThePrequelMemesBot'):
        time.sleep(15)
        comment.reply("I thought not. It's not a story the Jedi would tell you. It\'s a Sith legend.")

    if ("think Chancellor Palpatine is a Sith lord" in comment.body or "think chancellor palpatine is a sith lord" in comment.body):
      print("Palpatine Sith Lord Commented")
      print("reddit.com" + comment.permalink)
      if (author != 'ThePrequelMemesBot'):
        time.sleep(15)
        comment.reply("A Sith lord?")

    if ("must say you're here sooner than expected" in comment.body):
      print("Sooner Than Expected Commented")
      print("reddit.com" + comment.permalink)
      if (author != 'ThePrequelMemesBot'):
        time.sleep(15)
        comment.reply("In the name of the Galactic Senate of the Republic... you're under arrest, Chancellor.")

    if ("re you threatening me" in comment.body and "aster" in comment.body):
      print("Threatening Me Commented")
      print("reddit.com" + comment.permalink)
      if (author != 'ThePrequelMemesBot'):
        time.sleep(15)
        comment.reply("The Senate will decide your fate")

    if ("will decide your fate" in comment.body):
      print("Decide Your Fate Commented")
      print("reddit.com" + comment.permalink)
      if (author != 'ThePrequelMemesBot'):
        time.sleep(15)
        comment.reply("I am the Senate")

    if ("he Jedi are taking over" in comment.body or "he jedi are taking over" in comment.body):
      print("Jedi Are Taking Over Commented")
      print("reddit.com" + comment.permalink)
      if (author != 'ThePrequelMemesBot'):
        time.sleep(15)
        comment.reply("The oppression of the Sith will never return")

    if ("he oppression of the" in comment.body and "will never return" in comment.body):
      print("Jedi Are Taking Over Commented")
      print("reddit.com" + comment.permalink)
      if (author != 'ThePrequelMemesBot'):
        time.sleep(15)
        comment.reply("You have lost")

    if ("e's too dangerous to be left alive" in comment.body):
      print("Too Dangerous To Be Left Alive Commented")
      print("reddit.com" + comment.permalink)
      if (author != 'ThePrequelMemesBot'):
        time.sleep(15)
        comment.reply("I'm too weak. Don't kill me. Please.")

    if ("he Force is strong with you" in comment.body or "he force is strong with you" in comment.body):
      print("Force Is Strong With You Commented")
      print("reddit.com" + comment.permalink)
      if (author != 'ThePrequelMemesBot'):
        time.sleep(15)
        comment.reply("A powerful Sith you will become")

    if ("t\'s time for you to leave" in comment.body):
      print("Time For You To Leave Commented")
      print("reddit.com" + comment.permalink)
      if (author != 'ThePrequelMemesBot'):
        time.sleep(15)
        comment.reply("And so it is")

    if ("he attempt on" in comment.body and "has left" in comment.body and "scarred and deformed" in comment.body):
      print("Scarred and Deformed Commented")
      print("reddit.com" + comment.permalink)
      if (author != 'ThePrequelMemesBot'):
        time.sleep(15)
        comment.reply("But I assure you. My resolve has never been stronger!")

    if ("epublic will be reorganized" in comment.body and "into the first" in comment.body and "alactic" in comment.body and "mpire" in comment.body):
      print("Reorganized Commented")
      print("reddit.com" + comment.permalink)
      if (author != 'ThePrequelMemesBot'):
        time.sleep(15)
        comment.reply("So this is how liberty dies. With thunderous applause.")

    if ("all I want is your love" in comment.body):
      print("Your Love Commented")
      print("reddit.com" + comment.permalink)
      if (author != 'ThePrequelMemesBot'):
        time.sleep(15)
        comment.reply("Love won't save you, Padmé. Only my new powers can do that.")

    if ("ou\'re breaking my heart" in comment.body):
      print("Breaking My Heart Commented")
      print("reddit.com" + comment.permalink)
      if (author != 'ThePrequelMemesBot'):
        time.sleep(15)
        comment.reply("You're going down a path I can\'t follow!")

    if ("u/ThePrequelMemesBot" in comment.body or "/u/ThePrequelMemesBot" in comment.body):
      print("u/ThePrequelMemesBot Commented")
      print("reddit.com" + comment.permalink)
      if (author != 'ThePrequelMemesBot'):
        comment.reply("Hello there!")

    if (comment.body == "Roger roger" or comment.body == "roger roger" or comment.body == "Roger, roger" or comment.body == "roger, roger" or comment.body == "Roger roger." or comment.body == "Roger, roger." or comment.body == "Roger Roger" or comment.body == "Roger Roger."):
      print("Roger Roger Commented")
      print("reddit.com" + comment.permalink)
      if (author != 'ThePrequelMemesBot'):
        time.sleep(15)
        comment.reply("Roger Roger")

    if ("see through the lies of the" in comment.body):
      print("Fear The Lies Of The Jedi Commented")
      print("reddit.com" + comment.permalink)
      if (author != 'ThePrequelMemesBot'):
        comment.reply("I do not fear the dark side as you do!")


if __name__ == '__main__':
    main()
