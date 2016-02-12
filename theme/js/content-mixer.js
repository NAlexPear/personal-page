(function(window, document) {
  'use strict';
  var navBubbles = document.querySelectorAll('.navbubbles');
  var contactTarget = document.querySelectorAll('.contact-target');
  var targets = [];

  var content = document.getElementById('content');
  var children = content.childNodes;

  function targetify(){
    for (var i = 0; i < arguments.length; i++){
      var args = arguments[i];
      for (var j = 0; j < args.length; j++){
        targets.push(args[i]);
      }
    }
  };

  function mixer(targetClass){
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
  };

  targetify(navBubbles, contactTarget);
  targets.push(document.getElementById('menubar'));

//mix content when menu items are clicked
  for (var i =0; i < targets.length; i++){
    targets[i].addEventListener('click', function(e){
      var classSection = e.target.parentNode.getAttribute('data-action');

      if(classSection !== 'blog-link'){
        mixer(classSection);
      }
    });
  }

//mix content according to URL on page load (if applicable)
  var url = window.location.href;
  var targetClass = url.split('?')[1];

  mixer(targetClass);

}(window, document));
