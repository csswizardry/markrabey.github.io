---
layout: post
title: Build a Twitter Bot With Node.js
date: 2014-05-09 16:15:18.000000000 -04:00
redirect_from: /2014/05/09/build-a-twitter-bot-with-node-js/
tags: node.js, javascript, twitter
---
I was really hoping to do this as a learning experiment. I guess what I did learn, is that doing simple things with the Twitter API is actually ***really*** easy.
___

## What Are We Building?
What we're going to build here is a simple Twitter bot that send a query to the Twitter API, receives a response containing the results of our search, and then retweets the most recent tweet returned. In my case, I set my bot to search for tweets containing either `#coldfusion` or `#cfml`. Why these tags? Well, I use ColdFusion at work, so this is a community I am actually part of. I also find it kind of ironic to use Node.js to retweet a totally unrelated language.

___

## Getting Started
The first, and arguably most difficult, part of the process is setting up a Twitter Application for your bot. I highly recommend you create a new Twitter account, as bot activity often gets banned from Twitter. You likely don't want that happening to your personal account. So, head on over to [Twitter](https://twitter.com/) and set up a new account. Quick tip, add a mobile phone number to your account. It is a requirement in order for your app to be able to post to Twitter, so without that, you won't be retweeting anything.

After your new account is activated, go to the [Twitter Developer Center](https://dev.twitter.com/), sign in and create an app. Make sure you set the permissions for the app to 'Read and Write', not the default of 'Read-Only'. Again, failure to do this means you won't be Tweeting anything.

Once you're app is created, go to the 'API' Tab in the app settings:
![API Tab](/content/images/blog/2014/May/Screen-Shot-2014-05-09-at-11-11-01-AM.png)
Toward the bottom of this page, you should have a button that says 'Generate Access Token' - click that. You have to wait a bit before you actually have the token, but that's ok, we can write the code while we wait.

___

## The Code
To interact with the Twitter API, we'll be using a Node.js library called [Twit](https://github.com/ttezel/twit"target="_blank). Create a folder for your project code, then in your Terminal window, navigate to that folder and type `npm install twit`. Now, create a file called `bot.js`, and open that in your [favourite text editor](http://www.sublimetext.com"target="_blank). At the very top of the file, we need to include Twit:

{% highlight javascript %}
var Twit = require('twit');
{% endhighlight %}

Then we create an instance of the Twit client, using the simple example they have on [GitHub](https://github.com/ttezel/twit"target="_blank):

{% highlight javascript %}
var T = new Twit({
	consumer_key: '...'
	, consumer_secret: '...'
	, access_token: '...'
	, access_token_secret: '...'
});
{% endhighlight %}

Don't worry if your tokens still haven't generated yet, we still have some time. The next thing we need to do, is write the function that will search Twitter, and retweet the most recent Tweet returned:

{% highlight javascript %}
function retweetRecent() {
	T.get('search/tweets', {q: "#coldfusion OR #cfml", result_type: "recent"}, function (err, data, response) {
		...
	});
}
{% endhighlight %}


First, this uses the `get()` method in Twit. The first argument is API call to be made, in our case `search/tweets`. The second is the settings for the call. `q` is required, and is the query to be performed. You can search hashtags, text, users, there are a lot of options for what you can search on. Take a look at the [Twitter Search](https://twitter.com/search-home) for more details. `result_type` is optional, we want the most recent Tweets, but you could also search for popular Tweets. The third argument is a callback function to fire when the search is complete. Inside of this we will add the code to either retweet the most recent tweet matching our search, or show an error if that's what we encounter. We can now replace `...` with:

{% highlight javascript %}
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
{% endhighlight %}

This should be pretty straight forward. First, I make sure there wasn't an error. If we're error free, I get the id of the most recent tweets, then call `post()`, and tell that function what I'm doing. In this case I want to call the Twitter method `statuses/retweet` and include the id of the tweet. I have a callback function that simply outputs to the console a message that describes what happened.

Finally, we call the function so that the bot Tweets as soon as it is run, then we set a timer to call the function at a set interval, in milliseconds. I went with every half hour:

{% highlight javascript %}
retweetRecent();
setInterval(retweetRecent, 1800000);
{% endhighlight %}

That's all there was to it. There entire code is 29 lines (including breaks):

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

You can check out my bot on [Twitter](http://twitter.com/CFMLBot"target="_blank), and you can find the code on [GitHub](https://github.com/MarkRabey/node-twitter-bot"target="_blank).

There are things available to me that would allow me to quote tweets, reply to tweets, generate random tweets, listen to streams, etc. This bot might evolve into something more complex, but for now this is all there is to it!
