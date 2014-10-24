---
layout: post
title: Writing Good CSS
---

I'm always trying to learn new things. However, more important than learning new things, I also try to learn ways to *improve* the way I already do things. Both at work and in projects I work on in my "spare time", the thing I've always wanted to improve was my CSS. I've always felt I'm pretty good when it comes to CSS, but I've always found it messy to read, and often hard to maintain. What I've been trying to do, is figure out what makes good, readable, maintainable CSS.

##The Problems
There are several things that bother me in CSS. The most common annoyances I have are:

- repeating common code
- browser prefixes
- lack of comments
- over qualified selectors
- poor class names

When is comes to my own projects, I take full responsibility for my code. I rarely comment my CSS, and really often treat it as an afterthought. That's just wrong. For a long time I figured that my class names are "semantic" and it's just me doing things, so there's no need to explain the code, or little "hacks", or anything. Coming back to code on a long-standing project quickly proves this theory to be *very* wrong.

When it comes to code at work, I can't take all the blame. In fact, part of the issue is the number of people who have had there hands in there. Currently our team has 7 of us who at some point have written CSS for our sites, with another 6-8 that have come and gone. Each member of the team has varying levels of knowledge and ability regarding CSS. As well, as is often the case with long-standing projects, some of the code is **old**. A lot of it is pre-CSS3, or pre-whatever-trend-was-cool-5-years-ago. In both cases there were often different ways of doing things at the time it was written, and in some cases, a natural lack of knowledge. I've also learned that some programmers will insist that their code is "self-documenting". If you're unfamiliar with that term, it translates to "my code has no comments".


##Solutions
<img src="/content/images/blog/2014/Sep/css-guidelines.png" alt="CSS Guidelines" class="post__image post__image--centered">
While nothing is perfect, I believe there are things we can do to improve our code. I recently came across <a href="http://cssguidelin.es"  target="_blank">CSS Guidelines</a> by <a href="https://twitter.com/csswizardry" target="_blank">Harry Roberts</a>. I'm still working on reading it all in detail, but so far it holds true to the promise of "High-level advice and guidelines for writing sane, manageable, scalable CSS".



### Preprocessors

#### LESS

#### SASS

### BEM

### Style guide