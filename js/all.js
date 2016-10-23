$(document).ready(function() {
  
  // Active tabs
  function swtch(tab, tabActive, tabContent, parentDiv){
    var tab = $(tab),
        tabActive = tabActive,
        parentEl = $(parentDiv),
        tabContent = $(tabContent);
    tab.click(function() {
      $(this).closest(parentEl).find(tab).removeClass(tabActive).eq($(this).index()).addClass(tabActive);
      $(this).closest(parentEl).find(tabContent).removeClass(tabActive).eq($(this).index()).addClass(tabActive);
    }).eq(0)
  };
  swtch('.jsTab', 'active', '.jsCont', '.jsParent')


  // Navgoco acordion
  var acordion = $('.jsNavgoco')
  acordion.navgoco({accordion: true});


  // Lightgallery
  // $().lightGallery(); 


  // Bx slider
  var slider = $('.bx-slider-1').bxSlider({
    pager: false,
    controls: false,
    auto: true,
    speed: 1000,
    pause: 7000,
    mode: 'fade'
  });


  var slider2 = $().bxSlider({
    pager: true,
    controls: false,
    auto: true,
    speed: 1000,
    pause: 5000,
    pagerCustom: '.bx__pager',
    responsive: true,
    // nextSelector: '.s-next',
    // prevSelector: '.s-prev',
    // nextText: '↽',
    // prevText: '↽'
  });


  // Bx custom controls 
  // $('#next').click(function(){
  //   slider1.goToNextSlide();
  //   slider2.goToPrevSlide();
  //   return false
  // });
  // $('#prev').click(function(){
  //   slider1.goToPrevSlide();
  //   slider2.goToNextSlide();
  //   return false
  // });


  // Slick slider
  $().slick({
  infinite: true,
  dots: false,
  arrows: false,
  autoplay: false,
  slidesToShow: 15,
  slidesToScroll: 9,
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  });


  // Scroll to top
  $().click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 1000);
    return false;
  });


  // Height detect funciton
  function heightDetect(){
    $('.section__head__slider, .slide, .bx-slider-1').css( 
      'height', $('.header-wrapper').height()
    );
  };
  heightDetect();
  $(window).resize(function(){
    heightDetect();
  });
  $(window).load(function(){
    heightDetect();
  });


  // Width detect funciton
  function widthDetect(){
    $().css( 
      'width', $(window).width()
    );
  };
  widthDetect();
  $(window).resize(function(){
    widthDetect();
  });


  // Toggle menu
  var menu = $('.main-menu')
  $('.jsTag').click(function(event) {
    $(this).toggleClass('active')
    menu.toggleClass('active animated fadeInUp');
    // $('.menu').toggleClass('active animated fadeInUp');
  });


  // Auto height column function
  equalheight = function(container){

  var currentTallest = 0,
       currentRowStart = 0,
       rowDivs = new Array(),
       $el,
       topPosition = 0;
   $(container).each(function() {
  
     $el = $(this);
     $($el).height('auto')
     topPostion = $el.position().top;
  
     if (currentRowStart != topPostion) {
       for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
         rowDivs[currentDiv].height(currentTallest);
       }
       rowDivs.length = 0; // empty the array
       currentRowStart = topPostion;
       currentTallest = $el.height();
       rowDivs.push($el);
     } else {
       rowDivs.push($el);
       currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
    }
     for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
       rowDivs[currentDiv].height(currentTallest);
     }
   });
  }
  
  $(window).load(function() {
    equalheight();
  });
  
  
  $(window).resize(function(){
    equalheight();
  });


  function createSlick() {
    $('.section__specialist').not('.slick-initialized').slick({
      infinite: true,
      dots: false,
      arrows: true,
      autoplay: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 1920,
          settings: "unslick"
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  }
  createSlick();
  $(window).on( 'resize', createSlick );


  function menuWidth(menuWidth) {
    $(menuWidth).css(
      'width', $(window).width()
    );
  }

  function menuWidthSize(){
    if ($(window).width() <= '760'){
      menuWidth('.main-menu')
    } else {
      $('.main-menu').css('width', 'auto')
    }
  }
  $(window).on('load resize',menuWidthSize);

});

