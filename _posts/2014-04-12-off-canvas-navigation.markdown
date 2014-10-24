---
layout: post
title: Off Canvas Navigation
date: 2014-04-13 08:50:44.000000000 -04:00
redirect_from: /2014/04/13/off-canvas-navigation/
---
I wanted to make one, so I did. With some CSS transitions, and just a few lines of jQuery, it's really quite simple.

A simple, yet common concept, I wanted a menu that would slide out from the left when a button is clicked. I wanted this menu to appear overtop of my content, as opposed to pushing my content aside. I started with some simple HTML. I have a nav element that contains an unordered list of menu items, a link with the id `#nav-open`, and I have included the current version of [jQuery](http://jquery.com) (at the time of writing), and I've included my own file 'offcanvas-nav.min.js'.

{% highlight html %}
<!DOCTYPE html>
<html>
  <head>
    <title>Off Canvas Navigation</title>
    <link rel="stylesheet" href="includes/css/offcanvas-nav.min.css">
  </head>
  <body>
    <nav>
      <ul>
        <li><a href="#">Item 1</a></li>
        <li><a href="#">Item 2</a></li>
        <li><a href="#">Item 3</a></li>
        <li><a href="#">Item 4</a></li>
        <li><a href="#">Item 5</a></li>
      </ul>
    </nav>
    <a id="nav-open" href="#">Menu</a>
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
    <script src="includes/js/offcanvas-nav.min.js"></script>
  </body>
</html>
{% endhighlight %}


Next, I added some basic styles to control where the menu appears. As I've been doing lately, I wrote this in using [LESS](http://lesscss.org). I'm not actually making use of that quite yet, but once I start adding colours and things, you'll see why I did that.

{% highlight css %}
nav {
    display: block;
    height: 100%;
    overflow: auto;
    position: fixed;
    left: -20em;
    font-size: 15px;
    top: 0;
    width: 20em;
    z-index: 2000;
}

.nav-expanded nav {
    left: 0;
}

{% endhighlight %}


The jQuery is very simple for this. It simply targets the click event on the `#nav-open` link, and toggles the class `.nav-expanded` on the body. Doing this changes the left position of the menu.

{% highlight javascript %}
$(document).ready(function() {
    $('#nav-open').on('click',function(e) {
        e.preventDefault();
        $('body').toggleClass('nav-expanded');
    });
});
{% endhighlight %}


You can see in this jsFiddle, that it doesn't quite do what I want yet. You can click the menu link, and the menu appears as expected, but it's on top of the menu link. Meaning, I can't close it.

<iframe width="100%" height="300" src="http://jsfiddle.net/WideAsleepDad/2dsVM/embedded/result/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

Personally, I don't like using ids in my CSS at all. Just preference. I like to use classes for CSS, and save ids for JavaScript. So I've added a class to the menu link called `.nav-toggle`. I've also renamed the id to be `#nav-toggle` as I will be using the same link for both opening and closing the menu. Then in my LESS I add a style definition to apply to the link when the menu is expanded, and adjusted the jQuery accordingly.

<iframe width="100%" height="300" src="http://jsfiddle.net/WideAsleepDad/846c9/embedded/result/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

Great, now the menu appears and the link moves appropriatly. But this thing is ugly. So, first, add some styles to the menu link. At the top of my LESS:

{% highlight css %}
@menu-background-color: #2d2f33;
@menu-text-color: #fff;
{% endhighlight %}

Then I add styles to what I have already defined for `.nav-toggle`:

{% highlight css %}
.nav-toggle {
    background-color: @menu-background-color;
    color: @menu-text-color;
    padding: 10px;
    text-decoration: none;
    display: block;
    position: fixed;
}
{% endhighlight %}

And, add some styles to the menu and menu items:

{% highlight css %}
nav ul {
    padding: 0;
}

nav ul li {
    list-style-type: none;
    padding-left:5px;
}

nav a {
    display: block;
    color: @menu-text-color;
    text-decoration: none;
    padding: 10px 0;
}
{% endhighlight %}

Now what I've got is much nicer! Still not _perfect_, but getting close.

<iframe width="100%" height="300" src="http://jsfiddle.net/WideAsleepDad/kkXLJ/embedded/result" allowfullscreen="allowfullscreen" frameborder="0"></iframe>
Everything obviously needs to be styled according to the individual project. However, one last piece I want to add now, nicer transistions.

In my LESS I added some variables for the duration of transitions:

{% highlight css %}
@ease-in-duration: 0.3s;
@ease-out-duration: 0s;
{% endhighlight %}

Then add transtion definitions to the `<nav>` element, the `.nav-toggle` class, and the body when the menu is expanded:

{% highlight css %}
nav {
    ...
    transition: left @ease-in-duration ease-in-out @ease-out-duration;
    -webkit-transition: left @ease-in-duration ease-in-out @ease-out-duration;
    -moz-transition: left @ease-in-duration ease-in-out @ease-out-duration;
    -o-transition: left @ease-in-duration ease-in-out @ease-out-duration;
}

.nav-toggle {
    ...
    transition: left @ease-in-duration ease-in-out @ease-out-duration;
    -webkit-transition: left @ease-in-duration ease-in-out @ease-out-duration;
    -moz-transition: left @ease-in-duration ease-in-out @ease-out-duration;
    -o-transition: left @ease-in-duration ease-in-out @ease-out-duration;
}

.nav-expanded {
    margin-left: 0;
    transition: left @ease-in-duration ease-in-out @ease-out-duration;
    -webkit-transition: left @ease-in-duration ease-in-out @ease-out-duration;
    -moz-transition: left @ease-in-duration ease-in-out @ease-out-duration;
    -o-transition: left @ease-in-duration ease-in-out @ease-out-duration;
}
{% endhighlight %}

A few other little things, and this is the 'final' result:

<iframe width="100%" height="300" src="http://jsfiddle.net/WideAsleepDad/48hNh/embedded/result,css,html,js/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

That's it for now! A very workable proof of concept. I'll be using this as the basis for many menus in the near future!

The full source, including the LESS file, is available on [GitHub](https://github.com/MarkRabey/offcanvas-menu).
