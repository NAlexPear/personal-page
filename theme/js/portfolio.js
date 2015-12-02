$(function(){
  $('.portfolio-display>div').hover(function(){
    //display learn-more button
    $(this).children('.learn-more').removeClass('hidden');
  }, function () {
    $(this).children('.learn-more').addClass('hidden');
  });
});

$('.portfolio-display>div').on('click', 'button.learn-more', function(){
  //change button function based on div expansion with if-else
  if($(this).parent().hasClass('expanded')){
        //change learn-more text to 'learn more' again
        $(this).html('learn more');
        //hide description before parent animation, then animate parent width over 500ms
        $(this).siblings('div.portfolio-description').slideUp('fast', function(){
          $(this).parent().animate({
            width: "220px"
          }, 500);
        });
        //remove expanded class on parent div
        $(this).parent().removeClass('expanded');
        //show the subtitle again
        $(this).siblings('.subtitle').removeClass('hidden');
    }
  else {
      //change learn-more text to 'exit'
      $(this).html('exit');
      //hide the subtitle
      $(this).siblings('.subtitle').addClass('hidden');
      //animate parent width over 500ms, then show portfolio-description
      $(this).parent().animate({
        width: "90%"
      }, 500, function(){
        $(this).children('div.portfolio-description').slideDown('fast');
      });
      //add expanded class on parent div
      $(this).parent().addClass('expanded');
  }
});
