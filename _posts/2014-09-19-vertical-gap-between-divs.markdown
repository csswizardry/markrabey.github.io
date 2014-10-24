---
tags: css, html, grid layout
---

Recently, I discovered a very simple solution to what I believe is a pretty major problem. I first encountered the issue when first building [my own grid](/blog/2014/04/07/making-the-grid-responsive/), and I kind of "hacked" around it. I've been working on rewriting that grid (coming soon), and decided to find a better solution.

##The Symptom
In a word: "whitespace". Simplest example I can think of, is 2 `<div>`s with CSS that includes `display: inline-block;` and `width: 50%;` *should* be placed side by side. **BUT THEY ARE NOT**

Take a look:

<p data-height="260" data-theme-id="8481" data-slug-hash="JrEpL" data-default-tab="result" data-user="MarkRabey" class='codepen'>See the Pen <a href='http://codepen.io/MarkRabey/pen/JrEpL/'>Grid System Demo</a> by Mark Rabey (<a href='http://codepen.io/MarkRabey'>@MarkRabey</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>


##The Solution(s)...maybe
There are many ways I could have solved this. Simply adding `float: left;` to the `.grid__item` class and that would work, but it's not really accurate. In the context of this grid, the elements are *not* floating. They are placed beside each other. This is essentially what I ended up doing in that first grid, but it lead to issues later having to clear that float.

Of course making them slightly less than 50% width makes them appear on the same line, but that's not quite right. I can play with margins, but that doesn't really make sense. Again, trying to be somewhat semantic in my thinking, each `.grid__item` is independent, so adjusting the margin and padding to accommodate others isn't really accurate either. 

There are a few other CSS hacks, but these aren't likely to work in every browser, and may not work forever (I might post about these soon too). I don't really want to rely on CSS to fix the issue at all, because it's not really a CSS problem.

##The Problem
The actual problem lies in the HTML itself. Or at least in how some browsers render the HTML. That whitespace between the two `.grid__item`s is actually rendered as a small gap. Currently in my browser this gap is 5 pixels. I'm honestly not sure if this changes or why it's there, but I want it gone!

##The *Actual* Solution (mine at least)
Remove the whitespace! I don't want to just remove that gap. I still need to be able to read the code, and that won't go well if I remove the gap entirely. I came up with 2 solutions. In both cases I am *leaving the CSS alone*! I'm not sure which on I prefer yet. In one, I add an empty comment (`<!--  -->`) between the `<div>`s. The other one is to not close one `<div>` until the next. Here's what that looks like:

<div data-height="268" data-theme-id="8481" data-slug-hash="Bqdxs" data-default-tab="html" data-user="MarkRabey" class='codepen'><pre><code>&lt;div class=&quot;grid&quot;&gt;
  &lt;div class=&quot;grid__item&quot;&gt;
    &lt;p class=&quot;demo-content&quot;&gt;
      Grid Item 1
    &lt;/p&gt;
  &lt;/div&gt;&lt;!--

  --&gt;&lt;div class=&quot;grid__item&quot;&gt;
    &lt;p class=&quot;demo-content&quot;&gt;
      Grid Item 2
    &lt;/p&gt;
  &lt;/div&gt;&lt;!--
  
  --&gt;&lt;div class=&quot;grid__item&quot;&gt;
    &lt;p class=&quot;demo-content&quot;&gt;
      Grid Item 3
    &lt;/p&gt;
  &lt;/div
 
  &gt;&lt;div class=&quot;grid__item&quot;&gt;
    &lt;p class=&quot;demo-content&quot;&gt;
      Grid Item 4
    &lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
<p>See the Pen <a href='http://codepen.io/MarkRabey/pen/Bqdxs/'>Grid System Demo</a> by Mark Rabey (<a href='http://codepen.io/MarkRabey'>@MarkRabey</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
</div><script async src="//codepen.io/assets/embed/ei.js"></script>

I'm thinking I prefer the latter method. It seems more readable, but I'll likely go back and forth for few weeks before deciding for sure. Thoughts and comments appreciated.