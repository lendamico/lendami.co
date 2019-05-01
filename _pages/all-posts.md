---
permalink: /posts/
title: all posts
layout: archive
---

View posts [by year]({{ site.url}}/archive/), or by kind: [Articles]({{ site.url}}/articles/), [Notes]({{ site.url}}/notes/), [Links]({{ site.url}}/links/).
<div>
  {% for post in site.posts %}
    {% if post.kind == "link" %}
      {% include post-list-links.html %}
    {% elsif post.kind == "note" %}
      {% include post-list-notes.html %}
    {% elsif post.kind == "article" %}
      {% include post-list-articles.html %}
    {% endif %}
  {% endfor %}
</div>
