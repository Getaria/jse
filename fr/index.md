---
# You don't need to edit this file, it's empty on purpose.
# Edit theme's home layout instead if you wanna make some changes
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: home
language: fr
---

<div class="row">
{% assign destacados = site.pages | where: 'language', page.language
                                  | where: 'portada', true
                                  | where: 'destacado', true
                                  | sort: 'orden-portada' %}
{% for destacado in destacados %}
  <div class="col-md-6">
    <article>
      <header class="text-center">
        <h1 ><a href="{{ destacado.url | prepend: site.baseurl | prepend: site.url }}" title="{{ destacado.title }}">{{ destacado.title }}</a></h1>
      </header>
      <div class="row">
        <div class="marco-foto">
          <img class="img-responsive center-block"
               src="{{ "/assets/images/pages/" | append: destacado.image-teaser | prepend: site.baseurl | prepend: site.url }}">
        </div>
      </div>
    </article>
  </div>
{% endfor %}
</div>

<div class="row">
{% assign destacados = site.pages | where: 'language', page.language
                                  | where: 'portada', true
                                  | where: 'destacado', false
                                  | sort: 'orden-portada' %}
{% for destacado in destacados %}
  <div class="col-md-4 con-padding">
    <article>
      <header class="text-center">
        {% assign titulo = destacado.titulo-portada %}
        {% if titulo == nil %}{% assign titulo = destacado.title %}{% endif %}
        <h1 class="h2"><a href="{{ destacado.url | prepend: site.baseurl | prepend: site.url }}" title="{{ titulo }}">{{ titulo }}</a></h1>
      </header>
      <div class="row">
        <div class="marco-foto">
          <img class="img-responsive center-block"
               src="{{ "/assets/images/pages/" | append: destacado.image-teaser | prepend: site.baseurl | prepend: site.url }}">
        </div>
      </div>
    </article>
  </div>
{% endfor %}
</div>
