---
title: El desembarco de Elkano (1922-2014)
layout: page
language: es
navegacion: conmemoraciones
orden: 2
galeria:
  el desembarco:
    - DSC_5874.jpg
    - DSC_5880.jpg
    - DSC_5894.jpg
    - DSC_5892.jpg
    - DSC_5896.jpg
    - DSC_5900.jpg
    - DSC_5901.jpg
    - DSC_5904.jpg
    - DSC_5911.jpg
    - DSC_5912.jpg
  los 5 continentes:
    - DSC_6014.jpg
    - DSC_6029.jpg
    - DSC_6049.jpg
    - DSC_6082.jpg
    - DSC_6122.jpg
    - DSC_6180.jpg
    - DSC_6208.jpg
  honores:
    - DSC_6137.jpg
    - DSC_6138.jpg
    - DSC_6139.jpg
    - DSC_6142.jpg
    - DSC_6152.jpg
    - DSC_6201.jpg
    - DSC_6265.jpg
    - DSC_6276.jpg
    - DSC_6280.jpg
    - DSC_6305.jpg
---

<div class="row isotope" markdown="1">
## El desembarco
{:.isotope-item .tid-3 .clearfix}

  <div class="isotope-item tid-3 clearfix" markdown="1">

  Representación del desembarco de J.S. Elkano junto con los 17 supervivientes en la nao Victoria el 6 de Septiembre de 1522 en Sanlucar de Barrameda.

  </div>
</div>
<div class="row isotope">
  <ul class="list-unstyled" data-sort-id="fotos-centenario">
    {% for item in page.galeria['el desembarco'] %}
    {% assign foto = site.fotos | where: "image", item | first %}

      <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4 isotope-item tid-3">
        <a href="{{ "/assets/images/fotos/" | append: item | absolute_url }}">
          <img src="{{ "/assets/images/fotos/350x233/" | append: item | absolute_url }}"
               title="{{ foto.descripcion }}"
               alt="{{ foto.descripcion }}"
               class="img-responsive thumbnail">
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
</div>
<div class="row isotope">
  <ul class="list-unstyled" data-sort-id="fotos-centenario">
    {% for item in page.galeria['los 5 continentes'] %}
    {% assign foto = site.fotos | where: "image", item | first %}

      <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4 isotope-item tid-3">
        <a href="{{ "/assets/images/fotos/" | append: item | absolute_url }}">
          <img src="{{ "/assets/images/fotos/350x233/" | append: item | absolute_url }}"
               title="{{ foto.descripcion }}"
               alt="{{ foto.descripcion }}"
               class="img-responsive thumbnail">
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
</div>
<div class="row isotope">
  <ul class="list-unstyled" data-sort-id="fotos-centenario">
    {% for item in page.galeria['honores'] %}
    {% assign foto = site.fotos | where: "image", item | first %}

      <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4 isotope-item tid-3">
        <a href="{{ "/assets/images/fotos/" | append: item | absolute_url }}">
          <img src="{{ "/assets/images/fotos/350x233/" | append: item | absolute_url }}"
               title="{{ foto.descripcion }}"
               alt="{{ foto.descripcion }}"
               class="img-responsive thumbnail">
      </a>
      </div>
    {% endfor %}
  </ul>
</div>
