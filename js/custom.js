$(function(){

//===================Testimonial Slider part start here===============
$('.testi-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay:true,
    fade: true,
    asNavFor: '.testi-img-main'
  });
  $('.testi-img-main').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.testi-slider',
    dots: false,
    arrows:true,
    prevArrow:'.testi-left-array',
    nextArrow:'.testi-right-array',
    centerMode:true,
    centerPadding:0,
    autoplay:true,
  });


  //========================Blog-slider======================
  $('.main-blog-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    prevArrow:'.slider-left-array',
    nextArrow:'.slider-right-array',
    centerMode:true,
    centerPadding:0,
    autoplay:true,
    autoplaySpeed:2500,
  });

//====================counter part======================
$('.counter').counterUp({
  delay: 5,
  time: 3000,
});

//===================Marketplace part slider============

$('.marketplace-slider-main').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  dots: false,
  prevArrow:'.marketplace-left-array',
  nextArrow:'.marketplace-right-array',
  centerMode:true,
  centerPadding:0,
  autoplay:true,
  autoplaySpeed:1500,
});


//==================bottom to top=========================
$('.bottom-to-top').click(function(){
  $('html, body').animate({scrollTop:0},1500);
});

$(window).scroll(function(){
  var bottom_to_top = $(this).scrollTop();
  if(bottom_to_top > 200){
    $('.bottom-to-top').fadeIn(500);
  }
  else {
    $('.bottom-to-top').fadeOut(500);
  }

});



//===============fixed navbar part start here================
$(window).scroll(function(){
  var bottom_to_top = $(this).scrollTop();
  if(bottom_to_top > 100){
    $('.navbar').addClass('nav-add');
  }
  else {
    $('.navbar').removeClass('nav-add');
  }

});



//=====================animation Scrolling Nav=====================
$(".nav-item .nav-link").on('click', function(event) {
  if (this.hash !== "") {
    event.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 1000, function(){
      window.location.hash = hash;
    });
  }
});


//=====================animation Scrolling Footer Link=====================
$(".imp-link .link-item").on('click', function(event) {
  if (this.hash !== "") {
    event.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 1000, function(){
      window.location.hash = hash;
    });
  }
});

  //=========================Preloader Part Start Here=========================
  $(window).on('load', function(){
      $('.preloader').delay(500).fadeOut(500)
  })
 




});