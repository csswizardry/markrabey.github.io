---
layout: post
title: Quote Tweets with a Node.js Twitter Bot
date: 2014-06-10 09:48:44.000000000 -04:00
redirect_from: /2014/06/10/quote-tweets-with-a-node-js-twitter-bot/
---
A short time ago I wrote about [how to build a Twitter bot with Node.js](/blog/2014/05/09/build-a-twitter-bot-with-node-js/). Making use of the Twitter API, I have a bot that searches for Tweets with either #CFML or #ColdFusion, then retweets the most recent one. Pretty simple, and maybe not even 100% practical, but it's all I was looking to do. A reader asked me if it was possible to Quote Tweet rather than Retweet.

___

## What's the difference?
Nothing really. They're basically just 2 different ways to accomplish the same thing: share someone else's Tweet with your followers. The technical difference is, when retweeting, the original Tweet is left unmodified, with the same ID number, and simply shared with your followers, while quote Tweets are *copying* the text of a Tweet into a *new* Tweet that your followers see as being from *you*. Quote Tweets are a nice way to add your own comment to a Tweet, but can have issues since you're still limited to 140 characters.

___

## How do we do it with the API?
Strictly speaking, you can't. There is not a direct API method for quote Tweets. You can, however, just build your own body to update your own status. From the original [bot I wrote](/blog/2014/05/09/build-a-twitter-bot-with-node-js/), the code looked like this:

{% highlight javascript %}
var Twit = require('twit');

var T = new Twit({
    consumer_key: '...'
    , consumer_secret: '...'
    , access_token: '...'
    , access_token_secret: '...'
});

function retweetRecent() {
    T.get('search/tweets', {q: "#coldfusion OR #cfml", result_type: "recent"}, function (err, data,response) {
        if (!err) {
            var retweetId = data.statuses[0].id_str;
            T.post('statuses/retweet/' + retweetId, { }, function (err, response) {
                if (response) {
                    console.log('Retweeted Tweet ID: ' + retweetId);
                }
                if (err) {
                    console.log('Retweet Error: ', err);
                }
            });
        } else {
            console.log('Search Error: ', err);
        }
    });
}
retweetRecent();
setInterval(retweetRecent, 1800000);
{% endhighlight %}

I'm not going to go into details on what everything is doing, for that read the [original post](/blog/2014/05/09/build-a-twitter-bot-with-node-js/). We need to look at the code inside of `if(!err) {...}`.


{% highlight javascript %}
var retweetId = data.statuses[0].id_str;
T.post('statuses/retweet/' + retweetId, { }, function (err, response) {
    if (response) {
        console.log('Retweeted Tweet ID: ' + retweetId);
    }
    if (err) {
        console.log('Retweet Error: ', err);
    }
});
{% endhighlight %}

I changed a few things. First I removed `var retweetId = data.statuses[0].id_str;`. I don't need this the same way, but I would like the entire Tweet object I'm working with in a variable, so I don't need to keep referencing `data.statuses[0]`. Then, using that Tweet object, I built what will be the body of my status update:

{% highlight javascript %}
var tweet = data.statuses[0];
var retweetBody = 'RT @' + tweet.user.screen_name + ' ' + tweet.text;
{% endhighlight %}


Then, I changed the call to `T.post()` to use `statuses/update`, and pass in `retweetBody`. The callback function is basically the same, except I changed the working of the messages. Now the entire code looks like this:

{% highlight javascript %}
var Twit = require('twit');

var T = new Twit({
    consumer_key: '...'
    , consumer_secret: '...'
    , access_token: '...'
    , access_token_secret: '...'
});

function retweetRecent() {
    T.get('search/tweets', {q: "#coldfusion OR #cfml", result_type: "recent"}, function (err, data,response) {
        if (!err) {
            var tweet = data.statuses[0];
            var retweetBody = 'RT @' + tweet.user.screen_name + ' ' + tweet.text;
            T.post('statuses/update',{status:retweetBody}, function (err,response) {
                if (response) {
                    console.log('Quote Tweeted Tweet ID: ' + tweet.id_str);
                }
                if (err) {
                    console.log('Quote Tweet Error: ', err);
                }
            });
        } else {
            console.log('Search Error: ', err);
        }
    });
}

retweetRecent();
setInterval(retweetRecent, 1800000);
{% endhighlight %}


I actually created a second file for this, and have updated the [repository](https://github.com/MarkRabey/node-twitter-bot"target="_blank) with both files. To run the bot using Retweets, I can run `node retweet-bot`, or use Quote Tweets with `node quote-bot`.

<blockquote class="twitter-tweet" lang="en" align="center"><p>RT <a href="https://twitter.com/RashmiRnSethy">@RashmiRnSethy</a> How Can <a href="https://twitter.com/search?q=%23Coldfusion&amp;src=hash">#Coldfusion</a> Builder 3 Give You A Better Experience With Coldfusion 11? <a href="http://t.co/O8MJv40nkw">http://t.co/O8MJv40nkw</a></p>&mdash; CFML Bot (@CFMLBot) <a href="https://twitter.com/CFMLBot/statuses/476352651383554048">June 10, 2014</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

___

## LIMITED!
You are still limited to 140 characters! If resulting quote is longer than 140 characters, you will get an error. It's not a big deal, the next one might work. The bot doesn't stop running or anything like that, it just doesn't Tweet anything that time around. Alternatively, you could write it to do a regular Retweet instead if the character count is too long.
