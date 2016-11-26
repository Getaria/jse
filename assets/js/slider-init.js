var tpj=jQuery;
tpj.noConflict();

tpj(document).ready(function($) {

  if (tpj.fn.cssOriginal!=undefined)
      tpj.fn.css = tpj.fn.cssOriginal;


  var api = tpj(".fullwidthbanner").revolution({
      delay: 5000,
      startheight:320,
      startwidth: 1140,
      onHoverStop: "off",
      shadow: 1
  });

  api.bind("revolution.slide.onloaded",function (e,data) {
       jQuery(".tparrows.default").css("display", "block");
       jQuery(".tp-bullets").css("display", "block");
       jQuery(".tp-bannertimer").css("display", "block");
  });

});
