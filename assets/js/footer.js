var tpj = jQuery;
tpj.noConflict();

tpj(document).ready(function($) {

  var $container = $(".isotope").imagesLoaded(function() {
    $container.isotope({
      itemSelector: ".isotope-item",
      layoutMode: "masonry"
    });

    $(".filters").on("click", "a", function() {
      var filterValue = $(this).attr("data-filter");
      $container.isotope({ filter: filterValue });
    });

    $(".filters").each(function(i,li) {
      var $li = $(li);
      $li.on("click", "li", function() {
        $li.find(".active").removeClass("active");
        $(this).addClass("active");
      });
    });

    $(".isotope").magnificPopup({
      type: "image",
      delegate: "a",
      mainClass: "mfp-with-zoom",
      gallery: {
        enabled: true
      },
      zoom: {
        enabled: true,
        duration: 300,
        easing: "ease-in-out"
      }
    });
  });

  $(".filters").prepend("<li class=\"active\"><a data-filter=\"*\" href=\"#\">Todo(s)</a></li>");

});
