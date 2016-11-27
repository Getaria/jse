---
title: El desembarco de Elkano (1922-2014)
layout: page
language: es
navegacion: conmemoraciones
orden: 2
---

{% assign conmemoracion = page.title | slugify %}

<div class="row isotope" markdown="1">
## El desembarco
{:.isotope-item .tid-3 .clearfix}

  <div class="isotope-item tid-3 clearfix" markdown="1">

  Representación del desembarco de J.S. Elkano junto con los 17 supervivientes en la nao Victoria el 6 de Septiembre de 1522 en Sanlucar de Barrameda.

  </div>
  <ul class="list-unstyled" data-sort-id="fotos-centenario">

    {% assign fotos = site.fotos | where: 'conmemoracion', conmemoracion
                                 | where: 'categoria', 'el desembarco' %}
    {% for foto in fotos %}

      <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4 isotope-item tid-3">
        <a href="{{ "/assets/images/fotos/" | append: foto.image | absolute_url }}">
          <img src="{{ "/assets/images/fotos/350x233/" | append: foto.image | absolute_url }}" alt="{{ foto.title }}" class="img-responsive thumbnail">
      </a>
      </div>
    {% endfor %}

  </ul>
</div>

<div class="row isotope" markdown="1">
## Los 5 continentes
{:.isotope-item .tid-3 .clearfix}

  <div class="isotope-item tid-3 clearfix" markdown="1">

  En representación de los 5 continentes, 5 jóvenes recorren la plaza mayor y acompañan a J.S Elkano en la réplica de la nao Victoria.

  </div>
  <ul class="list-unstyled" data-sort-id="fotos-centenario">

    {% assign fotos = site.fotos | where: 'conmemoracion', conmemoracion
                                 | where: 'categoria', 'los 5 continentes' %}
    {% for foto in fotos %}

      <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4 isotope-item tid-3">
        <a href="{{ "/assets/images/fotos/" | append: foto.image | absolute_url }}">
          <img src="{{ "/assets/images/fotos/350x233/" | append: foto.image | absolute_url }}" alt="{{ foto.title }}" class="img-responsive thumbnail">
      </a>
      </div>
    {% endfor %}

  </ul>
</div>

<div class="row isotope" markdown="1">
##  Honores
{:.isotope-item .tid-3 .clearfix}

  <div class="isotope-item tid-3 clearfix" markdown="1">

  Representación de la llegada de Elkano a Valladolid para dar parte de su hazaña al Rey Carlos I de España. El rey le otorga 500 ducados y una esfera del mundo con la leyenda en latín: Primus circumdedisti me (<<El primero que me circundaste>>).

  </div>
  <ul class="list-unstyled" data-sort-id="fotos-centenario">

    {% assign fotos = site.fotos | where: 'conmemoracion', conmemoracion
                                 | where: 'categoria', 'honores' %}
    {% for foto in fotos %}

      <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4 isotope-item tid-3">
        <a href="{{ "/assets/images/fotos/" | append: foto.image | absolute_url }}">
          <img src="{{ "/assets/images/fotos/350x233/" | append: foto.image | absolute_url }}" alt="{{ foto.title }}" class="img-responsive thumbnail">
      </a>
      </div>
    {% endfor %}

  </ul>
</div>
