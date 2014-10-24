---
layout: post
title: Semantic HTML
date: 2014-05-14 12:27:59.000000000 -04:00
keywords: html, semantics
tags: html, semantics, learning, basics
---
This is a really hot topic among web geeks. Often the group is pretty split. I think everyone *agrees* that semantics are a good thing, but the split comes in understanding what that means. When is comes to HTML, semantics basically means describing the content of a tag, without specifying it.
___

## Bad Semantics
Bad semantics means using tags that don't describe their content. I've actually seen production code that looked something like this:

{% highlight html %}
<div class="article">
    <div class="article_header">Article Title</div>
    <div class="article_content">
        This is the content of the article. I want some <div class="bold_text">bold text</div>.
    </div>
</div>
{% endhighlight %}

The issue here is that `<div>` in no way describes what is in side. Then a very specific class is added in order to style as needed.

___

## Good Semantics
While the above code may have been written prior to HTML5, older versions of HTML also had semantic tags, such as `<form>`, `<table>`, or `<img>`. The content of these tags is clearly defined. In, say, HTML4, the above code probably should have been written something like this:

{% highlight html %}
<div class="article">
    <h1>Article Title</h1>
    <p>
        This is the content of the article. I want some <b>bold text</b>.
    </p>
</div>
{% endhighlight %}

This is better, but still not great. The tags `<div>` and `<span>` still don't describe their content. So we are left with `<div class="article">` to try to describe the content of the `<div>`. HTML5 introduced several new tags to make things even more semantic. Now this code could be written like this:

{% highlight html %}
<article>
    <header>
        <h1>Article Title</h1>
    </header>
    <p>
        This is the content of the article. I want some <strong>bold text</strong>.
    </p>
</article>
{% endhighlight %}

Each tag *describes* its content, but does not *specify* the content. The `<article>` tag contains the article, the `<header>` tag, the header, the `<p>` tag a paragraph. The `<b>` tag gets replaced with the `<strong>` tag. In HTML 4.01, `<strong>` was used to define emphasized text, while in HTML5 it is used to define important text. The way to think about this from a semantic standpoint, is that we want this text to stand out, and be "strong", but that may not necessarily mean 'bold'.
___

## Staying Semantic
It's tough to remain semantic sometimes. Especially in world where we're still supporting a **huge** amount of old code. It can be tough to remember all the new elements available in HTML5, but it can be really valuable. For myself, I try to follow a couple really simple guidelines.

First, I don't use any tags just because they are styled a certain way. HTML is for my layout, CSS is for styling. Period. In fact, although still supported by most browsers, many of these tags have been deprecated in HTML5. Tags like `<font>`, `<center>`, and `<big>` are no longer supported. As well, many formerly common attributes, have been removed from tags. For example, the tags `<body>`, `<table>`, `<thead>`, `<tbody>`, `<tfoot>`, `<tr>`, `<td>`, and `<th>` no longer have a `background` attribute, but should instead be styled using CSS. For a complete list of obsolete tags and attributes, read [this document](http://www.w3.org/TR/html5/obsolete.html"target="_blank). Most of these are style related.

The only other thing I really do, is try to use the *best* tag I can. I actually try to avoid `<div>` and `<span>` tags altogether. Sometimes this doesn't work, and I end up using them, `<span>` probably more than `<div>`, but in most cases I can use another element. New semantic elements added in HTML5 are:

- `<header>`
- `<nav>`
- `<section>`
- `<article>`
- `<aside>`
- `<figure>`
- `<figcaption>`
- `<footer>`
- `<details>`
- `<summary>`
- `<mark>`
- `<time>`

In most cases, where tempted to use a `<div>`, consider one of these instead. They should all be pretty straight forward. That's the point. Anyone else, including maybe a bot, that looks at your code, should be able to easily distinguish what each element contains.
___

## Doctype
Semantics is not just about the content. In fact, HTML semantics begins at the very top of your document, with a little thing called `doctype`. Remember the good ol' days?

{% highlight html %}
<!DOCTYPE html
    PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
{% endhighlight %}

This is actually an interesting story...well, maybe "interesting" is the wrong word, but have you ever wondered *why* we had these lengthy doctypes? We can thank Microsoft for that! Specifically, we can thank the team that worked on Internet Explorer 5, for Mac. The team encountered and "interesting" issue. They were really good about making sure this browser followed standards. The issue with this, was that a lot of old pages now rendered *properly*. Which, because of the way sites were built back then, and other browsers didn't adhere to standards, meant that although pages were displaying properly, they weren't displaying as users expected. Basically, IE5 for Mac, was so good, it broke the Internet.

To "correct" this issue, Microsoft came up with a solution, love it or hate it. IE5 on Mac, looked at `doctype`, which is typically the first line in an HTML document. If this wasn't in the document, as was the case on many older web pages, then it would render as it would in older browsers, in what they referred to as "quirks mode". The content of this tag tells the browser where to find the definitions, which tell the browser how things should be rendered.

Sadly, this idea caught on, and soon all major browsers had both "quirks mode" and  "standards mode". Guess what happened next? Mozilla released version 1.1 of their browser, and discovered that there were a lot of pages that were running in "standards mode" that required one little quirk. So they came up with..."[almost standards mode](https://developer.mozilla.org/en-US/docs/Gecko's_Almost_Standards_Mode"target="_blank)". Yes, it's true. I can't make this stuff up! This is triggered by this `doctype`:

{% highlight html %}
<!DOCTYPE html
        PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
        "http://www.w3.org/TR/html4/loose.dtd">
{% endhighlight %}

There are actually 15 doctypes that activate "standards mode" in modern browsers. You can use it if you really like, it works still. Or, you can use the nice simple HTML5 `doctype`, which triggers "standards mode" in all modern browsers:

{% highlight html %}
<!DOCTYPE html>
{% endhighlight %}

That's all. You can't really forget it, or screw that up too bad. Nothing else is needed now. Your document type is 'HTML'. Pretty clear.
___

## Root Element
Still often over looked, is the root element. This used to have to be defined as:

{% highlight html %}
<html xmlns="http://www.w3.org/1999/xhtml"
    lang="en"
    xml:lang="en">
{% endhighlight %}

Again, you can keep this, and everything will work just fine, but HTML5 has made this much simpler to define.

The first thing that can go is the `xmlns` attribute. This exists from [XHTML 1.0](http://www.w3.org/TR/xhtml1/"target="_blank). It says that all elements on the page are in the `http://www.w3.org/1999/xhtml` namespace, but elements in HTML are always in this namespace, so we no longer need to declare that.

Next, we have two attributes, `lang` and `xml:lang`. Why two attributes for the same thing? Again, `xml:lang` is from XHTML. Only the `lang` attribute has any effect on HTML5. So we can remove `xml:lang="en"`. Of course, if you're not writing in English, you'll want to [find your language code](http://www.w3.org/International/questions/qa-choosing-language-tags"target="_blank). Now, we're left with the much easier to read and write:

{% highlight html %}
<html lang="en">
{% endhighlight %}

___

## More?!
There is a lot more in HTML5, but rather than all the HTML5 specific changes, I really just want to get others *thinking* about semantics. At least *trying* to understand them. To sum up, your HTML should clearly *describe* your content to both browsers, and developers. It should be simple to read, simple to write, and clear to understand. Consider what elements might better *describe* your content. It should not *specify* your content, it should not *style* your content, simply describe it.
