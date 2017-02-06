---
layout: post
title:  "Vertical Centering made easy with FlexBox"
summary: 3 lines of code, and no additional markup to vertically center an element within another element of unknown height
date:   2016-03-23
published: True
categories: []
tags: [Front-End Dev, Tips]
---

<p class="p-intro">Vertically centering items has always been a bit of a hack. Especially when the height of the parent element is unknown.</p>

###The Problem
Whilst designing this site, I realised the header, which is displayed as a permanent sidebar on desktop displays, consisted of two child elements which I wanted to be always centered.

The height of the parent element (the header in this example) was flexible - its height would be dependent on the browser height, therefore unknown. 

But regardless of the size - I want to make sure the two child elements are always centered.

<figure class="inline-img"><img src="{{ site.baseurl }}/assets/dist/images/flexbox-vertically-center.png" /></figure>

As shown above, I want the height above the two elements ('x'), to be the same as the height below the two elements ie. vertically centered.

###The Solution

Without adding any further markup, we can just use three lines of CSS to the parent element:  

{% highlight ruby %}
display: flex;
flex-direction: column;
justify-content: center;
{% endhighlight %}

###How it Works

Firstly - we tell it we want to use the flexbox display model - `display: flex`. 

Next, we want to declare the direction of the flex modules - `flexbox-direction: column`. Column means they will be stacked, as opposed to row - which is the default display - and will flow elements left to right.

And then thirdly - we tell it we want to center the content - `justify-content: center`.

As there you go, it's as simple as that... 

Try it for yourself
