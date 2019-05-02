---
permalink: /posts/
title: all posts
layout: archive
---

{% include post-nav.html %}

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
