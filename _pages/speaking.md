---
layout: archive
permalink: /speaking/
title: "speaking"
#image:
#  feature: about-len-damico.jpg
---
I'd love to speak about participatory design, the Design Studio method, or anything else design-related at your next event.

<a href="/contact/" class="btn-info">Contact Len<a>

<div class="tiles">
{% for post in site.categories.speaking %}
	{% include post-grid.html %}
{% endfor %}
</div><!-- /.tiles -->
