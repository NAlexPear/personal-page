$('.navbubbles, #menubar, .contact-target').not('.post-nav').on('click','a', function(){
  var class_section = $(this).attr('data-action');
  if(class_section==='blog-link'){
    return true;
  } else {
    event.preventDefault();
    $('#content>div').not($('.'+class_section)).addClass('hidden');
    $('.'+class_section).removeClass('hidden');
  }
});

(function(window, document, $) {
  'use strict';

  var url = window.location.href
  var targetClass = url.split('?')[1];
  if (targetClass !== undefined) {
    $('#content>div').not($('.'+targetClass)).addClass('hidden');
    $('.'+targetClass).removeClass('hidden');
  }
}(window, document, window.jQuery));
