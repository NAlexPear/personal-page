(function(window, document, $){
  //navigation menu options, slide in from the left
  $('.ti-menu').click(function(){
    if($('#menubar').hasClass('expanded')){
        $('#menubar').animate({left:'-400px'},function(){
          $('#menubar').removeClass('expanded');
        });
        $('#mobile-nav>li>div>span:first-child').removeClass('ti-close').addClass('ti-menu');
    } else {
        $('#menubar').addClass('expanded').animate({left:'0px'});
        $('#mobile-nav>li>div>span:first-child').removeClass('ti-menu').addClass('ti-close');
      }
    });
  $('#menubar a').click(function(){
    if($('#menubar').hasClass('expanded')){
      $('#menubar').removeClass('expanded').animate({left:'-400px'});
      $('#mobile-nav>li>div>span:first-child').removeClass('ti-close').addClass('ti-menu');
    }
  });

  //contact form options, appearing as full screen overlay
  $('#mobile-nav .ti-email').on('click', function () {
    $('#mobile-contact-overlay').removeClass('hidden');
  });
  $('.contact-form>form>span').on('click', function(){
    $('#mobile-contact-overlay').addClass('hidden');
  });
  $('button.cancel').on('click', function(){
    $('#mobile-contact-overlay').addClass('hidden');
  });
}(window, document, window.jQuery));
