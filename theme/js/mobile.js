(function(window, document, Move){
  //navigation menu options, slide in from the left
  var nav = document.getElementById('mobile-nav');
  var mobileIcon = nav.querySelector('.ti-menu');
  var mobileMenu = document.getElementById('menubar');

  var contact = nav.querySelector('.ti-email');
  var overlay = document.getElementById('mobile-contact-overlay');
  var exit = overlay.querySelector('.ti-close');
  var cancel = overlay.querySelector('button.cancel');

  mobileIcon.addEventListener('click', function(){
    if(mobileMenu.className.match('expanded')){
      Move.menu.close(mobileMenu, mobileIcon);
    } else {
      Move.menu.open(mobileMenu, mobileIcon);
    }
  });

  mobileMenu.addEventListener('click', function(e){
    if (e.target){
      if(mobileMenu.className.match('expanded')){
        Move.menu.close(mobileMenu, mobileIcon);
      }
    }
  });

  //contact form options, appearing as full screen overlay
  contact.addEventListener('click', function () {
    overlay.className = overlay.className.replace('hidden', '');
  });
  exit.addEventListener('click', function(){
    overlay.className += ' hidden';
  });
  cancel.addEventListener('click', function(){
    overlay.className += ' hidden';
  });
}(window, document, Move()));
