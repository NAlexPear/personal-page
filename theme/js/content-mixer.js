$('.navbubbles, #menubar, .contact-target').on('click','a', function(){
  var class_section = $(this).attr('data-action');
  if(class_section==='blog-link'){
    return true;
  } else {
    event.preventDefault();
    $('#content>div').not($('.'+class_section)).addClass('hidden');
    $('.'+class_section).removeClass('hidden');
  }
});
