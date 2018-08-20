---
layout: archive
permalink: /speaking/
title: "speaking"
#image:
#  feature: about-len-damico.jpg
---
If you'd like me to speak at your event about participatory design, the Design Studio method, or anything else design-related, please contact me.

<a href="/contact/" class="btn-info">Contact Len<a>

<div class="tiles">
{% for post in site.categories.speaking %}
	{% include post-grid.html %}
{% endfor %}
</div><!-- /.tiles -->
