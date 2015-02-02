
$(function() {

  $("header.headroom").headroom({
    "offset": 50,
    "tolerance": 5,
    "classes": {
      "initial": "animated",
      "pinned": "slideDown",
      "unpinned": "slideUp"
    }
  });


});



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

