---
permalink: /posts/
title: all posts
layout: archive
---

* View posts [by year]({{ site.url}}/archive/).
* View posts by kind: [Articles]({{ site.url}}/articles/), [Notes]({{ site.url}}/notes/), [Links]({{ site.url}}/links/).
* View posts by category: [design]({{ site.url}}/design/), [music]({{ site.url}}/music/), [coding]({{ site.url}}/coding/), [Penn State]({{ site.url}}/penn-state/).

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
