---
title: HTML Basics
tags: html, semantics, layout, basics, tutorial
---

I recently began working with someone who wants to learn how to build his website, rather than simply have me build it for him. As a web developer I'd obviously appreciate the longer term relationship of building and maintaining a site. Let's be honest, that would likely make me more money than teaching people how to do it themselves. However, this process will actually be really fun. For me, the best part about web development is *not* updating and maintaining a site. It's about taking an idea and seeing it come to life. To me *that* is exciting. I'm really looking forward to this! Unlike most of my posts, this one is geared towards *beginners*. I am doing my best to assume no prior knowledge of HTML, CSS, or JavaScript. I *will* however assume you have basic knowledge of how to use a computer. If you feel I've failed in this regard, or you have any questions, feel free to leave a comment below, or email me: <hello@markrabey.com>.

##Getting Started
For the purposes of this post, we're not looking at builders, generators, frameworks, or even styling the page. We're looking at the absolute *basics* of building a web page by gaining an *understanding* of how HTML works within the browser. To do this, we can use our favourite text editor. Personally, I use [Sublime Text 3](http://www.sublimetext.com/3), but you can use whatever you would like. If you're using Windows, first my condolences, but at least it includes Notepad which is a good enough text editor for what we're doing here. If you're using a Mac, you can use TextEdit if you'd rather not get Sublime (although I don't know why you wouldn't). Through these examples, we'll be building a site for a hypothetical computer services company.

##What is HTML?
HTML stands for **H**yper **T**ext **M**arkup **L**anguage. It is *not* a programming language, because it does not contain logic that is processed. An HTML file is basically just a text files that is "marked up" to tell web browsers how they should display content.

##What does the browser do?
There are many different web browsers, the most popular being [Chrome](https://encrypted.google.com/chrome/browser/index.html), [FireFox](https://www.mozilla.org/en-US/firefox/new/), and [Internet Explorer](http://www.newser.com/story/186056/homeland-security-avoid-internet-explorer.html). When a browser enters a web page, it receives data from the server in the form of HTML (usually, but that's a whole other topic). The browser then reads that HTML and displays the page based on that processed HTML. Sometimes browsers, especially Internet Explorer, don't display the content in the way the author expected, so it's important to follow HTML guidelines, as well as test in the most popular browsers.

##HTML Tags
Tags are the "markup" part of HTML. Typically we add an opening tag and a closing tag around portions of text in order to give them some sort of context. A basic HTML structure might look something like this:

{% highlight html %}
<!DOCTYPE html>
<html>
  <body>
    This is our web page
  </body>
</html>
{% endhighlight %}

In your text editor, put this code, and save the file as `index.html`. The first line, `<!DOCTYPE html>` is the **document type declaration**. This tells the browser what sort of document you are try to produce. In this case, it's *HTML5*. This can be quite important, as if you don't include it, the browser will have to guess, and that could cause very unexpected results. Getting back to tags in general, we see `<html>`. This is the **opening tag** that tells the browser everything between here and the closing tag `</html>` is, in fact, HTML. The stuff between `<body>` and `</body>` is the main content of the page. This is what will appear in the browser window.

##Closing Tags
In our sample, using `</body>` and `</html>` closes their respective *elements*. Note that not all tags have a corresponding closing tag. Tags that don't wrap content don't usually need a closing tag, and will actually close themselves. A line-break, for example, is represented in HTML as `<br>`. Because there is no content associated with this tag, it doesn't have a closing counterpart. The rule of thumb is, "if it wraps content, it needs a closing tag". Strictly speaking, closing tags are *not* always required, but it's good practice, and makes code easier to read.

You might come across "self-closing", where the `br` tag might appear as `<br />` rather than simply `<br>`. This is a result of older versions of HTML that were based on another language called **XML**. HTML5 no longer requires this format but will simply ignore them if they are there. Some developers have a preference one way or the other, often just out of habit. Personally, I prefer the simpler format.

At this point, if you save the above code and open that file with a web browser, you should see something like <a href="/demos/basic-html-1.html" target="_blank">this</a>.

##Attributes
Tags can also have *attributes*, which are extra piece of information the browser can use to render the element. Attributes appear inside the opening tag and their values are surrounded by quotes (usually doubles). They appear something like: `<tag arrtibute="value">content</tag>`. We'll see more of these in future posts.

##Elements
Tags essentially do little more than mark the beginning and ending of an element. For example, `<body>` and `</body` are *tags*, and everything between these, and *including them*, is what makes up the body ***element***. Another example is `<title>` and `</title>` are tags, and `<title>Page Title</title>` is the title ***element***.

##Page Titles
To add a title to your page that will appear at the top of your browser window, change your code to look like this:

{% highlight html %}
<!DOCTYPE html>
<html>
  <head>
    <title>Computer Service Company</title>
  </head>

  <body>
    This is our web page
  </body>
</html>
{% endhighlight %}

We have added 2 new elements, `head` and `title`.  The first starts with `<head>` and ends with `</head>`. The second is *inside* of the `head` element and starts with `<title>` and ends with `</title>`. The `head` element is located above the `body` element and contains information *about* the page. This content is not displayed in the browser window. There are a number of elements that can appear inside the `head`, and we'll get to those eventually, but for now we'll just include the most important, `title` element.

Now, after saving your code, and refreshing the page, things should look like <a href="/demos/basic-html-2.html" target="_blank">this</a>.

##Paragraphs
Hopefully you have general idea what I'm talking about here. It's hard without seeing it in action. If you're totally confused, reread the above sections, if you're still stuck, send me an email: <hello@markrabey.com>. If we're clear so far, we're ready to start adding some content to the page.

Let's add a line of text.
{% highlight html %}
<!DOCTYPE html>
<html>
  <head>
    <title>Computer Service Company</title>
  </head>

  <body>
    This is our web page.
    We offer virus scan and removal, full system clean, upgrades, diagnosis, and all general repairs.
  </body>
</html>
{% endhighlight %}

View this code in your browser likely has some unexpected results. You might expect the text to appear on 2 lines, just the way you typed it, however, instead you will see something like <a href="/demos/basic-html-3.html" target="_blank">this</a>.

This is because the browser doesn't pay any attention to what line your code is on. It doesn't care about extra spaces either. If you want to have your code on 2 different lines, or in 2 distinct blocks of text, you need to explicitly *tell* the browser that. Remember, HTML is about *meaning* not actual presentation.

To change this to what we actually mean, we will add `p` tags to our text. This is used to define **paragraphs** in HTML.

{% highlight html %}
<!DOCTYPE html>
<html>
  <head>
    <title>Computer Service Company</title>
  </head>

  <body>
    <p>This is our web page.</p>
    <p>We offer virus scan and removal, full system clean, upgrades, diagnosis, and all general repairs.</p>
  </body>
</html>
{% endhighlight %}

Now, <a href="/demos/basic-html-4.html" target="_blank">this</a> should be more what we want. Remember that fonts, colours, positioning, etc. will all be handled *later* with CSS.

Moving on...

##Headings
The `p` tag is just he beginning of text formating. A key piece to keeping a document organised is headings. These are also valuable for Search Engine Optimisation (SEO).

The heading tags are `h1`,`h2`,`h3`,`h4`,`h5`, and, you guessed it, `h6`. The `h1` tag is the most important, while `h6` is low man on the totem pole. For SEO reasons, we should only have one `h1` element on a page. This should be the *most* important item in the context of that page.

For example, on my home page,  my `h1` is:
`<h1 class="page-head__text">Mark Rabey<br>Full-Stack Web Developer</h1>`. the `class` attribute is used for styling, and not need for our purposes here, and the `<br>` is for display purposes. On this page, that is the content that is most important. It is what the page is about. It's about me, and the fact that I am a <a href="/blog/2014/08/15/the-full-stack-web-developer">full-stack web developer</a>. On my blog posts, however, this is no longer what the page is about. So, my `h1` contains the title of that post. All my other heading tags depend on how they might relate to my `h1`. You can have many `h2` - `h6` tags without affecting your SEO at all, but again, only *one* `h1`. The others should be used in order of intended relevance in relation to the `h1`.

Let's add some headings to our page.

{% highlight html %}
<!DOCTYPE html>
<html>
  <head>
    <title>Computer Service Company</title>
  </head>

  <body>
    <h1>Computer Service Company</h1>

    <h2>What this is</h2>
    <p>This is our web page.</p>

    <h2>What we do</h2>
    <p>We offer virus scan and removal, full system clean, upgrades, diagnosis, and all general repairs.</p>
  </body>
</html>
{% endhighlight %}

Notice when we look at <a href="/demos/basic-html-5.html" target="_blank">our page</a> now, headings are rendered quite differently. Although we're not using HTML to style our document, the browser still renders the different headings with different font sizes and weights. The browsers do this so that if something somehow went horribly wrong with your CSS, your users will still have a somewhat valuable experience reading you page.

Continuing on, there are a few directions I can take. We could look into **all** the tags, but who has time for that? We could look at a few more common tags, but we might not need them right away. So, we're going to continue just building our site, and as we hit tags we haven't used yet, I'll explain them as needed. Sound good? Let's go!

##Navigation
Adding navigation to your page is obviously key to allowing your users to move around your site easily. We also want our navigation to allow screen readers (for the visually impaired) and web crawlers (for search engines like Google) to also be able to move around your site easily. In our case, we're going to add our navigation right at the top of the page. Eventually, this will be a nice looking navigation bar, but first we need to just get it on the page. Again, the styling is all coming later. Let's add to our `body` element.

{% highlight html %}
<!DOCTYPE html>
<html>
  ...

  <body>
    <nav>
      <ul>
        <li>
          <a href="services.html">
            Services
          </a>
        </li>

        <li>
          <a href="products.html">
            Products
          </a>
        </li>

        <li>
          <a href="about.html">
            About Us
          </a>
        </li>

        <li>
          <a href="contact.html">
            Contact Us
          </a>
        </li>

      </ul>
    </nav>

    ...
  </body>
</html>
{% endhighlight %}

We can see what we've built <a href="/demos/basic-html-6.html" target="_blank">here</a>. First we added a `nav` element. This is used to tell the browser that the contents are used for *nav*igation purposes. Inside of that, we have a `ul` element. This is an *u*nordered *l*ist. Had I used an `ol` (ordered list) we would see the numbers 1-4 instead of the bullets. I chose to use an unordered list, because although I want them to display in a particular order, the items in the list have no less *meaning* if they are in any other order. Inside of our `ul` we have several `li` elements. These are our *l*ist *i*tems. Finally, nested inside our `li` elements, we see `a` tags. These are *a*nchors and represent links to other pages or content. We currently are using only one attribute with our anchor tags. This is the `href` attribute. This is the *h*yperlink *ref*erence, and tell the browser the **destination** of the link. Again, we'll see here that the browser has added some default styling to our links in order to give them some context until we are able to style them ourselves.

___

This is the very *basic* beginnings of an HTML document, but hopefully this gives you at least some understanding of how HTML is structured. I'll soon be posting on how one might go about styling this page to have it actually looks like something useful. First we'll look at getting started with CSS using [Bootstrap](http://getbootstrap.com), then using our own CSS. During this process we'll also look at expanding on the content of the site. Finally, we'll look at hosting that content somewhere.

For a little more on HTML tags, check out my post on [Semantic HTML](/blog/2014/05/14/semantic-html). Consider [this post](/blog/2014/04/25/title-tags) for tips on creating title tags, and [this one](/blog/2014/07/02/meta-descriptions) for meta descriptions.