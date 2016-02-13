function Move() {

  var obj = {};
  var T = TweenLite;

  //open/close side menu on mobile
  obj.menu = {
    close(menu, icon){
      T.to(menu, 0.2, {left:"-400px"});
      menu.className = menu.className.replace(' expanded','');
      icon.className = icon.className.replace('ti-close', 'ti-menu');
    },
    open(menu, icon){
      T.to(menu, 0.2, {left:"0px"});
      menu.className += ' expanded';
      icon.className = icon.className.replace('ti-menu', 'ti-close');
    }
  };

  obj.resume = function () {

    var p = document.querySelector('.resume-drop');
    var ul = p.querySelector('ul');

    function getChildren(n, skip){
      var r = [];
      for ( ; n; n = n.nextSibling){
        if ( n.nodeType == 1 && n != skip) r.push(n);
      }
      return r;
    };

    function getSiblings(n){
      return getChildren(n.parentNode.firstChild, n);
    };

    ul.addEventListener('click', function(e) {
      var li = e.target;

      if( li && li.nodeName === 'LI'){
        var blurb = li.childNodes[2];
        var otherLi = getSiblings(li);

        function removeClasses(){
          blurb.className = blurb.className.replace('expanded','');
          li.className = li.className.replace('active','');
        };

        function addClasses(){
          blurb.className += ' expanded';
          li.className += ' active';
        };

        if(blurb.className.match(/expanded/)){
          removeClasses();
          T.to(blurb, 0.2, { height:"0" });
        } else {
          addClasses();

          T.to(blurb, 0.2, { height: "7em" });

          for(var i = 0; i < otherLi.length; i++){
            if (otherLi[i].className) {
              var otherBlurb = otherLi[i].childNodes[2];
              otherLi[i].className = otherLi[i].className.replace('active','');
              otherBlurb.className = otherBlurb.className.replace('expanded','');
              T.to(otherBlurb, 0.2, { height:"0" });
            }
          }
        }
      }
    });
  };

  obj.portfolio = function () {
    var portfolio = document.querySelector('.portfolio-display');
    var proj = portfolio.getElementsByTagName('DIV');

    portfolio.addEventListener('click', function(e){
      if(e.target.nodeName === 'IMG'){
        var picture = e.target.parentNode;
        var parent = picture.parentNode;
        var desc = parent.querySelector('.portfolio-description');
        var sub = parent.querySelector('.subtitle');

        //change button function based on div expansion with if-else
        if(parent.className && parent.className.match(/expanded/)){
              //hide description before parent animation, then animate parent width
              function parcheesi(){
                T.to(parent, 0.2, { width:"220px" });
              };
              T.to(desc, 0.2, { height:"0", onComplete:parcheesi });

              //remove expanded class on parent div
              parent.className = parent.className.replace('expanded','');
          }
        else {
            //animate parent width, then show portfolio-description
            function description(){
              T.to(desc, 0.2, { height:"90vh" });
            };
            T.to(parent, 0.2, { width:"90%", onComplete:description });

            //add expanded class on parent div
            parent.className += ' expanded';
        }
      }
    });
  };

  return obj;
};
