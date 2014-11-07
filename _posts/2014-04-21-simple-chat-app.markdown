---
layout: post
title: Simple Chat App
date: 2014-04-21 09:48:24.000000000 -04:00
tags: javascript, socket.io, node.js
---
[Node.js](http://nodejs.orm"target="_blank) is great for building fast, highly scalable, web applications. Making use of [Websockets](http://en.wikipedia.org/wiki/WebSocket"taret="_blank), we are able to leverage this speed an flexibility, and deliver data to a huge number of clients simultaneously. Of course, I haven't built much of anything with Node, just a *very* simple invoicing app to run on my local machine. I decided to build a simple chat app learn about working with Node and Websockets via [Socket.io](http://socket.io"target="_blank).


## What is Socket.io?
Socket.io is basically a Websockets plugin for Node.js. It allows us to eaily interact with a server via Websockets, while also providing a fallback for older browsers that don't support this new technology. It detects Websocket compatibility, and if not available, it can fallback to Flash, AJAX, or an iFrame. It also supports a large set of browsers:

- Internet Explorer 5.5+
- Safari 3+
- Google Chrome 4+
- Firefox 3+
- Opera 10.61+
- iPhone Safari
- iPad Safari
- Android WebKit
- WebOs WebKit


## Installing Dependancies
[Node Package Manager](http://npmjs.org) makes it easy to quickly install the packages we will be using. First, in Terminal, create, and navigate to, a folder for your project:

{% highlight bash %}
mkdir simple-chat && cd simple-chat{% endhighlight %}


Next, have npm download the packages we'll be using:

{% highlight bash %}
npm install express jade socket.io{% endhighlight %}


In the project folder, you will now see in a folder called "node_modules" that contains these packages.

All of the server-side code will be in a file called `server.js`. Open that up in your [favourite text editor](http://www.sublimetext.com/"target="_blank), and we can start writing some code.


## Serving a Static Page
The browser-side of our app will be served a single static page. To do this, we will use [Express](http://expressjs.com"target="_blank), a framework that greatly simplifies the process of serving a page, static or dynamic.

First, we include the package in our project, and create the basic server:

{% highlight javascript %}
var express = require('express')
  , app = express()
  , http = require('http')
  , server = http.createServer(app)
{% endhighlight %}


Next, we need to configure Express to serve the page that results from the views created with the [Jade](http://jade-lang.com"target="_blank) templating engine. We installed Jade earlier, in our NPM install. Express can also serve a static collection of files to the client, just like a traditional web server, so we will send a `public` folder that contains all of our client-side JavaScript, CSS and image files.

{% highlight javascript %}
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'));
{% endhighlight %}


Next, we will create the `views` and `public` folders.

Then, we need to configure Express to serve `index.jade`, which we will create shortly, and then set Express to listen on a specific port. I'm using port 3000, but you're welcome to use whatever port you would like.

{% highlight javascript %}
app.get('/', function(req, res){
  res.render('index.jade');
});
server.listen(3000);{% endhighlight %}



## Create the Page with Jade
Node.js uses templating engines to serve webpages. This is useful for sending dynamic pages, and to build them quickly.

I opted to use [Jade](http://jade-lang.com"target="_blank) because its syntax is clear and simple, and it will easily do everything we need.


##
## Configuration
We installed Jade earlier, but we need to include it in our `server.js` file. The standard is to include any libraries at the top of our file. This avoids having to check if they are already included when we want to use them. So, in our package declaration at the top of `server.js`, add:

{% highlight javascript %}
  ,jade = require('jade');
{% endhighlight %}

That's actually all we need to do. Express is already set up to use Jade, we just need to make `index.jade` and our view is complete.


##
## Creating Our Page
If we start our app now, and point our browser to our server, we will see an error. This is because we are asking our server to serve a view that doesn't exist yet.

We're not going to create anything fancy, just a basic page with a title, container for the messages, a simple form for a user to set their name and send messages, and a count of current users.

In the `views` folder, create a file called `index.jade` and add the following code:

{% highlight jade %}
doctype html
html
    head
        title Simple Chat
        script(src='https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js')
        script(src="/socket.io/socket.io.js")
        script(src="script.js")
    body
        div.container
            header
                h1 Simple Chat
            input(type='text')#nameInput
            button#nameSet Set Name
            div#messages
            div#controls
                input(type='text')#message
                button#submit Send
{% endhighlight %}


Jade is all about indentation. You can see that we don't need to close containers, simply indenting the children is enough. You can also see that we use a period `.` and a pound sign `#` to indicate class or ID for an element, similar to a CSS file.

We also added links to 3 scripts at the top. First, is the latest version of jQuery (at the time of writing) being served from the Google CDN, next is the Socket.io script, which will be served by the package, and last is a file called `script.js` which we will create shortly to hold all of our client-side JavaScript (jQuery) functions.


## Socket.io Configuration
Like Node.js, and really most things written in JavaScript, Socket.io is event based. Its aim, is to make real-time apps possible in every browser, and on every mobile device. It's written in 100% JavaScript.


##
## Server-Side
Like the other modules, we need to include Socket.io in our `server.js` file. We will also chain our Express server we it listens for connections on the same address and port. After the Jade declaration, add:

{% highlight javascript %}
  , io = require('socket.io').listen(server);
{% endhighlight %}


The first event we will use is the `connection` event. This is fired whenever a client (browser) tries to connect to the server. Socket.io creates a new socket that we will use to communicate messages to the client. We get started by initializing the connection:

{% highlight javascript %}
io.sockets.on('connection', function(socket) {
  // Our other events
});
{% endhighlight %}


This function takes two arguments, the first is the event, and  the second is the callback function, with the socket object passed to it.

Using this type of code, we can create new events on the client and on the server with Socket.io. We will create events to for a user to set their name, and send a message.

Inside our connection function, let's add the `setName` event code:

{% highlight javascript %}
socket.on('setName', function (data) {
    socket.set('user_name', data);
});
{% endhighlight %}


The callback takes one argument, the data from the client. In our case this is the `name` the user has entered. The `set` function assigns a variable to the socket. The first argument is the name of the variables, the second is the value.

Next, we need to add the code for the `message` event. This will get the user's name, and broadcast an array to all clients which contains the message we received, along with the user's name, and log it into our console:

{% highlight javascript %}
socket.on('message', function (message) {
	socket.get('user_name', function (error, name) {
    	var data = { 'message' : message, user : name };
        socket.broadcast.emit('message', data);
        console.log("user " + name + " sent this : " + message);
	});
});
{% endhighlight %}


That's all there is for our server-side configuration. There are lots of events that *could* be added to enhance the features of the chat, but we're not covering those here.

A really nice things about Socket.io, is that we don't have to work about client disconnections. When a client disconnects, Socket.io no longer receives a reply to the "heartbeat" messages, and will deactivate the client's session. If it was just temporary, the client will reconnect and continue with the session.


##
## Client-Side
Now that the server is setup to manage message, we need the client to send them.

The client-side of Socket.io is almost identical to the server-side. It also works with custom events and we will create the same ones as on the server.

First, inside the `public` folder, create a file called `script.js`. All of our functions will go in this file. Remember, it has already been included in the view we created.

First, we need to start the Socket.io connection between the client and the server. This connection will be stored in a variable, which we will use later to send and receive data. When the `connect()` funciton is not passed any arguments, it automatically connects to the server that served the page:

{% highlight javascript %}
var socket = io.connect();
{% endhighlight %}


Next, we'll create some helper functions that we will need later. The first is a simple function to add a message to the screen along with the user's name.

{% highlight javascript %}
function addMessage(msg, user_name) {
    $("#messages").append('<div class="message"><p>' + user_name + ' : ' + msg + '</p></div>');
}
{% endhighlight %}


This function uses the jQuery *.append()* function to add a `div` to the end of `div#messages`.

Next, we will write a function to call when we want to send a new message:

{% highlight javascript %}
function sendMessage() {
	if ($('#messageInput').val() != "") {
		socket.emit('message', $('#message').val());
		addMessage($('#message').val(), "Me", new Date().toISOString(), true);
		$('#message').val('');
	}
}
{% endhighlight %}


First we check that our message isn't blank, them we send a packet named `message` to the server that contains the message  text. We add this message to our own screen using the `addMessage` function we created earlier, and finally we clear the message input field.

Now, when the client opens the page, we want the user name set before they send any messages. This function will send the user name to the server and then show the message input and submit button.

{% highlight javascript %}
function setName() {
    if ($("#nameInput").val() != "") {
        socket.emit('setName', $("#nameInput").val());
        $('#controls').show();
        $('#nameInput').hide();
        $('#nameSet').hide();
    }
}
{% endhighlight %}


We also hide the name setting controls once the data is sent to the server.

Now, we need to make sure we can receive incoming messages and print them on the screen. We'll start with a function similar to our server-side code, except inside we'll call our `addMessage()` function.

{% highlight javascript %}
socket.on('message', function(data) {
    addMessage(data['message'], data['user']);
});
{% endhighlight %}


Remember, the data that the server sends to the client is an array containing the message, and the name of the user. We just call our `addMessage()` function and pass in the message and user name, taken from the received data.

Finally, we need to add the initialization function that is fired once the page is fully loaded.

{% highlight javascript %}
$(function() {
    $("#controls").hide();
    $("#nameSet").click(function() {setName()});
    $("#submit").click(function() {sendMessage();});
});
{% endhighlight %}


This hides the message controls before the user name is set, then we set two click listeners which listen on the two submit buttons.

That's it for the client-side code.


## Conclusion
We now have a working chat service. A simple one, but a working one. To start the server, run the following command:

{% highlight bash %}
node server
{% endhighlight %}


You should see a message from Socket.io sating the server is started. To view your page, go to `http://localhost:3000` (or whichever port you used previously).
{<3>}![](/content/images/blog/2014/Apr/Screen_Shot_2014_04_21_at_2_18_59_PM.png"alt="Set Name)

The design is super simple. In fact, I wouldn't actually call it a 'design'. But that wasn't the point here. We have a chat server. After entering a name, the user is able to type and send a message.
{<6>}![](/content/images/blog/2014/Apr/Screen_Shot_2014_04_21_at_2_22_10_PM.png"alt="Send Message)

If you open your page in another browser, you can see the 2 clients interacting.
{<11>}![](/content/images/blog/2014/Apr/Screen_Shot_2014_04_21_at_2_23_49_PM.png"alt="Sent Messages)
{<13>}![](/content/images/blog/2014/Apr/Screen_Shot_2014_04_21_at_2_24_07_PM.png"alt="More Sent Messages)

I believe this really shows the power of Node.js. We have client and server code that is nearly identical, meaning you no longer have to switch between languages in order for clients and servers to interact. You're not really writing the code twice any more.

You also may have noticed how few lines are in `server.js`. In less than 30 lines we created a functional chat app that is lightning fast. It's very short, but it works very well.

I will likely build a more enhanced version of this app, but feel free to do with it what you will. You can find this project on [GitHub](https://github.com/MarkRabey/simple-chat"target="_blank).
