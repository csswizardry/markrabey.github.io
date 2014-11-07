---
layout: post
title: More Cells!
date: 2014-04-08 05:54:48.000000000 -04:00
tags: css, grid, layout, less
---
Yesterday I [posted](/blog/2014/04/07/a-simple-css-grid/) the first part of my CSS Grid. Taking a look at it this morning, I've decided I need to refactor it a little to allow for a few more classes. Other grids often use the class names `.row` and/or `.col-*`. As it is now, I am using `.container` and `.cell-*`. I'm going to keep `.container`, but I'm rethinking `.cell-*` a little. I was using it simply to describe how much of the whole each cell spanned. Essentially the `*` was the number of total cells in a `.container` and that should always equal 12. The problem I quickly ran into, was wanting to create a layout that was 2 columns. One column at 1/3 width, and the other at 2/3. A pretty common layout these days.

My solution was to rename these classes to describe the width's more specifically. I'm going to use `.cell-*-*`. Where the '\*'s basically represent the fraction of the whole that each cell makes up. For example, my 2 column layout mentioned above would be coded something like this:


{% highlight html %}
<div class="container">
  <div class="cell-1-3">
    Some Content
  </div>
  <div class="cell-2-3">
    Some other content
  </div>
</div>
{% endhighlight %}

By creating this simple [LESS](http://lesscss.org) function, I quickly generate the additional classes I need:

{% highlight css %}
.generate-container-cells(@count) when (@count > 0) {
  .generate-cells(@count);
  .generate-container-cells(@count - 1);
}

.generate-cells(@d,@n:1) when (@n <= @d){
  .cell-@{n}-@{d} {
    width: percentage(@n / @d);
  }
  .generate-cells(@d,(@n + 1));
}
{% endhighlight %}

Again, this isn't a LESS tutorial so, I won't go into detail about what this is doing, I'll save that for another post. The resulting CSS however, looks kind of like this:

{% highlight css %}
.cell-1-12 {
  width: 8.33333333%;
}
.cell-2-12 {
  width: 16.66666667%;
}

...

.cell-12-12 {
  width: 100%;
}
.cell-1-11 {
  width: 9.09090909%;
}
.cell-2-11 {
  width: 18.18181818%;
}

...

.cell-1-1 {
  width: 100%;
}
{% endhighlight %}

I didn't bother putting in everything, it's long, and true, maybe not the prettiest CSS. But, I am using LESS, so I never really have to look at it. That's the beautiful thing, the LESS code is about 40 lines, and my generated CSS is about 250. Then, the CSS is minified, which removes some of the messy CSS entirely. Even before minifying, the CSS is only 3kb (2kb after). So, pretty clean if you ask me!

I haven't updated the demo page fully, but you can see here there are no a lot layout more possibilities:
[![Grid Demo](/content/images/blog/2014/Apr/Screen_Shot_2014_04_08_at_5_31_28_AM.png)](/content/images/blog/2014/Apr/Screen_Shot_2014_04_08_at_5_31_28_AM.png)

With this now working more or less the way I want it to, I can move on to making it responsive.

I have updated the code on [GitHub](https://github.com/MarkRabey/markr-grid) to reflect these changes.
