---
layout: post
title: Writing Good CSS
tags: css, semantics, less, sass, bem, oocss
---

I'm always trying to learn new things. However, more importantly, I also try to learn ways to *improve* the way I already do things. Both at my full-time gig and for client side-projects, the thing I've always wanted to improve was my CSS. I've always felt I'm pretty good when it comes to CSS, but I've always found it messy to read, and often hard to maintain. What I've been trying to do, is find out what makes good, readable, maintainable CSS. I think I've come up with (and found) some ways to make this all possible.

##The Problems
There are several things that bother me in CSS. The most common annoyances I have are:

- repeating common code
- browser prefixes
- lack of comments
- over qualified selectors
- poor class names

When is comes to my own projects, I take full responsibility for my code. I rarely comment my CSS, and really often treat it as an afterthought. That's just wrong. For a long time I figured that my class names are "semantic" and it's just me doing things, so there's no need to explain the code, or little "hacks", or anything. Coming back to code on a long-standing project quickly proves this theory to be *very* wrong.

When it comes to code at work, I can't take all the blame. In fact, part of the issue is the number of people who have had there hands in there. Currently our team has 7 of us who at some point have written CSS for our sites, with another 6-8 that have come and gone over the years. Each member of the team has varying levels of knowledge and ability regarding CSS. As well, as is often the case with long-standing projects, some of the code is **old**. A lot of it is pre-CSS3, or pre-whatever-trend-was-cool-5-years-ago. In both cases there were often different ways of doing things at the time it was written, and in some cases, a natural lack of knowledge. I've also learned that some programmers will insist that their code is "self-documenting". If you're unfamiliar with that term, it translates to "my code has no comments".

##Solutions
<p class="text-center">
<img src="/content/images/blog/2014/Sep/css-guidelines.png" alt="CSS Guidelines" class="post__img"> 
</p>

While nothing is perfect, I believe there are things we can do to improve our code. I recently came across <a href="http://cssguidelin.es"  target="_blank">CSS Guidelines</a> by <a href="https://twitter.com/csswizardry" target="_blank">Harry Roberts</a>. I'm still working on reading it all in detail, but so far it holds true to the promise of "High-level advice and guidelines for writing sane, manageable, scalable CSS".

### Comments
While <a href="http://cssguidelin.es"  target="_blank">CSS Guidelines</a> gives specifics on comment styles, I personally just try to put ***something*** in to tell future me what I was thinking. I start every component with a comment representing the title, them *details* on the intent of the component. When using a preprocessor I style specific comments to either be included with the CSS, or skipped by the preprocessor. I'm still working on this part, and trying to get into the habit of putting *something*, ***anything***.

### Object-orientation
Object-orientation is a programming paradigm that breaks big things into small things. From Wikipedia:

>Object-oriented programming (OOP) is a programming paradigm that represents the concept of ‘objects’ […] which are usually instances of classes, [and] are used to interact with one another to design applications and computer programs.

When it comes to CSS, we call this object-oriented CSS, or *OOCSS*. The basic concept breaks apart the *structure* of the element, from the *skin* of the element. This means we can easily reuse any recurring design patterns, without necessarily reusing the specific implementation details at the same time. OOCSS focuses heavily on the reuse of code, which makes us faster, and can keep the size of our codebase down.

I think of structural aspects like skeletons; common frames that give constructs known as *object*. These objects are simple design patterns that are free from any cosmetics. We abstract the structure from a set of components in order to have a generic object.

We then optionally add the "skin" layer to our structure so we can give the abstractions a specific look and feel. For example (taken from <a href="http://cssguidelin.es"  target="_blank">CSS Guidelines</a>):

    /**
     * A simple, design-free button object. Extend this object with a `.btn--*` skin
     * class.
     */
    .btn {
        display: inline-block;
        padding: 1em 2em;
        vertical-align: middle;
    }

    /**
     * Positive buttons’ skin. Extends `.btn`.
     */
    .btn--positive {
        background-color: green;
        color: white;
    }

    /**
     * Negative buttons’ skin. Extends `.btn`.
     */
    .btn--negative {
        background-color: red;
        color: white;
    }

Here we see how the `.btn` class simply provides structure to an element, but has nothing concerning cosmetics. We can *extend* `.btn` with a second class, like `.btn--positve` to give that element more specific styling:

    <button class="btn  btn--positive">OK</button>

I much prefer to use multiple classes in my HTML, over using something like `@extend` in a preprocessor. This gives me more visibility in my HTML allowing me to quickly see what classes are applied to my element. It also means that my classes are not tightly bound to other styles in my CSS. It sort of helps OOCSS following the concepts of *encapsulation*.

### BEM
*BEM* (*Block, Element, Modifier*), is a front-end methodology developed at Yandex. BEM is actually a very complete methodology, and I honestly haven't dug into all the details, but what I'm concerned with is simply the naming convention. I'm using BEM-*like* naming conventions. The concept is the same, but the exact syntax may differ slightly.

BEM places classes into three groups:
- Block: the root or base of a component
- Element: a component inside of a Block
- Modifier: a variation or extension of the Block

A very basic analogy (**not** an example):

    .dog {}
    .dog__tail {}
    .dog--small {}

Elements are delimited with two underscores (__), and modifiers are delimited with two hyphens (--).

In the above analogy, we see that `.dog` is the Block, the root of element. Then, `.dog__tail` is an Element, it is a smaller part of a `.dog` Block. Lastly, `.dog--small` is Modifier, a specific variation of the `.dog` Block. You can also apply Modifiers to Elements. for example, we could have `.dog__tail--short` to again, specify a variation on the `dog__tail` Element.

In some cases I may want multiple words for Blocks, Elements or Modifiers. In any case, these are separated with a single hyphen (-), and classes are always written in *lowercase*.

### Preprocessors
I've been spending time working CSS Preprocessors into my work flow, and so far, it's been incredibly valuable. CSS Preprocessors take code that is written in a preprocessed language and convert them to good old CSS. They are *not* CSS, which means they are not bound be the same rules and limitations of CSS. While CSS is great, it doesn't always allow us to easily do the things we'd like to do.

For example, one thing that would be really nice in CSS is *variables*. Maybe you want something to have the left margin of one element the same as the width of another, and suddenly someone decides that those numbers need to change. Since they're the same number, and your layout might rely on that number, you have to change it more than one place. But with a *varibale* you could change it in just *one* place and have it reflect in the whole layout. Of course, there is a lot more to offered in preprocessors than variables, but that's a start!

You obviously don't *have* to use a preprocessor, but I think you'll find most people who do, won't go back. I know I won't. The gain in flexibility, and increased readability are something I just can't give up. Simply being able to use *variables* and *[mixins](/blog/2014/04/14/css-transitions/)* is enough to keep me hooked.

There are several preprocessors available, but the only 2 I've really looked at and used at all are *[LESS](http://lesscss.org)* and *[SASS](http://sass-lang.com/)*. Please take a look, and consider adding one of these to work flow, you won't look back. In an upcoming post, I'll go into more detail on the 2, and what I like or dislike with each one.

---

My real point here, is that CSS *can* be better. Everything *can* be better. Someone told me recently in a comment on a post on Reddit that "CSS doesn't have semantics". I wholeheartedly disagree. CSS 100%, without a doubt *can* be semantic. Using OOCSS and BEM does, in fact, give your CSS very semantic meaning. This doesn't mean it's *easy* right off the bat, but it's well worth exploring. Combine that with CSS Preprocessors, and you have the potential for very readable, maintainable, and scalable CSS. I'd also like to note that this not only makes you CSS (preprocessed or not) more readable, but also makes your HTML more readable, by applying *semantic* class names to elements.

---

## TL;DR
Ok, maybe that was a lot - to summarize, write better CSS by doing this:

- Object Oriented CSS
  -- each class does one thing
  -- it does it well, it does it right
- Block, Element, Modifier (BEM) style class names
  * Block: `.grid`
  * Element: `.grid__item` (2 underscores)
  * Modifier: `.grid--wide` (2 hyphens)
- Preprocessors are awesome, check them out
  * [LESS](http://lesscss.org)
  * [SASS](http://sass-lang.com/)
  * or find others: [8 CSS preprocessors to speed up development time](http://www.catswhocode.com/blog/8-css-preprocessors-to-speed-up-development-time)

Eventually, I will write more detailed posts about each of these areas. In the meantime, really, take a look at <a href="http://cssguidelin.es"  target="_blank">CSS Guidelines</a>.
