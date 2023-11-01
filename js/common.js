$(document).ready(function(){

  $('.m-btn').click(function(){
    $('.m-btn').toggleClass('on')
    $('.m-nav').toggleClass('on')
    $('.w-mask').fadeToggle();
  })

})