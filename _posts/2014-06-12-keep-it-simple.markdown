---
layout: post
title: Keep it simple
date: 2014-06-12 09:22:56.000000000 -04:00
comments: true
---
I started out by want to create a [simple CSS grid](/blog/2014/04/07/a-simple-css-grid/). Eventually I decided to turn that into a [CSS framework](/blog/2014/05/20/css-frameworks/). Then I wrote about [making the grid responsive](/blog/2014/05/26/making-the-grid-responsive/). While these posts are all very relevant, I have decided that really, in the end all I want is a grid.

___

## What is a framework?
>***frame·work***<br>
>/ˈfrāmˌwərk/

>*noun*<br>

>	* an essential supporting structure of a building, vehicle, or object.
   * a basic structure underlying a system, concept, or text.

I probably should have looked at this definition before attempting to build a framework. It would have made me think about what is actually *essential* to every site.

___

## What is *essential*?
Upon reflection, I've decided that I've entirely over-complicated my framework. I came to this conclusion when I was building what I hoped would serve as the demo page for the framework. I wanted a certain font, so I added that to the Framework. I wanted a navigation bar, so I added a `.navbar` component, with background colours and everything! The page was looking great, but luckily I realized that if I continued on this path, I was in **big** trouble. The whole reason I want to create my own framework in the first place is because I was tired of needing to override so much stuff in Bootstrap. So, on my next project, instead of overriding Bootstrap, I'd be overriding my own Framework. What does that accomplish? Every project is going to be different in terms of navigation, fonts, colours, etc. But to me, there are still a few things I want in *every* project I do. Again, these are what *I* think are essential, *to me*.

* Some simple JavaScript
	- I don't use jQuery unless I *really* need to. Which is happen less and less. I want a simple JavaScript library with some functions that I use in just about *every* project.
* Grid
	- not every site works off a grid, and that's ok, but I like a grid, so my framework *must* have a grid. And it must be responsive.
* Normalize.js
	- this helps make older browsers render similarly to modern browsers.
* Mixins
	- A bunch of 'functions' in my LESS files that make writing things like transitions, gradients, and drop-shadows much easier.
* Base Styles
	- a few *very basic* styles
    	- slight margin on tags like `table`, `ul`, and `blockquote`.
* Easily overridden variables I can use throughout a project
	- grid cell counts
    - font sizes (headers 1-6)
    - font colours
    - gray scale

A note on the last one - an emphasis on the 'easily overridden' part. This really just acts as a place to hold all these types of variables in any project.

___

## What do you get?
Using this Framework, I get just the basics. I only get what I use in *every* project. I don't have icons, fonts, typography, navigation, buttons, drop downs, or anything like that. The fact is, I don't use most of these things. Certainly not in *every* project. What I *do* get is a lightweight base for every project. I get a framework. I call it [GroundWork](https://github.com/MarkRabey/GroundWork"target="_blank).

___
You can find [GroundWork](https://github.com/MarkRabey/GroundWork"target="_blank) on [GitHub](https://github.com/MarkRabey/GroundWork"target="_blank).
