---
layout: post
title: LESS Gradient Mixins
date: 2014-04-23 09:47:17.000000000 -04:00
tags: css, less, mixins
---
I really like using [LESS](http://lesscss.org"target="_blank) to generate my CSS. I've been finding that it's especially helpful when it comes to things that need to be done fairly often. I hate putting in browser prefixes for things like border-radius, transition, drop-shadows, or any other number of things. So I began writing myself some mixins. As I mentioned in a few posts about transitions([first this one](/blog/2014/04/13/less-mixins/), [then this update](/blog/2014/04/14/a-little-update-to-transitions/), [then this final one](/blog/2014/04/14/css-transitions/)), [mixins](http://lesscss.org/features/#mixins-feature"target="_blank) are sort of like functions that you can call to generate CSS, they even allow you to pass in arguments.


## Gradient Mixins
When it comes to CSS Gradients, there are many options when it comes to direction, colours, angles, shapes, etc. Currently for my purposes, I'm only concerned with [Linear Gradients](/blog/2014/04/25/linear-gradients-with-css/), but I don't think I can accomplish everything in one mixin. So, here is the first one I made, it actually does 90% of what I need right now.

{% highlight css %}
.gradient(@start-color:#eee,@end-color: #fff) {
	background-color:@start-color;
    background: -webkit-linear-gradient(@start-color, @end-color);
    background: -o-linear-gradient(@start-color, @end-color);
    background: -moz-linear-gradient(@start-color, @end-color);
    background: linear-gradient(@start-color, @end-color);
}
{% endhighlight %}

This will create a simple top to bottom gradient, and allows me to pass in values for start and stop colours, or just use the defaults, although they're fairly useless.

In case I decide I want a left to right gradient, I made another mixin called `.horizontal-gradient`.

{% highlight css %}
.horizontal-gradient(@start-color:#eee,@end-color: #fff) {
	background-color:@start-color;
    background: -webkit-linear-gradient(left, @start-color, @end-color);
    background: -o-linear-gradient(right, @start-color, @end-color);
    background: -moz-linear-gradient(right, @start-color, @end-color);
    background: linear-gradient(to right, @start-color, @end-color);
}
{% endhighlight %}


This does basically the same thing, except it makes it go from left to right.

I thought about doing more mixins for other gradients, but these are really all that I've needed lately. I'm sure I'll come up with others soon, but you get the idea for now.
