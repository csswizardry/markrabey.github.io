---
layout: post
title: JavaScript Scrolling Animation
date: 2014-04-27 09:02:08.000000000 -04:00
---
I wanted to find a nice way to animate the scrolling on my site, so that when a user clicks 'Blog' they aren't just jumped down the page. I didn't want to resort to one of the many jQuery plugins, partly because I'm not using any jQuery on my site at all, and adding it just for this seems ridiculous. I could do something in pure JavaScript, but then I decided, it seems simple enough, surely it can be done purely in CSS, right? So I decided to try that first.


## :target
Any URL that has `#` followed by an anchor name, links to an element in the document that has that anchor name as its `id`. When clicked, the target element can be captured using the selector `:target`. Here is a simple example that makes use of this to change background colours on a div:

<iframe width="100%" height="300" src="http://jsfiddle.net/WideAsleepDad/Z3sDw/embedded/result,css,html" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

I thought support for this was going to be pretty poor, but it turns out all major browsers support it, and it's supported in IE 9+. I figure if you're using an older version of IE you're used to having a sub-par Internet experience, so there's no need to look for another option.


## transistion() and transform()
I was thinking my best option for animating this was using `transform()` to actually move the content, and `transition()` to make it nice and smooth. Here's what I played with:

<iframe width="100%" height="300" src="http://jsfiddle.net/WideAsleepDad/xcC6s/embedded/result,css,html" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

So, what I determined from some quick experiments, is that this won't really work with pure CSS. It's close, but there are too many issues. I don't want to actually *move* my content, just scroll to is smoothly. So, still wanting to avoid jQuery, I moved onto a pure JavaScript experiment.

<iframe width="100%" height="300" src="http://jsfiddle.net/WideAsleepDad/84pjT/embedded/result,js,css" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

The JavaScript ended up being pretty simple in the end. Basically, I have a function the you call my passing in a target point, and optionally a duration for the animation to occur. After setting all my values for offsets and deltas, I clear any timers that may also be running using the `clearInterval()` function.

{% highlight javascript %}
if (timer) {
	clearInterval(timer);
}
{% endhighlight %}

The next function is what actually scrolls the page.


{% highlight javascript %}
function step() {
	var y;
	factor = (Date.now() - start) / duration;
	if( factor >= 1 ) {
		clearInterval(timer);
        factor = 1;
	}
	y = factor * delta + offset;
	window.scrollBy(0, y - window.pageYOffset);
}
{% endhighlight %}


I used a variable called `factor` to calculate whether or the animation has run for the specified time, once it has, the timer is stopped.

After the function was created, it was pretty easy to call it on click, by simply adding an event listener.

{% highlight javascript %}
var blogLink = document.querySelector('[href="#target"]');
blogLink.addEventListener("click", function(event) {
    event.preventDefault();
	scrollTo(document.getElementById('target').offsetTop);
}, false);

{% endhighlight %}

I could do any number of things to target the link differently, this is just an example. I could also pass in a different duration if I wanted to:

{% highlight javascript %}
scrollTo(document.getElementById('target').offsetTop,2000); // call function with a 2 second animation
{% endhighlight %}

Due to the fact that I'm only using this once, I didn't have to create an external function all. Everything could have been written directly inside the event listener, but I have a feeling this is something I'll make use of again.

Even though this didn't really work in CSS, I'm really happy that it was so simple using JavaScript. I'm not trying to avoid jQuery out of spite, or anger, or anything else. I just don't want to include a library just for a few small functions. jQuery is an excellent framework, it's just too heavy for what I need right now. You are more than welcome to use it, I do for many projects, but it wasn't fitting in this case.
