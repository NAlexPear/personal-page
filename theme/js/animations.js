function Move() {

  var obj = {};
  var T = TweenLite;

  //private helpers
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
    var sidebar = document.getElementById('portfolio-sidebar');
    var sbIcons = sidebar.getElementsByTagName('DIV');
    var iconHeights = [];

    for (var i = 0; i < sbIcons.length; i++) {
      var h = sbIcons[i].clientHeight;
      iconHeights.push(h);
    }

    portfolio.addEventListener('click', function(e){
      if(e.target.nodeName === 'IMG'){
        var picture = e.target.parentNode;
        var parent = picture.parentNode;
        var desc = parent.querySelector('.portfolio-description');
        var sub = parent.querySelector('.subtitle');
        var sibs = getSiblings(parent);

        //expand sidebar if it isn't already
        if(!sidebar.className){

          function expand(){
            sidebar.className += ' expanded';
          };

          T.to(sidebar, 0.2, {
            width:"25%",
            'border-right':"solid 1.3px lightgrey",
            onComplete: expand
          });
        }

        //change button function based on div expansion with if-else
        if(parent.className && parent.className.match(/expanded/)){

          //remove sidebar (unless sidebar image is clicked)
          function sb(){
            function cb(){
              sidebar.className = sidebar.className.replace(' expanded','');
            };

            T.to(sidebar, 0.2, {
              width:"0vw",
              'border-right':'transparent',
              onComplete: cb
            });
          };

          //hide description before parent animation, then animate parent width
          function parcheesi(){
            T.to(parent, 0.2, { width:"220px", onComplete: sb });
            T.to(e.target, 0.15, { clearProps:"opacity" });

            //show other regular menu options
            for (var i = 0; i < sibs.length; i++) {
              T.to(sibs[i], 0.15, { clearProps:"height,display" });
            }

            //re-add clicked item as sidebar option
            for (var i = 0; i < sbIcons.length; i++) {
              if(sbIcons[i].className.match(parent.id)){
                T.to(sbIcons[i], 0.15, { clearProps:"height,display" });
                sbIcons[i].className = sbIcons[i].className.replace('inactive','');
              }
            }
          };

          T.to(desc, 0.1, { height:"0", onComplete:parcheesi });

          //remove expanded class on parent div
          parent.className = parent.className.replace('expanded','');

        } else {
        //ELSE => the original/default state, no sidebar

          //hide other non-sidebar options
          for (var i = 0; i < sibs.length; i++) {
            T.to(sibs[i], 0.15, { height: "0", display: "none" });
          }

          //remove clicked item from sidebar options
          for (var i = 0; i < sbIcons.length; i++) {
            if(sbIcons[i].className.match(parent.id)){
              T.to(sbIcons[i], 0.15, { height:"0", display:"none" });
              sbIcons[i].className += ' inactive';
            }
          }

          //animate parent width, then show portfolio-description
          function description(){
            function opacity(){
              T.to(e.target, 0.15, { opacity:"1" });
            }
            T.to(desc, 0.2, { height:"90vh", onComplete: opacity });
          };

          T.to(parent, 0.2, { width:"90%", onComplete: description });

          //add expanded class on parent div
          parent.className += ' expanded';
        }
      }
    });

    sidebar.addEventListener('click', function (e) {
      var pic = e.target.parentNode;
      var div = pic.parentNode;
      var sibs = getSiblings(div);

      function clear(el){
        T.to(el, 0.05, { clearProps: "height, display" });
        el.className = el.className.replace(' inactive','');
      };

      function restoreSibs(el){
        for (var i = 0; i < sibs.length; i++) {
          if(sibs[i].className && sibs[i].className.match(/inactive/)){
            T.to(sibs[i], 0.15, {
              height: iconHeights[i],
              display: "block",
              onComplete: clear,
              onCompleteParams: [sibs[i]]
            });
          }
        }
        el.className += ' inactive';
      };

      if(e.target.nodeName === 'IMG'){
        //remove clicked item from sidebar options, then restore siblings
        T.to(div, 0.15, {
          height:"0",
          display:"none",
          onComplete: restoreSibs,
          onCompleteParams: [div]
        });

        //show its corresponding info in the main display section
        for (var i = 0; i < proj.length; i++) {
          //hide currently displayed project
          if(proj[i].className && proj[i].className.match(/expanded/)){
            var project = proj[i];
            console.log(project.id);
            var desc = project.querySelector('.portfolio-description');

            function projDisplay() {
              T.to(project, 0.2, {
                height:"0",
                display:"none",
                clearProps:"width"
              });
            };

            T.to(desc, 0.15, {
              height: "0",
              onComplete:projDisplay
            });

            project.className = project.className.replace('expanded','');
          }

          //show new project
          if(proj[i].id && proj[i].id.match(div.className)){
            var project = proj[i];
            var desc = project.querySelector('.portfolio-description');

            function cb(el) {
                T.to(desc, 0.15, { height: "90vh", clearProps:"display" });
                el.className += ' expanded';
            };

            T.to(project, 0.2, {
              width: "90%",
              clearProps:"display, height",
              onComplete: cb,
              onCompleteParams: [project]
            });


          }
        }

      }


    });
  };

  return obj;
};
