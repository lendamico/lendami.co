---
image:
#  feature: patrick-tomasso-208114-unsplash.jpg
layout: archive
permalink: /
title: Welcome!
excerpt: I'm Len Damico, Head of Design at Arcweb Technologies.
---
<a href="/about/" class="btn-gradient">about me</a>

<hr />

#### recent posts
<div class="tiles">
{% for post in site.posts limit:4 %}
	{% include post-grid.html %}
{% endfor %}
</div>
