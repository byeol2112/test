new Swiper(".swiper", {

  slidesPerView: 3,
  slidesPerGroup: 3

});

$(document).ready(function(){

  $('.swiper-wrapper li').click(function(){
    $('.modal').addClass('show')
    $('.modal').append(`<div class="item_box">
    <iframe src="https://www.youtube.com/embed/${$(this).data("video")}?rel=0&playsinline=1&autoplay=1" frameborder="0" allowfullscreen>
    </iframe>
    </div>`)
  })

})