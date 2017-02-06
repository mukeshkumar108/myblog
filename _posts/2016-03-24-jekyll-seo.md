---
layout: post
title:  "Basic on-page SEO with Jekyll"
summary: 3 lines of code, and no additional markup to vertically center an element within another element of unknown height
date:   2016-03-24
published: True
categories: []
tags: [Front-End Dev, Tips]
---

<p class="p-intro">We all know the importance of unique page titles, and page descriptions to assist in your SEO efforts.</p>

###Beyond SEO

In fact I'd argue, this goes beyond SEO and is a best practice that actually provides a better experience for the user. If the page shows up in the search engines, a unique descriptive page title and page description provide better context for the user.

And as well as providing better context for the user, they provide much needed information to the search engines too.

Remember - the search engines want to make sure they provide the best information to the end user.

Jekyl'll actually makes it really simple for us to do this... and we achieve this with  "frontmatter".

At the top of each post - we have our frontmatter. Make sure you have one for title, and one for description. 


###The Solution

```
{% raw %}
<title>
	{% if page.title %}
		{{ page.title }} - {{ site.title }}
	{% else %}
		{{ site.title }}
	{% endif %}
</title>
```
```
{% raw %}
<meta name="description" 
	content="
		{% if page.description %}
			{{ page.description }}
		{% else %}
			{{ site.description }}
		{% endif %}
	">
```
As there you go, it's as simple as that... 

Try it for yourself
