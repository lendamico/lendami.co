---
image:
  feature: home.jpg
layout: home
permalink: /
title: Len Damico
excerpt: user experience design leadership

---
## recent posts
<div class="tiles">
{% for post in site.posts limit:4 %}
	{% include post-grid.html %}
{% endfor %}
</div>
