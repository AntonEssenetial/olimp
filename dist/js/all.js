$(document).ready(function() {
  // Menu
  // $('.main-menu__item:nth-child(3) > a').click(function(){
  //   $('.main-menu__item:nth-child(6)').removeClass('main-menu__item_dropdown');
  //   $('.main-menu__item:nth-child(3)').toggleClass('main-menu__item_dropdown');
  //   return false
  // });
  // $('.main-menu__item:nth-child(6) > a').click(function(){
  //   $('.main-menu__item:nth-child(3)').removeClass('main-menu__item_dropdown');
  //   $('.main-menu__item:nth-child(6)').toggleClass('main-menu__item_dropdown');
  //   return false
  // });


  // Custom scroll
  (function($){
    $(window).load(function(){
      $(".custom-scroll").mCustomScrollbar({
        scrollInertia:100,
        axis:"y",
        setWidth: false,
        setHeight: false,
        autoExpandScrollbar: true,
        contentTouchScroll: false
      });
    });
  })(jQuery);

  // Ch select 
  $(".ch-select").chosen({width: "100%"});


  // Clase banner
  $('.jsClose').click(function(){
    $('.section__banner').hide();
  });


  // Filter
  $('.jsHideFilter').click(function(event) {
    $(this).toggleClass('active');
    $('.section__filter__custom').toggleClass('jsHidden');
  });
  $('.jsFilter').click(function(event) {
    $(this).toggleClass('active');
    $('.section__filter-content').toggleClass('active');
  });


  // Map api item
  $('.jsMap-item').click(function(){
    $(this).closest('.map-api__item-wrapper').find('.map-api__item').toggleClass('jsVisible');
  });


  // Like 
  $('.item__like, .item__like-2').click(function(event) {
    $(this).toggleClass('active');
  });


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


  // Bx slider
  var slider = $('.bx-slider-1').bxSlider({
    pager: false,
    controls: false,
    auto: true,
    speed: 1000,
    pause: 7000,
    mode: 'fade'
  });

  
  var slider = $('.slic-blog').bxSlider({
    pager: true,
    controls: false,
    auto: true,
    speed: 1000,
    pause: 7000
  });


  // Slick slider
  $('.section__catalog__item__silder').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    fade: false,
    asNavFor: '.slick-thumbs'
  });

  $('.slick-thumbs').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.section__catalog__item__silder',
    dots: true,
    variableWidth: true,
    //  centerMode: true,
    focusOnSelect: true,
  });


  $('.section__catalog__item__silder-2').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    fade: false,
    asNavFor: '.slick-thumbs-2'
  });

  $('.slick-thumbs-2').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.section__catalog__item__silder-2',
    dots: true,
    variableWidth: true,
    //  centerMode: true,
    focusOnSelect: true,
  });


 //remove active class from all thumbnail slides
 $('.slick-thumbs .slick-slide').removeClass('slick-active');

 //set active class to first thumbnail slides
 $('.slick-thumbs .slick-slide').eq(0).addClass('slick-active');

 // On before slide change match active thumbnail to current slide
 $('.section__catalog__item__silder').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
  var mySlideNumber = nextSlide;
  $('.slick-thumbs .slick-slide').removeClass('slick-active');
  $('.slick-thumbs .slick-slide').eq(mySlideNumber).addClass('slick-active');
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
    menu.toggleClass('active animated');
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
  $(window).load(menuWidthSize);
  $(window).resize(menuWidthSize);


  // Landscape detect 
  function menuLandscape(){
    var height = $(window).height();
    var width = $(window).width();
    if(width>height && width <= 760) {
      // Landscape
      $(".main-menu").css('height', height);
      $(".main-menu").addClass('landscape')
    } else if ( width <= 760) {  
      $(".main-menu").css('height', 'auto');
      $(".main-menu").addClass('landscape')
    } else {
      $(".main-menu").removeClass('landscape')
      $(".main-menu").css('height', '70');
    }

  };

  $(window).on('load resize', menuLandscape);


});

