---
layout: post
title: CSS Frameworks
date: 2014-05-16 20:25:47.000000000 -04:00
comments: true
tags: css, html, grid layout, frameworks
---
I've done it again. Sort of. I've worked with something long enough to develop it into a great proof of concept, then more or less abandon it. This time it was my [CSS Grid](/blog/2014/04/07/a-simple-css-grid/). I haven't totally given up on it, I will still use it and develop it over time, but I'm putting it on the back burner. What I initially planned on build was *just* a grid. But there is a lot more to a page than the grid.

It turns out that what I ***actually*** want to build is my own framework. Something I can work with on multiple projects, with class names that I like, written in a way I like them. This is still something I intend on doing, and this grid I've written *will* be used in it, but right now, I don't have the time to commit to a project of this scale. I need my own theme for my blog (something I tried to do, but was unhappy with the result), as well, I have work to do on a few projects for clients.

So, I'm going to build templates and samples using [Twitter Bootstrap](http://getbootstrap.com"target="_blank) for now, as I am very comfortable with it.


## Is a Framework Ok?
In short: **YES**. Frameworks are great. Frameworks make a lot of things easy. Rather than write the same code over and over for each project, a framework gives you a foundation to build from. It does ***not*** make you less of a designer or developer to reuse code.

That said, there are a few things to keep in mind when using a framework. These are the things that make me want to write one strictly for me.


## Styles
Popular CSS Frameworks impose a lot of styles on the developer. This can be ok, especially if you're not the best when it comes to design. The look and feel of the frameworks elements might be exactly what you want or need. However, you might spend a lot of time overwriting styles from the framework.


## Bloat
How much of the framework are you actually going to be using? Depending on how you customize your download, you may and up include hundreds or even thousands of lines of CSS that never get used in your project.

The same can be said for plugins. Bootstrap, for example, requires you to include [jQuery](http://jquery.com"target="_blank) in order to use dropdowns, tooltips, modals, etc. This is perfectly understandable, but again, if you're not making use of any or all of these, do you need to include jQuery?

___

The list of Pros and Cons could keep going for me. Really, it comes down to what you're looking to accomplish. Right now, for me, if I need to develop something quickly, and easily, I'm using a framework. However, I will be working on developing my own framework to define my styles.
