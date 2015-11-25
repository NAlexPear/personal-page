$(function () {
  $('.resume-drop>ul').on('click','li',function(){
    if($(this).children('div').hasClass('expanded')){
      $(this).children('div').slideUp('fast').removeClass('expanded');
      $(this).removeClass('active');
    } else {
      $(this).siblings().children('div').removeClass('expanded').slideUp('fast');
      $(this).children('div').slideDown('fast').addClass('expanded');
      $(this).addClass('active');
      $(this).siblings().removeClass('active');
    }
  });
});
