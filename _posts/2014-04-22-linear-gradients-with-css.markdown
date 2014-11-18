---
layout: post
title: Linear Gradients with CSS
date: 2014-04-22 11:50:32.000000000 -04:00
tags: css, less, mixins
---
In older CSS specifications, we had to use images to achieve gradient effects, but now, with CSS3, we can create smooth, fast, and lightweight gradients that are rendered by the browser.

CSS3 defines 2 types of gradients:

1. **Linear** - they go up, down, left, right, or diagonal
2. **Radial** - they are defined by their center

In this post, I'll only be looking at linear gradients, and giving examples of those. That's because they're the ones I happen to have encountered most recently in my design work.


## Browser Support
Browser support is pretty decent, of course Internet Explorer is the exception, only supporting gradients in versions 10 and above. Chrome began supporting them in version 10, with the use of the `-webkit-` prefix, and added full support without prefixing in version 26. FireFox had `-moz-` prefix support in version 3.6, and non-prefixed in 16.0. Safari had `-webkit-` support in 5.1, non-prefixed in 6.1. Lastly, Opera offered `-o-` support in 11.1, and non-prefixed in 12.1.

So, if using gradients, it's really only a small number of users that would be left without the effect.


## Linear Gradients
Linear Gradients work by defining colour stops. These are the colours you wish to render transitions between. You must define a minimum of 2 stop. I don't believe there to be a maximum. You can also set a starting point and a direction for the effect.

**Syntax:**

{% highlight css %}
background: linear-gradient (direction, color-stop1, color-stop2, ...);
{% endhighlight %}


For most of my examples, I'm just going to use 2 colours.


##
## Linear Gradient - Top to Bottom
The default direction is top to bottom, so I don't need to enter that at all.

{% highlight css %}
.thisGradient {
	background: -webkit-linear-gradient(red, blue); /* For Safari 5.1 to 6.0 */
	background: -o-linear-gradient(red, blue); /* For Opera 11.1 to 12.0 */
	background: -moz-linear-gradient(red, blue); /* For Firefox 3.6 to 15 */
	background: linear-gradient(red, blue); /* Standard syntax */
}
{% endhighlight %}

**Results in:**
<div class="gradientExample" id="linear-1"></div>


##
## Linear Gradient - Left to Right
There is slightly different syntax here if using browser prefixes. `-webkit-` expects you enter the 'from' location, and defaults 'to' to the opposite (*from* left *to* right, *from* top *to* bottom, etc.). Both `-o-` and `-moz-` expect the 'to' location, and default to the opposite of *that*, and the standard syntax, expects you to explicitly say 'to right', or '2 left' and the 'from' is the opposite. Simply switching these to their opposites would of course result in a right to left gradient.


{% highlight css %}
.thisGradient {
	background: -webkit-linear-gradient(left, red , blue); /* For Safari 5.1 to 6.0 */
	background: -o-linear-gradient(right, red, blue); /* For Opera 11.1 to 12.0 */
	background: -moz-linear-gradient(right, red, blue); /* For Firefox 3.6 to 15 */
	background: linear-gradient(to right, red , blue); /* Standard syntax */
}
{% endhighlight %}

**Results in:**
<div class="gradientExample" id="linear-2"></div>


##
## Linear Gradient - Diagonal
Like left to right gradients, diagonals allow you to specify one location and the other is just the opposite. The difference is, here you specify both a vertical and a horizontal location. Again, note the slight differences in syntax between browser prefixes.


{% highlight css %}
.thisGradient {
	background: -webkit-linear-gradient(left top, red, blue); /* For Safari 5.1 to 6.0 */
	background: -o-linear-gradient(bottom right, red, blue); /* For Opera 11.1 to 12.0 */
	background: -moz-linear-gradient(bottom right, red, blue); /* For Firefox 3.6 to 15 */
	background: linear-gradient(to bottom right, red, blue); /* Standard syntax */
}
{% endhighlight %}

**Results in:**
<div class="gradientExample" id="linear-3"></div>
___


## Angles
You can have more control over the direction of your gradient by using angles instead of the predefined directions.

**Syntax:**

{% highlight css %}
background: linear-gradient(angle, color-stop1, color-stop2);
{% endhighlight %}


The angle is specified as an angle between a horizontal lines, and the gradient line, going counter-clockwise. That means `0deg` creates a bottom to top gradient, and `90deg` creates a left to right gradient.
___


## Multiple Colour Stops
You can also add in directions and angels, but here is a basic example of multiple colour stops:

{% highlight css %}
.thisGradient {
	background: -webkit-linear-gradient(red, green, blue); /* For Safari 5.1 to 6.0 */
	background: -o-linear-gradient(red, green, blue); /* For Opera 11.1 to 12.0 */
	background: -moz-linear-gradient(red, green, blue); /* For Firefox 3.6 to 15 */
	background: linear-gradient(red, green, blue); /* Standard syntax */
}
{% endhighlight %}

**Results in:**
<div class="gradientExample" id="linear-4"></div>

___


## Transparency
This a nice way to add fade effects. To do this, we simply use `rgba()` for the colour value. Here is an example that starts fully blue, then fades to fully transparent.

{% highlight css %}
.thisGradient {
	background: -webkit-linear-gradient(left, rgba(0,0,255,1), rgba(0,0,255,0)); /* For Safari 5.1 to 6.0 */
	background: -o-linear-gradient(right, rgba(0,0,255,1), rgba(0,0,255,0)); /* For Opera 11.1 to 12.0 */
	background: -moz-linear-gradient(right, rgba(0,0,255,1), rgba(0,0,255,0)); /* For Firefox 3.6 to 15 */
	background: linear-gradient(to right, rgba(0,0,255,1), rgba(0,0,255,0)); /* Standard syntax */
}
{% endhighlight %}

**Results in:**
<div class="gradientExample" id="linear-5"></div>

___

There is more that can be done using shapes, different angles, radial gradients, and repeating gradient, but this was what I was looking for to make an input button. I'm sure they'll be more of this for me in the near future.

Also, before I forget, if you're actually using these in production, always set a background color first for browsers that don't support gradients.

___

##
##
## Sources
[w3Schools.com](http://www.w3schools.com/css/css3_gradients.asp)
<style>
	.gradientExample {
    	width: 350px;
        height: 150px;
        margin-bottom: 20px;
    }

	#linear-1 {
    	background: -webkit-linear-gradient(red, blue);
		background: -o-linear-gradient(red, blue);
		background: -moz-linear-gradient(red, blue);
		background: linear-gradient(red, blue);
    }

    #linear-2 {
    	background: -webkit-linear-gradient(left, red, blue);
		background: -o-linear-gradient(right, red, blue);
		background: -moz-linear-gradient(right, red, blue);
		background: linear-gradient(to right, red, blue);
    }
    #linear-3 {
    	background: -webkit-linear-gradient(left top, red, blue);
		background: -o-linear-gradient(bottom right, red, blue);
		background: -moz-linear-gradient(bottom right, red, blue);
		background: linear-gradient(to bottom right, red, blue);
    }
    #linear-4 {
    	background: -webkit-linear-gradient(red, green, blue);
		background: -o-linear-gradient(red, green, blue);
		background: -moz-linear-gradient(red, green, blue);
		background: linear-gradient(red, green, blue);
    }
    #linear-5 {
    	background: -webkit-linear-gradient(left, rgba(0,0,255,1), rgba(0,0,255,0));
		background: -o-linear-gradient(right, rgba(0,0,255,1), rgba(0,0,255,0));
		background: -moz-linear-gradient(right, rgba(0,0,255,1), rgba(0,0,255,0));
		background: linear-gradient(to right, rgba(0,0,255,1), rgba(0,0,255,0));
    }
</style>
