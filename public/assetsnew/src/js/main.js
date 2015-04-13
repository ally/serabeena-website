
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


function randOrd() {
  return (Math.round(Math.random())-0.5); 
}

$(function() {
  var classes = [ 'blue', 'pink', 'yellow', 'purple', 'orange' ];
  classes.sort( randOrd );
  $('.color-me').each(function(i, val) {
    $(this).addClass(classes[i]);
  });
});

// $(function() {
  
//   $('.royalSlider').royalSlider({
//     arrowsNav: true,
//     loop: true,
//     keyboardNavEnabled: true,
//     controlsInside: false,
//     imageScaleMode: 'fill',
//     arrowsNavAutoHide: false,
//     autoScaleSlider: true, 
//     autoScaleSliderWidth: 1500,     
//     autoScaleSliderHeight: 1000,
//     controlNavigation: 'bullets',
//     thumbsFitInViewport: false,
//     navigateByClick: true,
//     startSlideId: 0,
//     autoPlay: false,
//     transitionType:'move',
//     transitionSpeed: 400,
//     globalCaption: true,
//     deeplinking: {
//       enabled: true,
//       change: false
//     },
//     /* size of all images http://help.dimsemenov.com/kb/royalslider-jquery-plugin-faq/adding-width-and-height-properties-to-images */
//     imgWidth: 1500,
//     imgHeight: 1000
//   });
// }); 

