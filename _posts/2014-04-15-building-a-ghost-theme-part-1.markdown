---
layout: post
title: Building a Ghost Theme - Part 1 - Folder & File Structure
date: 2014-04-15 15:31:50.000000000 -04:00
---
As I mentioned in this [this post](/blog/2014/04/05/its-only-temporary/), I started out this blog with a theme made by someone else. It was a great theme created by [Dale-Anthony](http://daleanthony.com/ "target="_blank), but I really wanted to build my own.


## Project Setup
As I begin all projects lately, I actually started by creating a repository on [GitHub](http://github.com "target="_blank). I included their default .gitignore file for Node projects, and the most basic of README files. Then I cloned that repository to my local machine, and built my folder structure. From the beginning I have planned on using [LESS](http://lesscss.org) to build my CSS, and make use of [Grunt](http://gruntjs.com "target="_blank) tasks to compile this (and do some other things). For this project, my base folder structure looks like this:

{% highlight bash %}
.
└── project-name
    ├── dist
    |   └── assets
    |       ├── css
    |       ├── fonts
    |       ├── images
    |       └── js
    └── src
        ├── css
        ├── js
        └── less
{% endhighlight %}


Inside my main folder structure I add package.json and my Grunt.


{% highlight bash %}
.
└── project-name
    ├── dist
    |   └── assets
    |       ├── css
    |       ├── fonts
    |       ├── images
    |       └── js
    ├── src
    |   ├── css
    |   ├── js
    |   └── less
    ├── .gitignore
    ├── Gruntfile.js
    ├── package.json
    └── README.md
{% endhighlight %}


The `dist` folder is what will hold the files that actually get put into my Ghost install folder to be used as a theme. This folder structure is what is needed for all Ghost themes. The `src` folder is where I put all my LESS, the resulting CSS, and any JavaScripts I write. In other projects, I often have another folder under 'src' called `views` that contains precompiled views, usually writen in [Jade](http://jade-lang.com/). In the case of Ghost, the themes use [Handlebars](http://handlebarsjs.com/), but I don't need them compiled from that at all, so I can put them directly in my `dist` folder.

All Ghost themes require only 2 files:

1. index.hbs
2. post.hbs

The first one, `index.hbs`, is what will display on the homepage. The second, `post.hbs`, is the template called for viewing an individual post. I also want to add different views for pages and errors, as well as a default layout for all pages. I'm also adding a folder called `partials` to hold 'snippets' like footers, headers, menus, etc. Now my `dist` folder structure looks like this:


{% highlight bash %}
.
└── project-name
    ├── dist
    |   └── assets
    |   |   ├── css
    |   |   ├── fonts
    |   |   ├── images
    |   |   └── js
    |   ├── partials
    |   ├── error.hbs
    |   ├── index.hbs
    |   ├── page.hbs
    |   └── post.hbs
    ...
{% endhighlight %}

I don't have partials determined yet, so I haven't added files for those. At this post, I commit my changes to my [repository on GitHub](https://github.com/MarkRabey/markr-ghost-theme). Git doesn't push or commit empty folders. This means they don't appear in the repository, but they are in my local structure. I can still work with them as needed, and they will appear once I commit files to them. The problem is switching machines, I don't want to have to rebuild this folder structure. To temporarily solve this, I'm putting an empty file in each folder, just to get the folders into the repository. ~~I'll get writing code in Part 2, coming soon.~~ I'll get the package.json and Gruntfile written for Part 2, [available here](/blog/2014/04/15/building-a-ghost-theme-part-2-npm-grunt-less-uglify/).

For shits and giggles, here's a look at the whole structure:


{% highlight bash %}
.
└── project-name
    ├── dist
    |   └── assets
    |   |   ├── css
    |   |   ├── fonts
    |   |   ├── images
    |   |   └── js
    |   ├── partials
    |   ├── error.hbs
    |   ├── index.hbs
    |   ├── page.hbs
    |   └── post.hbs
    ├── src
    |   ├── css
    |   ├── js
    |   └── less
    ├── .gitignore
    ├── Gruntfile.js
    ├── package.json
    └── README.md
{% endhighlight %}

