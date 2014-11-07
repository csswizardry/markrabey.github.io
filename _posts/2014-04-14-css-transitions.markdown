---
layout: post
title: CSS Transitions
date: 2014-04-14 12:15:07.000000000 -04:00
tags: css, less, mixins
---
Wow, I missed something. Or at least I was thinking about it backwards at the time of writing about [LESS mixins](/blog/2014/04/13/less-mixins/) ([and this update to it](/blog/2014/04/14/a-little-update-to-transitions/)). I totally missed on how CSS transitions actually work, and what the values are. I mean, I still achieved my desired result, but I was off on actual implementation.


## What's the problem?
My **_wrong_** use of a transition was in a LESS mixin that looked like this:


{% highlight css %}
.transition(@property:left,@ease-in-duration: 0.3s,@ease-out-duration: 0s) {
    transition: @property @ease-in-duration ease-in-out @ease-out-duration;
    -webkit-transition: @property @ease-in-duration ease-in-out @ease-out-duration;
    -moz-transition: @property @ease-in-duration ease-in-out @ease-out-duration;
    -o-transition: @property @ease-in-duration ease-in-out @ease-out-duration;
}
{% endhighlight %}

This isn't terrible. Like I said, I achieved the desired result. The issue is really in the naming of my variables. The first one, `@property`, is accurate. It specifies which property is being transitioned. However, `@ease-in-duration` should really just be `@duration`. It defines simply that, the duration of the transition. I have no idea why I named it what I did, but I have a _much_ clearer understanding of it now. My 3<sup>rd</sup> variable, `@ease-out-duration` is the worst. Just stupid of me. This value has nothing at all to do with 'easing', in or out. It is actually the delay of the transition.


## How to fix it
There are actually 4 different properties that can be set on a transition. Using only `transition:`, is actually short hand for individually defining each property. For example, using the default in my LESS, the resulting CSS would have looked like this (plus definitions with browser prefixes):

{% highlight css %}
transition: left 0.3s ease-in-out 0s;
{% endhighlight %}

This is, in fact, shorthand for this:

{% highlight css %}
transition-property: left;
transition-duration: 0.3s;
transition-timing-function: ease-in-out;
transition-delay: 0s;
{% endhighlight %}

The first property is `transition-property`. This can actually specify more than just one CSS property should be transitioned. Possible values:
<table>
	<thead>
    	<tr>
        	<th>Value</th>
            <th>Description</th>
        </tr>
   	</thead>
    <tbody>
    	<tr>
        	<td>none</td>
            <td>
            	No property will get a transition effect
            </td>
        </tr>
        <tr>
        	<td>all</td>
            <td>
            	Default value. All properties will get a transition effect
            </td>
        </tr>
        <tr>
        	<td><em>property</em></td>
            <td>
            	Defines a comma separated list of CSS property names the transition effect is for
            </td>
        </tr>
        <tr>
        	<td>initial</td>
            <td>
            	Sets this property to its default value.
            </td>
        </tr>
        <tr>
        	<td>inherit</td>
            <td>
            	Inherits this property from its parent element
            </td>
        </tr>
    </tbody>
</table>

Next is the `transition-duration` property. This sets the amount of time (seconds or milliseconds) a transition takes to complete. Possible values:
<table>
	<thead>
    	<tr>
        	<th>Value</th>
            <th>Description</th>
        </tr>
   	</thead>
    <tbody>
    	<tr>
        	<td><em>time</em></td>
            <td>
            	Specifies how many seconds or milliseconds a transition effect takes to complete. Default value is 0, meaning there will be no effect
            </td>
        </tr>
        <tr>
        	<td>initial</td>
            <td>
            	Sets this property to its default value.
            </td>
        </tr>
        <tr>
        	<td>inherit</td>
            <td>
            	Inherits this property from its parent element
            </td>
        </tr>
    </tbody>
</table>

After durations is `transition-timing-function`. This is the one I didn't have as a variable in my mixin, but should have. This specifies the speed curve of the transition. Possible values:

<table>
	<thead>
    	<tr>
        	<th>Value</th>
            <th>Description</th>
        </tr>
   	</thead>
    <tbody>
    	<tr>
        	<td>ease</td>
            <td>
            	Default value. Specifies a transition effect with a slow start, then fast, then end slowly (equivalent to cubic-bezier(0.25,0.1,0.25,1))
            </td>
        </tr>
        <tr>
        	<td>linear</td>
            <td>
            	Specifies a transition effect with the same speed from start to end (equivalent to cubic-bezier(0,0,1,1))
            </td>
        </tr>
        <tr>
        	<td>ease-in</td>
            <td>
            	Specifies a transition effect with a slow start (equivalent to cubic-bezier(0.42,0,1,1))
            </td>
        </tr>
        <tr>
        	<td>ease-out</td>
            <td>
            	Specifies a transition effect with a slow end (equivalent to cubic-bezier(0,0,0.58,1))
            </td>
        </tr>
        <tr>
        	<td>ease-in-out</td>
            <td>
            	Specifies a transition effect with a slow start and end (equivalent to cubic-bezier(0.42,0,0.58,1))
            </td>
        </tr>
        <tr>
        	<td>cubic-bezier(n,n,n,n)</td>
            <td>
            	Define your own values in the cubic-bezier function. Possible values are numeric values from 0 to 1
            </td>
        </tr>
        <tr>
        	<td>initial</td>
            <td>
            	Sets this property to its default value.
            </td>
        </tr>
        <tr>
        	<td>inherit</td>
            <td>
            	Inherits this property from its parent element
            </td>
        </tr>
    </tbody>
</table>

The final property, `transition-delay`, specifies when the effect will start. Same possible values as duration:

<table>
	<thead>
    	<tr>
        	<th>Value</th>
            <th>Description</th>
        </tr>
   	</thead>
    <tbody>
    	<tr>
        	<td><em>time</em></td>
            <td>
            	Specifies how many seconds or milliseconds a transition effect takes to complete. Default value is 0, meaning there will be no effect
            </td>
        </tr>
        <tr>
        	<td>initial</td>
            <td>
            	Sets this property to its default value.
            </td>
        </tr>
        <tr>
        	<td>inherit</td>
            <td>
            	Inherits this property from its parent element
            </td>
        </tr>
    </tbody>
</table>

So, now that I have a clearer understanding of these properties, my LESS mixin looks like this:

{% highlight css %}
.transition(@property:left,@duration: 0.3s,@timing-function:ease-in-out,@delay: 0s) {
    transition: @property @duration @timing-function @delay;
    -webkit-transition: @property @duration @timing-function @delay;
    -moz-transition: @property @duration @timing-function @delay;
    -o-transition: @property @duration @timing-function @delay;
}
{% endhighlight %}

I can now pass in all the options, and they are accurately named.

More mixins coming soon...
