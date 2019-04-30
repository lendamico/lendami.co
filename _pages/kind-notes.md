---
permalink: /notes/
title: notes
layout: archive
---

<div>
{% for post in site.posts %}
{% if post.kind == "note" %}
{% include post-list-notes.html %}
{% else %}
{% endif %}

{% endfor %}

</div><!-- /.tiles -->
