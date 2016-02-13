function Animate() {

  var obj = {};

  //open/close side menu on
  obj.menu = {
    close(menu, icon){
      TweenLite.to(menu, 0.2, {left:"-400px"});
      menu.className = menu.className.replace(' expanded','');
      icon.className = icon.className.replace('ti-close', 'ti-menu');
    },
    open(menu, icon){
      TweenLite.to(menu, 0.2, {left:"0px"});
      menu.className += ' expanded';
      icon.className = icon.className.replace('ti-menu', 'ti-close');
    }
  };

  obj.scroller = function () {
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
        return false;
            }
        }
    });
  };

  obj.resume = function () {

    var p = document.querySelector('.resume-drop');
    var ul = p.querySelector('ul');

    ul.addEventListener('click', function(e) {
      var $el = $(e.target);

      if( e.target && e.target.nodeName === 'LI'){
        var $blurb = $el.children('div');
        var $otherBlurbs = $el.siblings().children('div');

        if($blurb.hasClass('expanded')){
          $blurb.slideUp('fast').removeClass('expanded');
          $el.removeClass('active');
        } else {
          $otherBlurbs.removeClass('expanded').slideUp('fast');
          $blurb.slideDown('fast').addClass('expanded');
          $el.addClass('active');
          $el.siblings().removeClass('active');
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

        console.log(parent.className);
        //change button function based on div expansion with if-else
        if(parent.className && parent.className.match(/expanded/)){
              //hide description before parent animation, then animate parent width
              function parcheesi(){
                TweenLite.to(parent, 0.2, { width:"220px" });
              };
              TweenLite.to(desc, 0.2, { height:"0", onComplete:parcheesi });

              //remove expanded class on parent div
              parent.className = parent.className.replace('expanded','');
          }
        else {
            //animate parent width, then show portfolio-description
            function description(){
              TweenLite.to(desc, 0.2, { height:"90vh" });
            };
            TweenLite.to(parent, 0.2, { width:"90%", onComplete:description });

            //add expanded class on parent div
            parent.className += ' expanded';
        }
      }
    });
  };

  return obj;

};
