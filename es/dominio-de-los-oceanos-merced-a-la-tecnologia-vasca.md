---
title: Dominio de los océanos merced a la tecnología vasca
layout: page
language: es
navegacion: historia
orden: 4
---

## Instrumentos de navegación

{% assign instrumentos = site.instrumentos | where: 'language', page.language | sort: 'orden' %}
{% for instrumento in instrumentos %}
  {% include instrumento.html %}
{% endfor %}
