$(function(){
    // counter
    $('.counter').counterUp({
        delay: 10,
        time: 5000
    });

    // engineers-item-slider
    $('.engineers-item-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        arrows:true,
        prevArrow:".left",
        nextArrow:".right",
        pauseOnHover:false,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              pauseOnHover:false,
            }
          },
          
        ]
    });

    // slider-main-wrapper
    $('.slider-main-wrapper').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows:false,
        pauseOnHover: false,
      });

      // hamburger
    $(".navbar-toggler").click(function(event) {
        event.stopPropagation();
        $("#hamburger-menu").toggleClass("open");
        $("#menu-container .menu-list").toggleClass("active");
        slideMenu();
    })
  
  // scrol-function
  $(window).scroll(function(){
    var top = $(this).scrollTop()
    if(top > 500){
      $(".navbar").addClass("sticky-menu")
    }
    else{
      $(".navbar").removeClass("sticky-menu")
    }
    if(top > 30){
      $(".top-up-button").fadeIn(300)
    }
    else{
      $(".top-up-button").fadeOut(300)
    }
  });
  
  // top-up-button
  $(".top-up-button").click(function(){
    $("html,body").animate({scrollTop:0},1000)
  });
})