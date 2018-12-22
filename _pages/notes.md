---
permalink: /notes/
title: notes
layout: archive
---

<div class="tiles">
{% for post in site.categories.notes %}
{% include post-list.html %}

{% endfor %}

</div><!-- /.tiles -->
