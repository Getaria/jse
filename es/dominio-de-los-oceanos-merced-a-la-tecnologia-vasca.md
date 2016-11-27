---
title: Dominio de los océanos merced a la tecnología vasca
layout: page
image-teaser: brújula.png
language: es
navegacion: historia
orden: 4
portada: true
destacado: false
titulo-portada: Instrumentos de navegación
orden-portada: 3
---

## Instrumentos de navegación

{% assign instrumentos = site.instrumentos | where: 'language', page.language | sort: 'orden' %}
{% for instrumento in instrumentos %}
  {% include instrumento.html %}
{% endfor %}
