---
layout: archive
permalink: /speaking/
title: speaking
#image:
#  feature: about-len-damico.jpg
---
I'd love to speak about participatory design, design leadership, or anything else design-related at your next event.

<a href="/contact/" class="btn-gradient">Let's talk!<a>

<div class="tiles">
{% for post in site.posts %}
{% if post.kind == "speaking" %}
	{% include post-grid-speaking.html %}
	{% else %}
	{% endif %}
{% endfor %}
</div><!-- /.tiles -->
