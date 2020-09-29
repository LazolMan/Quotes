jQuery(function ($) {
  "use strict";

  if ($(".left-box__slider").length) {
    $(".left-box__slider").slick({
      arrows: false,
      dots: true,
      autoplay: false,
      autoplaySpeed: 5000,
      swipeToSlide: true,
    });
  }
});
