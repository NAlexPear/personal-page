

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

(function(window, document) {
  'use strict';

  var url = window.location.href;
  var content = document.getElementById('content');
  var children = content.childNodes;

  var targetClass = url.split('?')[1];

  if (targetClass !== undefined) {
    for(var i = 0; i < children.length; i++){
      var el = children[i];
      if(el.className && el.className.match(targetClass)){
        el.className = el.className.replace('hidden', '');
      } else {
        el.className += ' hidden';
      }
    }
  }
}(window, document));
