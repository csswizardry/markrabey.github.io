---
layout: post
title: LESS Mixins
date: 2014-04-13 15:08:25.000000000 -04:00
tags: less, css, transitions
---
In writing the post about my [off canvas menu](/blog/2014/04/13/off-canvas-navigation/), I quickly realized that I had more lines in my LESS file than needed. In 3 different class definitions, I was using the same code for transitions:


{% highlight css %}
transition: left @ease-in-duration ease-in-out @ease-out-duration;
-webkit-transition: left @ease-in-duration ease-in-out @ease-out-duration;
-moz-transition: left @ease-in-duration ease-in-out @ease-out-duration;
-o-transition: left @ease-in-duration ease-in-out @ease-out-duration;
{% endhighlight %}

By making use of LESS [mixins](http://lesscss.org/features/#mixins-feature) I could create a 'function' that would do this for me. I already had variables defined for the duration of the transitions. I created a mixin class called `.transition` that used these variables:

{% highlight css %}
@ease-in-duration: 0.3s;
@ease-out-duration: 0s;

.transition() {
	transition: left @ease-in-duration ease-in-out @ease-out-duration;
	-webkit-transition: left @ease-in-duration ease-in-out @ease-out-duration;
	-moz-transition: left @ease-in-duration ease-in-out @ease-out-duration;
	-o-transition: left @ease-in-duration ease-in-out @ease-out-duration;
}
{% endhighlight %}


Then in the class definitions that I wanted to use this transition, I simple add `.transition()` a the code is inserted when my LESS is compliled.

In this particular case, I only saved about 3 lines of code, no big deal, but the concept is pretty straight forward. I want these to all have the same transition, so why write the same code 3 times?

Actually what I should probably do, is be allow myself to pass an argument into the mixin to set the duration, with some defaults maybe. That way different classes have the possibily of different durations. I can remove those variable definitions from the top of the file, and  `.transitions` looks like this:


{% highlight css %}
.transition(@ease-in-duration: 0.3s,@ease-out-duration: 0s) {
	transition: left @ease-in-duration ease-in-out @ease-out-duration;
	-webkit-transition: left @ease-in-duration ease-in-out @ease-out-duration;
	-moz-transition: left @ease-in-duration ease-in-out @ease-out-duration;
	-o-transition: left @ease-in-duration ease-in-out @ease-out-duration;
}
{% endhighlight %}


Not much change, except if I wanted to use this for **any** transition I can simply pass in the in and out durations I would like, or use the defaults. The benefit here, is really in saving my self form writing a definition for the different browser prefixes. Oh, and my moving the duration variables to defaults in the mixin, I saved 2 more lines of code. That's a total of 5!
