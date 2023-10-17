$(document).ready(function () {

  //서브메뉴
  $('.list').hide();

  $('.title > .sub_title').hover(function () {
    $(this).find('.list').stop().slideToggle();
    $(this).toggleClass('active');
  });


  // 전체메뉴
  $(".all_wrap").hide();

  $(".ham").click(function () {
    $(".all_wrap").fadeIn();
  });
  $(".close").click(function () {
    $(".all_wrap").fadeOut();
  });

  //챕터 슬라이드
  const chapter = new Swiper('.chapter', {

    // 방향 버튼 지정
    navigation: {
      nextEl: '.swiper-button-next',  // 다음 버튼
      prevEl: '.swiper-button-prev',  // 이전 버튼
    },

    // 페이지 버튼 지정
    pagination: {
      el: '.swiper-pagination',  // 버튼 태그 설정
      type: 'bullets',  // 버튼 종류 설정 'bullets' | 'fraction' | 'progressbar'
      clickable: true,  // 버튼 클릭 여부
    },

    direction: "horizontal",
    mousewheel: true,
    speed: 1000,


  }); // 옵션


  //DCEU 슬라이드
  // const mv1 = new Swiper('.dceu-bk_text', {

  //   // 방향 버튼 지정
  //   navigation: {
  //     nextEl: '.swiper-button-next',  // 다음 버튼
  //     prevEl: '.swiper-button-prev',  // 이전 버튼
  //   },

  //   // 페이지 버튼 지정
  //   pagination: {
  //     el: '.swiper-pagination',  // 버튼 태그 설정
  //     type: 'bullets',  // 버튼 종류 설정 'bullets' | 'fraction' | 'progressbar'
  //     clickable: true,  // 버튼 클릭 여부
  //   },

  //   direction: "horizontal",
  //   mousewheel: true,
  //   speed: 1000,

  // }); // 옵션


  //DCEU 슬라이드 2
  // const mv_list = new Swiper('.mv_list', {


  //   slidesPerView: "3",
  //   spaceBetween: 20,
  //   breakpoints: {
  //     1024: {  // 가로해상도가 1024px 이상일 경우
  //       slidesPerView: 3,
  //       spaceBetween: 40,
  //     },
  //     1600: {  // 가로해상도가 1600px 이상일 경우
  //       slidesPerView: 3,
  //       spaceBetween: 100,
  //     },

  //   },

  //   // 페이지 버튼 지정
  //   scrollbar: {
  //     el: ".swiper-scrollbar",
  //   },
  //   direction: "horizontal",
  //   mousewheel: true,
  //   speed: 700,

  // }); // 옵션


  const mv_list = new Swiper(".mv_list", {
    spaceBetween: 10,

    slidesPerView: "1",
    // spaceBetween: 20,
    breakpoints: {
      768: {  // 가로해상도가 1024px 이상일 경우
        slidesPerView: 3,
        spaceBetween: 10,
      },
  
    },

    scrollbar: {
      el: ".swiper-scrollbar",
    },
    mousewheel: true,
    watchSlidesProgress: true,
    loop: true,
  });

  const dceu_bk_text = new Swiper(".dceu_bk_text", {
    thumbs: {
      swiper: mv_list,
    },
    speed: 1000,
    direction: "horizontal",
    mousewheel: true,
    speed: 1000,
    loop: true,
  });


  // best_scenes
  var scenes_jl = new Swiper(".scenes_jl", {
    direction: "horizontal",
    slidesPerView: "auto",
    freeMode: true,
    // scrollbar: {
    //   el: ".swiper-scrollbar",
    // },
    mousewheel: true,
  });

  // // video
  // var cip = $(".scenes_movie").hover(hoverVideo, hideVideo);

  // function hoverVideo(e) {
  //   $(this).get(0).play('.scenes_movie > video');
  // }

  // function hideVideo(e) {
  //   $(this).get(0).pause('.scenes_movie > video');
  // }


  var cip = $(".scenes_movie").hover(hoverVideo, hideVideo);
  var vNum;

  $(".scenes_movie a").mouseover(function () {
    vNum = $(this).index();
  });

  function hoverVideo(e) {
    $('video', this).get(vNum).play();
  }

  function hideVideo(e) {
    $('video', this).get(vNum).pause();
  }



});