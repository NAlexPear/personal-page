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

var url = window.location.href;

if(url.match('/?/')){
  console.log(url);
  var targetClass = url.split('?')[1];
  console.log(targetClass);
  
  $('#content>div').not($('.'+targetClass)).addClass('hidden');
  $('.'+targetClass).removeClass('hidden');
}
