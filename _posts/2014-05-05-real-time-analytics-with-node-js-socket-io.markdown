---
layout: post
title: Real Time Analytics with Node.js & Socket.io
date: 2014-05-05 16:44:36.000000000 -04:00
redirect_from: /2014/05/05/real-time-analytics-with-node-js-socket-io/
---
When first learning about Web Sockets (something I'm still working on), I built a [simple chat app](/blog/2014/04/21/simple-chat-app/). The end of last week I picked up a copy of *Node.js in Action*. I haven't worked through it yet, but in leafing through it I found that chapter one is...***Building a Multi-room Chat***. Damn. So my great learning experience was outdone in chapter one. I knew what I did was super simple, but chapter one? My idea behind the chat app was simply having a web page and the server talk back and forth in real time. It was really the simplest example I could think of, and I stand by that. Now, however, I want more. It occurred to me that while any page can connect to the server and send messages, that page doesn't have to listen for a response. One page could listen for all responses, any not even send anything, just listen. What a great basis for real time analytics!

___

## The Server
The server needs to serve some static pages. For this, I used [Express](http://expressjs.com"target="_blank) with [Jade](http://jade-lang.com"target="_blank) templates. Express takes care of a lot of the basic routing for me. Making it really quick and easy to generate the basic pages I need for this project. Jade is a templating engine making it really simple to add default layouts, perfect for working with JavaScript that is the same across many pages. I'm actually not doing that yet. I could have done all this with just a few HTML pages, but I intend on expanding this project at some point, so I may as well use what I know I'll want to anyway. I also like the clean URLs. The initial setup is very similar to that of my [simple chat app](/blog/2014/04/21/simple-chat-app/).

Assuming you've already [installed Node.js](https://github.com/joyent/node/wiki/installation"target="_blank), create a folder for your project, and navigate to that folder.

`mkdir realtime-analytics && cd realtime-analytics`

Then install the dependencies we'll use for this project (Express, Jade, & Socket.io)

`npm install express jade socket.io`

Next we'll create the file `server.js` and add the code needed to serve our pages.

First, we include the necessary packages, and create an instance of an HTTP server:

{% highlight javascript %}
var express = require('express')
  , app = express()
  , http = require('http')
  , server = http.createServer(app)
  , jade = require('jade')
  , io = require('socket.io').listen(server);
{% endhighlight %}


Next, we add some simple configuration for Jade. This essentially just tells Express where to find the templates, as well as creates a `public` folder for storing client-side CSS and JavaScript files.

{% highlight javascript %}
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'));
{% endhighlight %}


Now, we need to create the folders `views` and `public`. Then, we'll tell Express to serve 3 views for us: `index.jade`,`about.jade` & `stats.jade`. The first 2 will be the pages that send data to the server, the 3<sup>rd</sup> will only listen to the server, and display data. We also tell the server to start listening on port 3000. You can choose another port if you prefer.


{% highlight javascript %}
app.get('/', function(req, res){
  res.render('index.jade');
});
app.get('/about', function(req, res){
  res.render('about.jade');
});
app.get('/stats', function(req, res){
  res.render('stats.jade');
});

server.listen(3000);
{% endhighlight %}


___

## Create the User Pages
At this point I don't really care if my pages look nice, so I'm not going to worry about that at all right now.

First, inside the `views` folder, create `index.jade` and add some basic code:

{% highlight jade %}
doctype html
html
	head
		title Index | Sample Real-Time Analytics
        script(src='https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js')
		script(src="/socket.io/socket.io.js")
		script(src="user-script.js")
	body
		header
			h1 Index
		section
			p This is the index page. Take a look at the <a href="/about">about</a> page.
{% endhighlight %}


Then create the nearly identical `about.jade`:

{% highlight jade %}
doctype html
html
	head
		title About | Sample Real-Time Analytics
		script(src='https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js')
		script(src="/socket.io/socket.io.js")
		script(src="user-script.js")
	body
		header
			h1 About
		section
			p This is the about page. Take a look at the <a href="/">index</a> page.
{% endhighlight %}

Those are the 2 pages that ideally would have a common layout, but for the purposes of this post, that's not needed. What is important to note, is regarding the 2 JavaScript files included. First, we have `/socket.io/socket.io.js` - this file you won't actually see in your public folder at all. The Socket.io package we included will serve this file for us. The second file, `user-script.js` we will need to create inside our `public` folder. I named it this with the idea that `index.jade` and `about.jade` are pages a 'user' would hit. Before creating `stats.jade`, we'll add the code needed to listen to the 'user' pages.

___

## Configuring Socket.io
We already included the Socket.io package in our project, now we have to configure it. First, we'll have the server listen for connections. Above `server.listen(3000)`, add:

{% highlight javascript %}
io.sockets.on('connection', function(socket) {
  socket.on('message', function (message) {
      console.log('Received message: ' + message);
      io.sockets.emit('pageview', { 'url': message });
  });
});
{% endhighlight %}

This does a couple things. First, `io.sockets.on('connection', function(socket)...` is fired every time a client connects to the server. A socket is created for communicating with the client. All other events need to happen within this one. Next, we added `socket.on('message', ...`. This has the socket listening for an event triggered by a client called `message`. When that event is fired (a message is received) the code inside is executed. In this case, we will log the message to our console, then emit an event for our stats page to listen to.

You should notice that in the functions are called on either `io.sockets` or `socket`. The difference is `io.sockets` listens and broadcasts to **all** sockets, whereas `socket` talks only to that one single socket or client.

Believe it or not, that's all our sever has to do. In your Terminal window, you can type `node server` and you should see some output from Socket.io:
![Server Running](/content/images/blog/2014/May/Screen-Shot-2014-05-05-at-10-01-53-AM.png)

As you hit the pages, you'll see some additional output that simply says that `/socket.io/socket.io.js` has been served. At this point, we won't see our page views logged in the console. We told the server to listen for an event called `message`, but haven't told our pages to send that yet. To do that, create and open a file in the `public` folder called `user-script.js`, and add this code:

{% highlight javascript %}
var socket = io.connect();
socket.on('connect', function() {
  socket.send(window.location);
});
{% endhighlight %}

That's all! First, we get our socket with `io.connect()`. As soon as this is created, the `connect` event is triggered, inside of which we call `socket.send()` and pass our URL to the server. Anything passed to the server with the `.send()` function is received by the server as a `message` event.

Now, if you refresh one of your pages, you'll see a lot more data being logged in the console:
![Messages Logged](/content/images/blog/2014/May/Screen-Shot-2014-05-05-at-10-11-33-AM.png)

This is showing us all the communication between the client and the server, as well as `Received message: ...` which we told our server to log.

Now it's time to create `stats.jade` so we can see what's coming in. This needs a little more than our other 2 pages, only because we need some elements to target with JavaScript for adding data.

{% highlight jade %}
doctype html
html
	head
		title Stats | Sample Real-Time Analytics
		script(src='https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js')
		script(src="/socket.io/socket.io.js")
		script(src="stat-script.js")
	body
		header
			h1 Stats
		section
			ul#pageviews
{% endhighlight %}

Then, create and open `public/stat-script.js` and add this code:

{% highlight javascript %}
var socket = io.connect();
socket.on('pageview', function(message) {
  $('#pageviews').append('<li>' + message.url + '</li>');
});
{% endhighlight %}

Again, we connect to our server with `io.connect()`, but this time, we're only targeting the `pageview` event. This is the event we told our server to emit after receiving a message from the client. All we're doing is capturing the data from the event, and appending the URL to a list. I know it's not pretty, but still neat. Now, open two browser windows. The first pointed to `http://localhost:3000/stats`, and the second `http://localhost:3000`, you can see this in action. Click on the 'about', click back to 'index', you'll see these adding to the list as you click, without the stats page reloading.

We can easily pass along, and display other data as well. Such as IP address, the time of the connection, and the total number of connections. This is all data that can be easily retrieved from the socket objects. In `server.js` we're going to modify `io.sockets.emit()` to look like this:

{% highlight javascript %}
io.sockets.on('connection', function(socket) {
  socket.on('message', function (message) {
      console.log('Received message: ' + message);
      io.sockets.emit('pageview', {
        'connections':Object.keys(io.connected).length-1,
        'url': message.url,
        'ip':socket.handshake.address.address,
        'time':new Date()
      });
  });
});
{% endhighlight %}

For the number of connections, we subtract one, as our `stats` window is actually counted in that. Now that we're passing more data, we need elements on `stats.jade` to display these in. The IP and time-stamp we can add to our existing list item, but the connection count needs an element to display in. Update `stats.jade` to look like this:

{% highlight jade %}
doctype html
html
	head
		title Stats | Sample Real-Time Analytics
		script(src='https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js')
		script(src="/socket.io/socket.io.js")
		script(src="stat-script.js")
	body
		header
			h1 Stats
		section
			ul#pageviews
		section
			h2 Connections
			#connections
{% endhighlight %}

Then, change `stat-script.js` to display the additional data:

{% highlight javascript %}
var socket = io.connect();
socket.on('pageview', function(message) {
  $('#pageviews').append('<li><strong>URL:</strong> ' + message.url +
  ', <strong>IP:</strong> ' + message.ip +
  ', <strong>Time:</strong> ' + message.time + '</li>');
  $('#connections').text(message.connections);
});
{% endhighlight %}


This is still a very crude example. Ideally the page views would be in a table, or something nicer than what I've done, but you get the idea. One thing I really *do* want to add at this point is a display of the current connections when the stats page is loaded. As it is right now, I have to wait for a hit to a page in order to be sent this data. Honestly, the easiest way I can think of to do this is simply emit the `pageview` event on connect. The only thing listen to it is the stats page, so why not? Inside of `io.sockets.on('connection'...)` add:

{% highlight javascript %}
io.sockets.emit('pageview', {'connections':Object.keys(io.connected).length - 1});
{% endhighlight %}

If you restart your server and hit your stat page again, you'll see the connections right away. But you'll also see a bunch of `undefined` values in our page view list. So we need to update `stat-script.js` a little:

{% highlight javascript %}
var socket = io.connect();
socket.on('pageview', function(message) {
  if (message.url) {
    $('#pageviews').append('<li><strong>URL:</strong> ' + message.url +
    ', <strong>IP:</strong> ' + message.ip +
    ', <strong>Time:</strong> ' + message.time + '</li>');
  }
  $('#connections').text(message.connections);
});
{% endhighlight %}

This just checks that a URL was passed in `message`. If not then it won't try to update the list of page views.

The project is now up on [GitHub](https://github.com/MarkRabey/real-time-analytics"target="_blank), it will be updated, and depending on how major the updates are, I will write subsequent post explaining those steps.
