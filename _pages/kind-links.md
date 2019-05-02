---
permalink: /kind/links/
title: links
layout: archive
---

---

<div>
  {% for post in site.posts %}
    {% if post.kind == "link" %}
      {% include post-list-links.html %}
    {% else %}
    {% endif %}
  {% endfor %}
</div>
