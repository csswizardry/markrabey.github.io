---
layout: post
title: CSS Class Names
tags: css, semantics, bem
---

I recently wrote about [writing good CSS](/blog/2014/11/07/writing-good-css), and some of the concepts I've been using to approach CSS more effectively. Yesterday at work I came across a CSS class that just made me cringe, and I realized I didn't really touch on this in the last post. I'm only going to touch on in briefly here, and sometime soon write a more fleshed out post on class names, and [BEM-*like*](/blog/2014/11/07/writing-good-css#bem) naming conventions.

## The Good
While there will always be exceptions, good class names, in my opinion anyway, should describe what the content *is* not what it looks like. Again, if using BEM naming conventions, you have **M**odifiers that *are* very specific, but in general, your class names should be fairly generic. For example, if I want to style a button with a standard class, I might call it `.button` or `.btn`. This class is very general. This class could do anything to this element. It could make it red or blue, or rounded borders, or green text. It doesn't matter. This is a good thing. If at some point some manager somewhere say we need to make that text bold, we can go ahead and do that. No big deal. This is generally considered to be a *good* thing.

## The Bad
A "bad" class name is something that gives a specific style, but used carefully, these classes really aren't *that* bad. A class like `.text-center` - is very specific, and maybe not *great* but as long as it does exactly what the name suggests, and only that, it has some valuable use-cases. For example if you're adding this to a `<p>` tag to center that text, and that's the only thing you're doing with that particular tag, then that is great, and I have no issue with it. However, if you have say a `.header` class applied to an `<h1>`, and then you also apply `.text-center` to that element, that would be bad. It would be more logical in this case to simply add a `text-align: center;` to the `.header` class. That specificity is simply not necessary.

I've found that using BEM really helps the readability of this type of class, although I still try to make them somewhat general in their name. Again, the class describes what the element *is*. Here the example from my [last post](/blog/2014/11/07/writing-good-css):


	.btn {
	    display: inline-block;
	    padding: 1em 2em;
	    vertical-align: middle;
	    border: 1px solid #333;
	}

	.btn--positive {
	    background-color: green;
	    color: white;
	}

	.btn--negative {
	    background-color: red;
	    color: white;
	}

The `.btn` class tells us the element *is* a button. Then you could add either `.btn--positive` or `.btn--negative` to tell us that the button is either positive or negative. No where in the class names does it state that the button has a `border` attributes, or that positive buttons are green and negative buttons are red. That doesn't matter here. The class names describe what the element *is*.


## The Ugly
There are some ugly class names out there. Yesterday at work, I came across the **worst** one I've seen in a long time. OK, maybe that's a *slight* exaggeration, but it really made me cringe. I was looking at a page built for the company I work for. It was a fairly quick build, low traffic, nothing fancy. They decided to outsource this to a local designer. In my opinion, that was a mistake. Outsourcing *can* be a great option, but only if the results are adequate. The code was horrible. All static HTML is fine, if you're HTML is good at least. That was not the case. But I had never really looked at the CSS. Mostly out of fear. I could tell that whoever "wrote" this code, likely did so using Dreamweaver or possibly even Frontpage, so I just assumed it was garbage. But, after a couple years, someone decided they wanted to make some headings bigger on one of the pages. No big deal right. And it's still not hard, but what I saw when looking at this was a class called...wait for it...`.redbold`. OK - so this class, based on the name, should make this text red, and bold. That means it is telling me in the class name *exactly* what this class is doing. No other classes were applied here, so it wasn't overriding something specific, it was just there. Then, I looked at the CSS file and saw this:

	.redbold {
		color: #D2232A;
		font-weight: 400;
	}

So, the class name, as specific as it was, *lied* to me. Setting `font-weight: 400;` is the same as setting `font-weight: normal;`. Yes, that's right, ***normal***. It's quite likely that at some point these titles *were* bold, and then someone decided they should be "normal". So the CSS was changed. Obviously it would be a pain to update everywhere on the page that might have `.redbold` applied, so that wasn't done. That's kind of the point of classes. So, what if they decided they now wanted the color to be blue? Would you have a class `.redbold` that made text blue with a normal weight? The class could have easily been called `.heading` or something to describe what the content *is* and it wouldn't be a problem.

**RANT COMPLETE**