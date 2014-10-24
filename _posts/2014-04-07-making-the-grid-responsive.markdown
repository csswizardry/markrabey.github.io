---
layout: post
title: Making the Grid Responsive
date: 2014-04-07 13:19:46.000000000 -04:00
tags: css, grid, layout, less
---
Every website should be responsive. More and more users are visting sites on their mobile devices, so we need to give them the best possible experience. I hate nothing more than going to a site on my phone and being sent to some 'm.' subdomain, or something like that. I can't help but wonder what I'm missing. If there is something that can be removed from your desktop site, and still give the mobile user the same experience, then that content possibly isn't needed on your site at all. If you're willing to offer your users a sub-par experience on mobile, you might want to reconsider what you're doing altogether. In the majority of cases, you are not building a mobile website, or a desktop website. Rather, you are simply building a website.


## Where were we?
In a [previous post](http://markrabey.com/blog/2014/04/07/a-simple-css-grid/), I began building a CSS grid system. I left off with the basic foundation of the grid, but still needed to make it responsive. I thought about writing a "mobile first" grid, but I'm working on a desktop, so it seems more suitable to start with that and work down.



## Quick Update
In that it has been quite awile since starting the grid, I have actually reworked it quite a bit. Almost entirely rewritten it, in fact. First, I set a couple of variables. As before I have one variable the maximum number of cells per 'row'. Next, I have a variable for the 'gutter', or space between cells, and finally variables for my responsive breakpoints.  My variables look like this:

{% highlight css %}
@cell-count: 12;
@grid-gutter: 1em;
@grid-breakpoint-medium: 600px;
@grid-breakpoint-large: 960px;
{% endhighlight %}

Also, I no longer contain `.cell-*` in a `.container`, but rather the 'container' gets a class called `.grid`.


## Responsive
I decided that in order to make the grid responsive, I would add different classes to cells that would be affected at different breakpoints. First, I had to adjust the [mixins I used as loops](/blog/2014/04/10/looping-with-less/) to create the cells. I added a prefix argument that gets passed into the loop. So now, my main cells are generated like so:

{% highlight css %}
gridLoop(@count,@cell-prefix) when (@count > 0) {
  .cellLoop(@d:@count,@cell-prefix:@cell-prefix);
  .gridLoop(@count - 1,@cell-prefix);
}

.cellLoop(@d,@n:1,@cell-prefix) when (@n < @d){
  .@{cell-prefix}-@{n}-@{d} {
    width: percentage(@n / @d);
  }
  .cellLoop(@d,(@n + 1),@cell-prefix);
}
.gridLoop(@cell-count,cell);

.cell-1-1 { width: 100%; }
{% endhighlight %}

The last 2 lines here are really what result in code being produced. Calling `.gridLoop(@cell-count,cell)` generates cells beginning with `cell-`. Adding `.cell-1-1` is done because my 'loop' does generate `.@{cell-prefix}-1-1`. Then for my breakpoints I simple have this:

{% highlight css %}
@media only screen and (min-width: @grid-breakpoint-medium) {
  .gridLoop(@cell-count,medium-cell);
  .medium-cell-1-1 { width: 100%; }
}

@media only screen and (min-width: @grid-breakpoint-large) {
  .gridLoop(@cell-count,large-cell);
  .large-cell-1-1 { width: 100%; }
}
{% endhighlight %}

These call the same mixins, but pass in different prefixes. Now, in I add different classes to my HTML for different screen sizes. For example, I have this HTML:

{% highlight html %}
<div class="grid">
  <div class="cell-1-1">
    <h1>Grid Demo</h1>
  </div>
</div>
<div class="grid">
  <div class="cell-1-1  medium-cell-1-2 large-cell-1-3">
    <div class="box-content">.cell-1-1 .medium-cell-1-2 .large-cell-1-3</div>
  </div>
  <div class="cell-1-1  medium-cell-1-2 large-cell-1-3">
    <div class="box-content">.cell-1-1 .medium-cell-1-2 .large-cell-1-3</div>
  </div>
  <div class="cell-1-1  medium-cell-1-1 large-cell-1-3">
    <div class="box-content">.cell-1-1 .medium-cell-1-1 .large-cell-1-3</div>
  </div>
</div>
{% endhighlight %}

Which produces this result when the window is greater than 960px wide:
![960px](/content/images/blog/2014/May/Screen-Shot-2014-05-26-at-2-32-15-PM.png)

And then at less than 960px, but greater than 600px:
![600-900](/content/images/blog/2014/May/Screen-Shot-2014-05-26-at-2-33-55-PM.png)

And finally, less than 600px:
![less than 600px](/content/images/blog/2014/May/Screen-Shot-2014-05-26-at-2-34-37-PM.png)

There is still a slight issue I want to work on with that right margin, but that's on the way. Likely not in blog form.

This update should be on [GitHub](https://github.com/MarkRabey/markr-grid"target="_blank) very soon, I just need to rewrite the readme file.
