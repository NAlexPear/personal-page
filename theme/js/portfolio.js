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
        //animate parent width over 500ms, then hide portfolio-description
        $(this).parent().animate({
          width: "220px"
        }, 500, function(){
          console.log('animation complete');
          $('div.portfolio-description').addClass('hidden');
        });
        //remove expanded class on parent div
        $(this).parent().removeClass('expanded');
    }
  else {
      //change learn-more text to 'exit'
      $(this).html('exit');
      //animate parent width over 500ms, then show portfolio-description
      $(this).parent().animate({
        width: "90%"
      }, 500, function(){
        $('div.portfolio-description').removeClass('hidden');
      });
      //add expanded class on parent div
      $(this).parent().addClass('expanded');
  }
});
