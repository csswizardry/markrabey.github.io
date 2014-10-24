---
layout: post
title: Building a Ghost Theme - Part 4 - Styling Layouts
date: 2014-04-18 07:51:26.000000000 -04:00
---
There actually wasn't a whole lot I did here. I basically just made things prettier.

I already mentioned that I used [my own grid](/blog/2014/04/07/a-simple-css-grid/), and built basic layouts using the necessary classes. I've got posts listing, and displaying, but I need to make them look decent. First, the font. I didn't really spend much time on this, I went to [Google Fonts](http://www.google.com/fonts) and picked one I liked. I think it was even on the first page. For now, I've settled on 'Open Sans'. A very simple sans-serif font. I was easily able to include it in my LESS file, by simply adding:

{% highlight css %}
@import url(http://fonts.googleapis.com/css?family=Open+Sans:400italic,700italic,400,700);
{% endhighlight %}

After that I really just went and played with padding and margins until everything looked nice. There really wasn't much to it. I rearranged the content of my footer a little, added a class called `.muted` to, well, mute text. That's really all I did. Until it was time for the header.


The header was still pretty simple. I wanted to set the background to that of the 'blog cover' setting in Ghost. Of course, your CSS doesn't have access to, or logic to handle, data regardingt the blog, but the templates do. So in a 'partial' called `header.hbs` I added:

{% highlight handlebars %}
<header class="main-header container" {{#if @blog.cover}}style="background-image: url({{@blog.cover}})"{{/if}}>
	...
</header>
{% endhighlight %}

This checks if the blog cover is set, and if so, applies it as the background for the `<header>`. Then some simple CSS, and I was good to go.

I only mention the header, because it was the first example I really hit of conditionally making use of data from the blog. Other than that everything else is just CSS at this point. I added [Font Awesome](http://fortawesome.github.io/Font-Awesome/"target="_blank) icons because they're pretty. Everything I've done is available on [GitHub](https://github.com/MarkRabey/markr-ghost-theme"target="_blank) if you want details. I'm too lazy to be bothered to write it all out to be honest.

I still have a lot of little things to do. Coming up:

- scrolling animation
- syntax highlighting
- add Google Analytics
- prettier paging

I likely won't write about all these things, unless something really neat or important comes up, but if you're on here enough, you'll likely see other changes soon too. Hoping to move it live today!
