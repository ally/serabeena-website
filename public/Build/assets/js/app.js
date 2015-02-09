
// $(function() {

//   $("header.headroom").headroom({
//     "offset": 50,
//     "tolerance": 5,
//     "classes": {
//       "initial": "animated",
//       "pinned": "slideDown",
//       "unpinned": "slideUp"
//     }
//   });


// });



$(function() {

  var nav = $(".navTrigger");

  var showOverlay = function() {
    $('body').addClass('noscroll nav-open').find('#overlay').removeClass('hidden').addClass('visible');
  };

  var hideOverlay = function() {
    $('body').removeClass('noscroll nav-open').find('#overlay').removeClass('visible').addClass('hidden');
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

  $( "<div class='clear-row'></div>" ).insertBefore( ".clear" );
  $( ".clear-row" ).prev('.grid').addClass( "omega" );
});


$(function() {
  $('.popup-video').magnificPopup({
    disableOn: 0,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
  });
});

$(function() {
  var si = $('.royalSlider').royalSlider({
    loop: false,
    keyboardNavEnabled: true,
    controlsInside: false,
    imageScaleMode: 'fill',
    arrowsNavAutoHide: false,
    autoScaleSlider: true, 
    
    controlNavigation: 'bullets',
    thumbsFitInViewport: false,
    navigateByClick: true,
    startSlideId: 0,
    autoPlay: false,
    transitionType:'move',
    globalCaption: true,
    deeplinking: {
      enabled: true,
      change: false
    },
    /* size of all images http://help.dimsemenov.com/kb/royalslider-jquery-plugin-faq/adding-width-and-height-properties-to-images */
    imgWidth: 1360
    // imgHeight: 680


    // addActiveClass: true,
    // arrowsNav: true,
    // arrowsNavAutoHide: false,
    // autoScaleSlider: true, 
    // autoScaleSliderWidth: 1440,     
    // autoScaleSliderHeight: 667,
    // loop: true,
    // fadeinLoadedSlide: true,
    // globalCaption: true,
    // keyboardNavEnabled: true,
    // globalCaption: true,
    // globalCaptionInside: false
  }).data('royalSlider');
}); 

