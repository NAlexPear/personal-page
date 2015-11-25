$(function () {
  $('.resume-drop>ul').on('click','li',function(){
    if($(this).children('div').hasClass('hidden')){
      $(this).siblings().children('div').addClass('hidden');
      $(this).children('div').removeClass('hidden');
      $(this).addClass('active');
      $(this).siblings().removeClass('active');
    } else {
      $(this).children('div').addClass('hidden');
      $(this).removeClass('active');
    }
  });
});
