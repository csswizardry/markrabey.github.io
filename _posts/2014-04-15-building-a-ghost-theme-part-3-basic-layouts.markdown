---
layout: post
title: Building a Ghost Theme - Part 3 - Basic Layouts
date: 2014-04-15 21:06:44.000000000 -04:00
---
I'm trying to get better about this, but it seems my layouts always start as just an idea in my head. I try to sketch them sometimes, but that rarely works. Rather I tend to just code the HTML and CSS and adjust it until I'm done. I'm trying to take a slightly better approach in this case, though still no sketches. I intend on writing the HTML first, then adding the styles I want. I know I want to use [my own grid system](/blog/2014/04/07/a-simple-css-grid/), so as I go I'll add in the classes I know I'll need for that. Pretty much everything else I'll add in after. I'm starting with my default layout file, 'default.hbs'.


{% highlight html %}
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />

        {{! Page Meta }}
        <title>{{meta_title}}</title>
        <meta name="description" content="{{meta_description}}" />

        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {{! Styles }}
        <link rel="stylesheet" type="text/css" href="{{asset "css/markr-theme-min.css"}}" />

        {{! Ghost Magic }}
        {{ghost_head}}
    </head>
    <body class="{{body_class}}">
        <main class="container">
            {{{body}}}
        </main>

        {{> footer}}
    </body>
</html>
{% endhighlight %}


I also made a file in my `partials` folder called 'footer':


{% highlight html %}
<footer class="container">
    <section class="cell-1-3">
        All content copyright <a href="{{@blog.url}}/">{{@blog.title}}</a> &copy; {{date format="YYYY"}} &bull; All rights reserved.
    </section>
    <section class="cell-1-3">
        <a href="">Markr Theme</a> by <a href="http://markrabey.com">Mark Rabey</a>
    </section>
    <section class="cell-1-3">
        Proudly published with <a href="http://ghost.org">Ghost</a>
    </section>
</footer>
{% endhighlight %}

At this point, if I put the themes into my Ghost install, and set it to the active theme, I would see a lovely blank page. This is because Ghost is actually loading `index.hbs` not `default.hbs`. At the top of `index.hbs` I simply add `{{!< default}}` which means "put everything in this file into the `{{{body}}}` of `default.hbs`. I have to copy my file again into the Ghost install, then restart Ghost. Now refreshing my page, I see the footer, and the page title set to my blog title.

Now let's add some real content. My index page will display a list of recent posts. When `index.hbs` is loaded, it is given an object called `posts`. Using the foreach helper, I can iterate though the posts and output each one:


{% highlight html %}
{{#foreach posts}}
    <article>
        <header class="post-header">
            <h2><a href="{{url}}">{{{title}}}</a></h2>
            <span class="post-meta">
                <time datetime="{{date format='YYYY-MM-DD'}}">{{date format="DD MMM YYYY"}}</time> {{tags prefix="on "}}
            </span>
        </header>
        <section class="post-excerpt">
            {{excerpt}}
        </section>
    </article>
{{/foreach}}

{{pagination}}
{% endhighlight %}


I added a few additional classes I'm sure I'll want. The code called inside curly braces, are properties of the post. There is more I can do with these, but for the time being, I'm actually quite happy with the output. On a default install, here's what the homepage looks like:
{<6>}![](/content/images/blog/2014/Apr/Screen_Shot_2014_04_16_at_10_13_51_AM.png" alt="Homepage)
Now I want to add a basic layout for an individual post. The post page is given the `post` object to utilize. In `post.hbs` I added this code:


{% highlight html %}
{{!< default}}

<article class="post">
    {{#post}}
        <header class="post-header">
            <h2>{{{title}}}</h2>
            <span class="post-meta">
                <time datetime="{{date format='YYYY-MM-DD'}}">{{date format="DD MMM YYYY"}}</time> {{tags prefix="on "}}
            </span>
        </header>
        <section class="post-content">{{content}}</section>
    {{/post}}
</article>
{% endhighlight %}


Again, I put `{{!< default}}` at the top of the page to put all of this content into the `{{{body}}}` of `default.hbs`. Everything inside the `#post` tags pulls data from the post. Now, I copy the files over to my install again and when I click on the post title, I see this:
{<7>}![](/content/images/blog/2014/Apr/Screen_Shot_2014_04_16_at_10_34_40_AM.png "alt="Single Post"title="Single Post)
And if I scroll to the bottom of the page, I see the same footer I had on the home page.

My next step is to start adding some CSS, or rather [LESS](http://lesscss.org "target="_blank), that generates CSS. First, I commited the current changes back to my repository. Just to be safe.

My theme already includes `/assets/css/markr-theme.min.css`, which doesn't exist yet. In [Part 2](/blog/2014/04/15/building-a-ghost-theme-part-2-npm-grunt-less-uglify/), I add some Grunt tasks to my project to automatically regenerate my CSS whenever a LESS file is changed in my `src` directory. I created a file under `/src/less/` called `markr-theme.less`. First I ran my default Grunt task, which starts watching my LESS files. As I mentioned, I want to use the [my own grid system](/blog/2014/04/07/a-simple-css-grid/), so I downloaded it from [GitHub](https://github.com/MarkRabey/markr-grid), and copied the file `/src/less/markr-grid.less` into the LESS folder for my theme. At the top of `markr-theme.less` I added `@import url(markr-grid.less);` and upon saving, my CSS was updated in the `dist` folder. Nice and simple. Now, copying my CSS file to my Ghost install and reloading that page, I see this:
{<9>}![](/content/images/blog/2014/Apr/Screen_Shot_2014_04_16_at_11_08_53_AM.png"alt="Basic Grid)
There isn't major change here, except that my grid is now included in theme. You can see it pretty clearly in the footer. Coming up in Part 4, I'll add a site header, maybe some navigation, fonts, and make it things actually usable. I'm hoping to deploy this to my live site very soon!
