---
layout: post
title: Looping with LESS
date: 2014-04-10 09:24:54.000000000 -04:00
tags: css, less
---
Lately, I've been experiment with some new build tools. These aren't actually "new", but rather "new to me". I've mostly been playing with [LESS](http://lesscss.org) and [Grunt](http://gruntjs.com). Grunt accomplishes all sorts of things like minification, linting, and compiling LESS files for me. As I've been playing with LESS, I'm discovering more and more things I can do with it. The most recent? LOOPS!


## The Problem
While building my [css grid](/blog/2014/04/07/a-simple-css-grid/), I needed to make literally hundreds of classes for cells, each with calculated width values. LESS was great for performing the math part, all though simple math, I'm lazy. So to be able to loop through the classes I wanted and generate the css for me, I really needed a loop.


## The Solution
My exact solution was a little different than this, as I actually used nested loops. But here's the basic breakdown of a loop with LESS.

First, we set the number of iterations through the loop. The loops actually starts at the top and counts backward to zero.


{% highlight css %}
@iterations = 10;
{% endhighlight %}


Then we make our actual loop. Yes, it's looks just like a class, but it will never appear in our resulting CSS.


{% highlight css %}
.loopClass(@index) when (@index > 0) {

  //Do stuff inside the loop
    ...
    .loopClass(@index - 1); //next iteration
}
{% endhighlight %}


In this loop, I want to create classes classes called `.col-*`, where `*` in the index. Each class should have a width equal to `(index / interations) * 100`. So inside the loop (in place of `...`) I put the following code:


{% highlight css %}
.col-@{index} {
  width: percentage(@index/@iterations);
}
{% endhighlight %}


Next, outside of the loop I add some code to make sure it stops when the index hits zero...


{% highlight css %}
.loopClass(0);
{% endhighlight %}

...and then call the loop for the first time.


{% highlight css %}
.loopClass(@iterations);
{% endhighlight %}


That's all there is. The whole LESS code looks like this:

{% highlight css %}
@iterations: 10;

.loopingClass (@index) when (@index > 0) {
  .col-@{index} {
      width: percentage(@index/@iterations);
  }
    .loopingClass(@index - 1);
}

.loopingClass (0) {}
.loopingClass (@iterations);
{% endhighlight %}


This is the resulting CSS:


{% highlight css %}
.col-10 {
  width: 100%;
}
.col-9 {
  width: 90%;
}
.col-8 {
  width: 80%;
}
.col-7 {
  width: 70%;
}
.col-6 {
  width: 60%;
}
.col-5 {
  width: 50%;
}
.col-4 {
  width: 40%;
}
.col-3 {
  width: 30%;
}
.col-2 {
  width: 20%;
}
.col-1 {
  width: 10%;
}
{% endhighlight %}

So, it's actually a pretty simple solution I think. Like I said, I actually used nested calls to 2 different loops, I'll post details on the in the next day or two.
