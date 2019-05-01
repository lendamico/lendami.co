---
permalink: /articles/
title: articles
layout: archive
---

<div>
  {% for post in site.posts %}
    {% if post.kind == "post" %}
      {% include post-list.html %}
    {% else %}
    {% endif %}
  {% endfor %}
</div>
