---
layout: post
title: CSS Tricks
tags: css, semantics, learning, tutorial
---
Some of these are old tricks - and there are better ways to do these things now, however, some will hopefully prove useful! Feel free to comment and offer other solutions.

## 1. Text Highlight Color
Yes, it's true! You can control the color of selected text...at least in "modern" browsers - Sorry IE. Mind you, I haven't tested this in IE 11 yet.

	::selection {
		background: #222;
		color: #fff;
	}

	::-moz-selection {
		background: #222;
		color: #fff;
	}

## 3. Prevent Scrollbar Jump
Sometimes Firefox (and maybe Safari?) will hide the vertical scrollbar if the page content is less than what is contained in the window. This kind of makes sense, but the challenge I've had is then loading content on the page, maybe via ajax or something, causing the scrollbar to appear and cause the page to "jump" slightly. Super easy fix:

	html { overflow-y: scroll; }

## 4. Print Page Breaks
Very useful if you have a lot of users who may want to print your content. You can force a page break for print by adding this class to an element:

	.page-break { page-break-before: always; }

## 5. Highlight Links That Open in a New Window
This one is kind of neat, although I've never used it in production myself. It's possible to target links that open in a new window:

	a[target="_blank"]:before {
		margin:0 5px 0 0;  
		padding:1px;
		outline: 1px solid #333;
		color:#333;  
		background:#ff9;
		content: "\279C";
	}

## 6. Horizontal Centering
By defining an explicit width for a block level element, and setting the right and left margins to auto, the element will be centered horizontally.

	.centered-horizontal {
		width: 960px;
		margin: 0 auto;
		text-align: center;
		border: 1px solid #333; /* added only for demo purposes */
	}