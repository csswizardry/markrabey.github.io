---
layout: post
title: A little update to .transitions()
date: 2014-04-14 08:43:46.000000000 -04:00
---
In my [last past](/blog/2014/04/13/less-mixins/), I talked about LESS mixins. I had made a mixin for transitions. Something super simple, it looked like this:

{% highlight css %}
.transition(@ease-in-duration: 0.3s,@ease-out-duration: 0s) {
    transition: left @ease-in-duration ease-in-out @ease-out-duration;
    -webkit-transition: left @ease-in-duration ease-in-out @ease-out-duration;
    -moz-transition: left @ease-in-duration ease-in-out @ease-out-duration;
    -o-transition: left @ease-in-duration ease-in-out @ease-out-duration;
}
{% endhighlight %}


I put in one minor update: property. Now it looks like this:


{% highlight css %}
.transition(@property:left,@ease-in-duration: 0.3s,@ease-out-duration: 0s) {
    transition: @property @ease-in-duration ease-in-out @ease-out-duration;
    -webkit-transition: @property @ease-in-duration ease-in-out @ease-out-duration;
    -moz-transition: @property @ease-in-duration ease-in-out @ease-out-duration;
    -o-transition: @property @ease-in-duration ease-in-out @ease-out-duration;
}
{% endhighlight %}


This allows me to pass in the property I want affected by the transition, be it left, right, width, height, whatever I would like. There's lots more I could do with this, as CSS transitions have a lot of possibilities, but this serves my current need.

Also, I feels it's a good idea to put all your mixins in a separate file that is imported into the projects as you need it. I've found this keeps the code much cleaner, and changing one place, has affect across many places, rather than having to update many places. Of course this could cause problems too, but generally the benefits far outweigh the risks.

**\*\*\*Update\*\*\***
I realised I was way off in my understanding of CSS transition properties. Take a look at [this post](/blog/2014/04/14/css-transitions/) for updated code.
