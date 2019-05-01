---
permalink: /articles/
title: articles
layout: archive
---

<div>
  {% for post in site.posts %}
    {% if post.kind == "article" %}
      {% include post-list-articles.html %}
    {% else %}
    {% endif %}
  {% endfor %}
</div>
