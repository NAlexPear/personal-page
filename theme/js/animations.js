function Animate() {

  var obj = {};

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

  return obj;

};
