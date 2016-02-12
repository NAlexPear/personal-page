(function(window, document) {
  'use strict';

  String.prototype.replaceAll = function (search, replace) {
    if (replace === undefined) {
        return this.toString();
    }
    return this.split(search).join(replace);
  };

  var navBubbles = document.querySelectorAll('.navbubbles');
  var contactTarget = document.querySelectorAll('.contact-target');
  var targets = [];

  var content = document.getElementById('content');
  var children = content.childNodes;


  var url = window.location.href;

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
        if(el.className && el.className.match(targetClass)) el.className = el.className.replaceAll('hidden', '');
        else if (el.className && el.className.match(/hidden/)) el.className = el.className;
        else if (el.className) el.className += ' hidden';
      }
    }
  };

//mix content according to URL on page load (if applicable)
  var targetClass = url.split('?')[1];
  mixer(targetClass);

//set up targets array
targetify(navBubbles, contactTarget);
targets.push(document.getElementById('menubar'));

//mix content when menu items are clicked on the front page
for (var i =0; i < targets.length; i++){
  targets[i].addEventListener('click', function(e){
    var classSection = e.target.parentNode.getAttribute('data-action');

    if(classSection !== 'blog-link'){
      // event.preventDefault();
      mixer(classSection);
    }
  });
}

}(window, document));
