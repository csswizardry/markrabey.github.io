---
layout: post
title: A Simple CSS Grid
date: 2014-04-07 11:38:02.000000000 -04:00
tags: css, grid, layout, less
---

## Really?!
I'm working on templates and things for samples, as well as working on my own theme for this blog. I like grids, so I'm making one.

I know, the world doesn't really need _another_ css grid, but hear me out!

I really wanted to make my own grid system for 2 reasons:

1. To learn how these things work. Simple, I know, but I like to know exactly what I'm working with
2. I've worked with [Bootstrap](http://getbootstrap.com), and like it, but as I'm trying to become a better front-end engineer, I don't want to use anything for a grid that also styles elements for me. I know everything in Bootstrap can be overwritten, but I'm tired of doing that. I want to build from the ground up.

I should note, that I'm trying to ignore grids I've already worked with. One thing I really hate about most grid systems in the class names. I don't find `.row` or `.col-*` particularily useful. Mostly because when designing for mobile these class names are inaccurate. On a mobile device, a `div` with `.row` really looks like a column, and `.col-*` is really just a cell in that column. So, instead of `.col-*`, I am choosing to use `.cell-*`. That seems more accurate. The "row" is really just a container for the cells, so I'm calling it...`.container`. I'm writing everything using [LESS](http://lesscss.org/). I find it makes things nice and clean, and it will do a lot of the math for me.

It's also important to note that I am writing the code as I write this post, so I haven't tested anything. At the end I will test and post the final CSS.


## Getting Started

To get going, I needed to decide the maximum number of cells per row. My first thought was to try to allow an infinte number. I quickly decided that was both difficult, and impractical. Then, trying to be "better" than the Bootstrap, I decided as long as it was more than 12, I was good. You can actually get custom Bootstrap builds with as many or few `.grid-columns` as you would like. So, picking a number out of spite wasn't an option.

Odd numbers were out. I wanted something that could easily divide into 2 even columns. That just seemed obvious. I thought about 10, but many common layouts use 3 columns, or at least 1/3 and 2/3 column layout. So, an even number, divisable by 3. I considered 6, but that just doesn't seem like enough. I also remembered a layout I did once that was 4 even columns, so 6 didn't really work. I decided I actually liked 12 best. I could have gone to 18 or 24, but that just seemed excessive. I think I understand now why most of these other grids default to 12.

To keep my cell names simple, I decided the `*` in `.cell-*` would be a number representing the total number in that `.container`.

All cells need to float so they line up all pretty-like, I want to minimize the amount of code I actually write, and I want to add some padding to each cell. Here is what my LESS looks like:

{% highlight css %}
@cell-padding: 10px;

[class^='cell-'] {
	float: left;
	padding: @cell-padding;
}

[class^='cell-']:last-of-type {
	float: right;
	padding-right: @cell-padding;
}

.container {
	clear: both;
}
{% endhighlight %}

I set the padding as a variable, because I honestly don't know exactly what that will be when I'm done. LESS allows me to change it in that one spot, and affect the entire CSS. Here is the resulting CSS:

{% highlight css %}
[class^='cell-'] {
  float: left;
  padding: 10px;
}
[class^='cell-']:last-of-type {
  float: right;
  padding-right: 10px;
}
.container {
  clear: both;
}
{% endhighlight %}

The selector `[class^='cell-']` targets any element with a class beginning with "cell-". This selector will save me lots of time! Floating the last `.cell-*` in a `.container` to the right, corrects any padding to width issues I might have. I then clear the floats on the `.container` elements, so that each one creates a new "row".

Figuring out the widths for each possible `.cell-*` is actually really simple math. In that each cell is a fraction of a whole, I can just divide by 12. For example, 100 &divide; 5 = 20, so the width of `.cell-5` would be 20%. It's even easier if I let LESS do the work! I actally added a variable to the top of my LESS file to hold the number of cells in a container, just in case I change my mind later.

{% highlight css %}
@container-cells:12;
{% endhighlight %}

Looping through the values 1-12 with less was pretty simple, but this is not a LESS tutorial in any regard, so I will only post the resulting CSS.

{% highlight css %}
.cell-12 {
  width: 8.33333333%;
}
.cell-11 {
  width: 9.09090909%;
}
.cell-10 {
  width: 10%;
}
.cell-9 {
  width: 11.11111111%;
}
.cell-8 {
  width: 12.5%;
}
.cell-7 {
  width: 14.28571429%;
}
.cell-6 {
  width: 16.66666667%;
}
.cell-5 {
  width: 20%;
}
.cell-4 {
  width: 25%;
}
.cell-3 {
  width: 33.33333333%;
}
.cell-2 {
  width: 50%;
}
.cell-1 {
  width: 100%;
}
{% endhighlight %}

While building an example page, I found some padding issues. I corrected it simply by adding this to the top my css:

{% highlight css %}
*,
*:after,
*:before {
  margin: 0;
  padding: 0;
  /* Removes padding behaviour on widths */
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
{% endhighlight %}

The results is something like this:
![](/content/images/blog/2014/Apr/Screen_Shot_2014_04_07_at_12_52_33_PM.png)

As you can see, it's pretty simple. But there is something major left to do: _make it responsive!_

That will be the next post. Coming soon!

You can track the project on [GitHub](https://github.com/MarkRabey/markr-grid).
