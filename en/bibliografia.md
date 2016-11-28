---
title: Bibliografía
layout: page
language: en
navegacion: testimonios
orden: 1
---

{% for item in site.data.bibliografia %}
- **{{ item.titulo }}**; {% for autor in item.autores %}{{ autor }}{% if forloop.last == false %}, {% endif %}{% endfor %}; {{ item.ubicacion }}
{:.bibliografia .h3}
{% endfor %}
