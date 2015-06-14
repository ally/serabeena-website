
// $(function() {
//   $("header.headroom").headroom({
//     "offset": 50,
//     "tolerance": 5,
//     "classes": {
//       "initial": "animated",
//       "pinned": "bounce",
//       "unpinned": "slideUp"
//     }
//   });
// });


$(function() {

  var nav = $(".navTrigger");

  var showOverlay = function() {
    $('body').addClass('noscroll nav-open').find('#overlay').removeClass('initial hidden bounceOutUp').addClass('visible bounceInDown');
  };

  var hideOverlay = function() {
    $('body').removeClass('noscroll nav-open').find('#overlay').removeClass('visible bounceInDown').addClass('hidden bounceOutUp');
  };

  var toggleOverlay = function() {
    return $("#overlay").hasClass('visible') ? hideOverlay() : showOverlay();
  };
 

  nav.on('click', function(event) {
    toggleOverlay();
    return false;
  });


});


$(function() {
  var classes = ["blue", "pink", "yellow", "orange", "purple"];
    $(".color-me").each(function() {
      $(this).addClass(classes[~~(Math.random()*classes.length)]);
    });
});

$(function() {
  $("img").mousedown(function(){
    return false;
  });
});


$(function() {
  
  $('.royalSlider').royalSlider({
    arrowsNav: true,
    loop: true,
    keyboardNavEnabled: true,
    controlsInside: false,
    imageScaleMode: 'fill',
    arrowsNavAutoHide: false,
    autoScaleSlider: true, 
    autoScaleSliderWidth: 1360,     
    autoScaleSliderHeight: 720,
    controlNavigation: 'bullets',
    thumbsFitInViewport: false,
    navigateByClick: true,
    startSlideId: 0,
    transitionType: 'fade',
    autoPlay: {
      enabled: true,
      pauseOnHover: true,
      delay: 5000
    },
    transitionSpeed: 400,
    globalCaption: true
  });
}); 

