---
layout: page
title: Work
permalink: /work/
---

  <ul class="portfolio">
  {% for project in site.portfolio limit:3 %}
      <li>
        <h1>
          <a class="post-link" href="{{ project.url | prepend: site.baseurl }}">{{ project.title }}</a>
        </h1>
        <p>{{ project.summary }}</p>
      </li>
  {% endfor %}
  </ul>

  <!-- <p class="rss-subscribe">subscribe <a href="{{ "/feed.xml" | prepend: site.baseurl }}">via RSS</a></p> --> 
