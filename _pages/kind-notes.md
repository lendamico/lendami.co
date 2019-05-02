---
permalink: /kind/notes/
title: notes
layout: archive
---

Notes: They're not quite an article, but maybe a bit more than a tweet?

---

<div>
  {% for post in site.posts %}
    {% if post.kind == "note" %}
      {% include post-list-notes.html %}
    {% else %}
    {% endif %}
  {% endfor %}
</div>
